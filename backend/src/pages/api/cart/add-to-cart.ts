import connectDB from '@/utils/connectToDb';
import verifyToken from '@/utils/verifyToken';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

import Cors from "cors";
import { runMiddleware } from "@/utils/middleware";


interface CartProduct {
    _id: string,
    quantity: number,
    price: number,
    images: string[],
    title: string,
    size: string,
    originalPrice: number,
}


const corsOptions: any = Cors({
    origin: "*", // Replace * with the specific origin(s) allowed to access your API
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Specify the HTTP methods allowed
    allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed headers
});

async function handler(req: NextApiRequest, res: NextApiResponse) {
    // check if method is not get 
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    // get auth token from header
    const token = req.headers.authorization;
    // if token is not provided, return error response
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const tokenData = verifyToken(token);
    // if token is not valid, return error response
    if (!tokenData) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const email = tokenData.email;

    // Get product id from the request body
    const { productId } = req.body;
    // If product id is not provided, return error response
    if (!productId) {
        return res.status(400).json({ message: "Product id is required" });
    }

    let client = null;
    try {
        client = await connectDB();
    }
    catch (error) {
        return res.status(500).json({ message: "Cannot connect to the database" });
    }


    const db = client.connection.db;
    const cart = db.collection('cart');
    // Get cart from the database
    const cartData = await cart.findOne({ email });
    // Cart not found
    if (!cartData) {
        return res.status(404).json({ message: "Cart not found" });
    }
    const productsCollection = db.collection('products');
    // Get product from the database
    const _idObject = new ObjectId(productId as string);
    const product = await productsCollection.findOne({ _id: _idObject });
    // Product not found
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    const productsInCart = cartData.cart as CartProduct[];
    // Check if product is already in the cart
    const productIndex = productsInCart.findIndex((item: CartProduct) => item._id === productId);
    // If product is already in the cart, increase the quantity by 1
    if (productIndex !== -1) {
        productsInCart[productIndex].quantity += 1;
        // Update the cart in the database
        await cart.updateOne({ email }, { $set: { cart: productsInCart } });
        // Return the products list
        return res.status(200).json({ message: "Product quantity increased" });
    }
    // If product is not in the cart, add it to the cart
    else {
        productsInCart.push({
            _id: productId,
            quantity: 1,
            price: product.price,
            originalPrice: product.original_price,
            images: product.images,
            title: product.title,
            size: product.size,
        });
        // Update the cart in the database
        await cart.updateOne({ email }, { $set: { cart: productsInCart } });
        // Return the products list
        return res.status(200).json({ message: "Product added to cart" });
    }


}


export default async function myAPI(req: NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, corsOptions);
    return handler(req, res);
}
