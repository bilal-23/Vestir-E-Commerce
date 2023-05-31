import type { NextApiRequest, NextApiResponse } from 'next';
import Cors, { CorsOptions } from 'cors';
import { runMiddleware } from '@/utils/middleware';
import { verifyPassword } from '@/utils/auth';

const corsOptions: any = Cors({
    origin: '*', // Replace * with the specific origin(s) allowed to access your API
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify the HTTP methods allowed
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
});
// Initialize the CORS middleware


async function handler(req: NextApiRequest, res: NextApiResponse) {
    // ALLOW CORS

    // Check if it is a POST request
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // get the user email and password from the request body
    const { email, password } = req.body;

    // Check if the email and password are valid
    if (!email || !password) {
        return res.status(400).json({ message: 'Bad request' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Bad request', error: 'Invalid email' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'Bad request', error: 'Password should be at least 6 characters in length' });
    }
    if (typeof email !== 'string' || typeof password !== 'string') {
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

    // Get the users collection or throw error response if failed
    try {
        const db = client.connection.db;
        const users = db.collection('users');

        // Check if  user already exists
        const user = await users.findOne({ email: email });
        // User exists, check if the password is correct
        if (user) {
            // Check if the password is correct
            const isValid = await verifyPassword(password, user.password);
            if (!isValid) {
                // Close the database connection
                client.connection.close();
                return res.status(401).json({ message: "Incorrect password" });
            }
            // Password is correct, get a jwt token and store the email in the token and _id in the cookie
            const jwt = require('jsonwebtoken');
            const token = jwt.sign({ email: email, _id: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });

            const refreshToken = jwt.sign({ email: email, _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
            //set the cookie in response headers
            res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; Path=/; HttpOnly; Max-Age=${7 * 24 * 60 * 60}; SameSite=None; Secure`);
            // Close the database connection
            client.connection.close();
            return res.status(200).json({ message: "Login successfully", token: token, user: { email, name: user.name } });
        }
        else {
            // if user does not exists, cannot log in
            // Close the database connection
            client.connection.close();
            return res.status(404).json({ message: "User does not exist" });
        }
    }

    catch (error) {
        // Close the database connection
        client.connection.close();
        return res.status(500).json({ message: "Cannot login, please try again later." });
    }
}

export default async function myAPI(req: NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, corsOptions);
    return handler(req, res);
}   