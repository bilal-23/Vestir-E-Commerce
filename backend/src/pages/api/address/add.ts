import { Address } from '@/types/db';
import connectDB from '@/utils/connectToDb';
import verifyToken from '@/utils/verifyToken';
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';
import Cors from 'cors';
import { runMiddleware } from '@/utils/middleware';

const corsOptions: any = Cors({
    origin: '*', // Replace * with the specific origin(s) allowed to access your API
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify the HTTP methods allowed
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
});
// Initialize the CORS middleware


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

    if (email === "test@test.com") {
        return res.status(200).json({ message: "Address added", _id: "test" })
    }

    // get address data from request body
    const addressData: Address = req.body.address;

    let client = null;
    try {
        client = await connectDB();
    }
    catch (error) {
        return res.status(500).json({ message: "Cannot connect to the database" });
    }


    const db = client.connection.db;
    const addresses = db.collection('addresses');
    // Get cart from the database
    const address = await addresses.findOne({ email });
    // Cart not found
    if (!address) {
        return res.status(404).json({ message: "Address data not found" });
    }

    // Insert the addressData into the address array in the address document
    const _id = uuid();
    const id = await addresses.updateOne({ email }, { $push: { addresses: { _id: _id, ...addressData } } });

    // Return the products list
    return res.status(200).json({ message: "Address added", _id: _id });

}
export default async function myAPI(req: NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, corsOptions);
    return handler(req, res);
}   