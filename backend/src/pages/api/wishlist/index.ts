import connectDB from '@/utils/connectToDb';
import verifyToken from '@/utils/verifyToken';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import wishlist from "@/models/wishlist";

// this endpoint have three methods, GET, POST
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // check if method is not get post or delete
    if (req.method !== 'GET' && req.method !== 'POST') {
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

    let client = null;
    try {
        client = await connectDB();
    }
    catch (error) {
        return res.status(500).json({ message: "Cannot connect to the database" });
    }


    // If the method is GET, return the wishlist
    if (req.method === 'GET') {
        const db = client.connection.db;
        const wishlist = db.collection('wishlist');
        // Get all the products from the database
        const wishlistData = await wishlist.findOne({ email });
        // Close the database connection
        client.connection.close();
        // Return the products list
        return res.status(200).json({ wishlist: wishlistData });
    }
    // If the method is POST, add the product to the wishlist
    if (req.method === 'POST') {
        const _id = req.body.productId;
        // if the product id is not provided, return error response
        if (!_id) {
            return res.status(400).json({ message: "Product id is required" });
        }
        const db = client.connection.db;
        const wishlist = db.collection('wishlist');
        const products = db.collection('products');
        // Validate the product id
        const _idObject = new ObjectId(_id);
        let product = await products.findOne({ _id: _idObject });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        // Check if the product is already in the wishlist
        let wishlistData: any = await wishlist.findOne({ email: email });
        const wishlistedProducts = wishlistData?.wishlist || [];
        if (wishlistedProducts.includes(_id)) {
            return res.status(400).json({ message: "Product already in the wishlist" });
        }
        // Add the product to the wishlist
        wishlistedProducts.push(_id);
        // replace the wishlist
        await wishlist.replaceOne({ email }, { email, wishlist: wishlistedProducts });
        // Close the database connection
        client.connection.close();
        // Return the products list
        return res.status(200).json({ message: "Product added to the wishlist" });
    }

}