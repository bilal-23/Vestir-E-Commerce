import connectDB from '@/utils/connectToDb';
import verifyToken from '@/utils/verifyToken';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

import Cors from 'cors';
import { runMiddleware } from '@/utils/middleware'

const corsOptions: any = Cors({
    origin: '*', // Replace * with the specific origin(s) allowed to access your API
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify the HTTP methods allowed
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
});


// this endpoint have three methods, GET, POST
async function handler(req: NextApiRequest, res: NextApiResponse) {
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
        try {
            const db = client.connection.db;
            const wishlist = db.collection('wishlist');
            // Get all the products from the database
            const wishlistData = await wishlist.findOne({ email });
            // Return the products list
            return res.status(200).json({ wishlist: wishlistData });
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Cannot get the wishlist" });
        }
    }
    // If the method is POST, add the product to the wishlist
    if (req.method === 'POST') {
        try {

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
            // Return the products list
            return res.status(200).json({ message: "Product added to the wishlist" });
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Cannot add the product to the wishlist" });
        }
    }
}

export default async function myAPI(req: NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, corsOptions);
    return handler(req, res);
}   