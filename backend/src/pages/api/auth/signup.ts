import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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

        client.connection.close();
        // Return the result 
        return res.status(200).json({ message: "User created successfully" });
    }

    catch (error) {
        // Close the database connection
        client.connection.close();
        return res.status(500).json({ message: "Cannot register account, please try again later." });
    }
}