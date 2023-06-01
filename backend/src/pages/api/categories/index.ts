import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { runMiddleware } from '@/utils/middleware'

const corsOptions: any = Cors({
    origin: '*', // Replace * with the specific origin(s) allowed to access your API
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify the HTTP methods allowed
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
});

async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check if it is a GET request
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
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
    // Get the categories collection and throw error response if failed
    try {
        const db = client.connection.db;
        const categories = db.collection('categories');
        // Get all the products from the database
        const categoriesList = await categories.find({}).toArray();
        // Close the database connection
        client.connection.close();
        // Return the products list
        return res.status(200).json({ categories: categoriesList });
    }
    catch (error) {
        // Close the database connection
        client.connection.close();
        return res.status(500).json({ message: "Cannot get the categories" });
    }
}

export default async function myAPI(req: NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, corsOptions);
    return handler(req, res);
}   