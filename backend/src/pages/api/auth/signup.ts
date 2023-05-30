import type { NextApiRequest, NextApiResponse } from 'next';
import Cors, { CorsOptions } from 'cors';
import { runMiddleware } from '@/utils/middleware';

const corsOptions: any = Cors({
    origin: '*', // Replace * with the specific origin(s) allowed to access your API
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify the HTTP methods allowed
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
});
// Initialize the CORS middleware

async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check if it is a GET request
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // get the user email and password from the request body
    const { email, password, name } = req.body;

    // Check if the email and password are valid
    if (!email || !password || !name) {
        return res.status(400).json({ message: 'Bad request' });
    }
    if (typeof email !== 'string' || typeof password !== 'string' || typeof name !== 'string') {
        return res.status(400).json({ message: 'Bad request' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Bad request', error: 'Invalid email' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'Bad request', error: 'Password should be at least 6 characters in length' });
    }
    if (name.length < 3) {
        return res.status(400).json({ message: 'Bad request', error: 'Name should be at least 3 characters in length' });
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

    // Get the users collection or throw error response if failed
    try {
        const db = client.connection.db;
        const users = db.collection('users');

        // Check if the user already exists
        const userExist = await users.findOne({ email: email });

        if (userExist) {
            // Close the database connection
            client.connection.close();
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user
        const newUser = {
            email: email,
            password: password,
            name: name
        };

        // Insert the new user to the database
        await users.insertOne(newUser);
        // Close the database connection
        // Create wishlist document in wishlist collection
        const wishlist = db.collection('wishlist');
        await wishlist.insertOne({ email: email, wishlist: [] });

        // Create cart document in cart collection
        const cart = db.collection('cart');
        await cart.insertOne({ email: email, cart: [] });

        // Crate order document in order collection
        const orders = db.collection('orders');
        await orders.insertOne({ email: email, orders: [] });

        // Create address document in address collection
        const addresses = db.collection('addresses');
        await addresses.insertOne({ email: email, addresses: [] });

        client.connection.close();
        // Return the result 
        return res.status(201).json({ message: "User created successfully" });
    }

    catch (error) {
        // Close the database connection
        client.connection.close();
        return res.status(500).json({ message: "Cannot register account, please try again later." });
    }
}

export default async function myAPI(req: NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, corsOptions);
    return handler(req, res);
}   