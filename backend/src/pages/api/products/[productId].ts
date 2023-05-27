import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check if it is a GET request
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    // Get the productId from the request
    const productId = req.query.productId;
    // Check if the productId is valid
    if (!productId) {
        return res.status(400).json({ message: 'Bad request' });
    }
    // Connect to the mongodb clinet using mongoose database and throw error response if failed
    const mongoose = require('mongoose');
    let client = null;
    try {
        client = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    catch (error) {
        return res.status(500).json({ message: "Cannot connect to the database" });
    }
    // Get the products collection and throw error response if failed
    try {
        const db = client.connection.db;
        const products = db.collection('products');
        const _idObject = new ObjectId(productId as string);
        // Get all the products from the database   
        const product = await products.findOne({ _id: _idObject });
        // Close the database connection
        client.connection.close();
        // Return the products list
        return res.status(200).json({ product: product });
    }
    catch (error) {
        // Close the database connection
        client.connection.close();
        return res.status(500).json({ message: "Cannot get the products list" });
    }
}