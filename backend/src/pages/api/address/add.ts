import { Address } from '@/types/db';
import connectDB from '@/utils/connectToDb';
import verifyToken from '@/utils/verifyToken';
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';

// POST ADDRESSE
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
    if (!addressData) {
        return res.status(404).json({ message: "Address data not found" });
    }
    // Insert the addressData into the address array in the address document
    await addresses.updateOne({ email }, { $push: { addresses: { _id: uuid(), ...addressData } } });

    // Close the database connection
    client.connection.close();
    // Return the products list
    return res.status(200).json({ message: "Address added" });

}