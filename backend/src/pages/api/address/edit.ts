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
    if (req.method !== 'PUT') {
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

    interface AddressUpdated extends Address {
        _id: string;
    }
    // get address data from request body
    const addressData: AddressUpdated = req.body.address;

    let client = null;
    try {
        client = await connectDB();
    }
    catch (error) {
        return res.status(500).json({ message: "Cannot connect to the database" });
    }


    const db = client.connection.db;
    const addresses = db.collection('addresses');
    // Get Address from the database
    const address = await addresses.findOne({ email });
    // Address not found
    if (!address) {
        return res.status(404).json({ message: "Address Data not found" });
    }
    const addressIndex = address?.addresses.findIndex((address: any) => address._id === addressData._id);
    if (addressIndex === -1) {
        return res.status(404).json({ message: "Address does not exist" });
    }
    // Find the address with the given id and update it
    await addresses.updateOne({ email }, { $set: { [`addresses.${addressIndex}`]: addressData } });

    // Return the products list
    return res.status(200).json({ message: "Address updated" });

}
export default async function myAPI(req: NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, corsOptions);
    return handler(req, res);
}   