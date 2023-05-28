import { Address } from '@/types/db';
import connectDB from '@/utils/connectToDb';
import verifyToken from '@/utils/verifyToken';
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';

// POST ADDRESSE
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // check if method is not get 
    if (req.method !== 'DELETE') {
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

    const addressId = req.query.addressId as string;
    if (!addressId) {
        return res.status(400).json({ message: "Address id is required" });
    }

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
        return res.status(404).json({ message: "Address data not found" });
    }
    const addressIndex = address?.addresses.findIndex((address: any) => address._id === addressId);
    if (addressIndex === -1) {
        return res.status(404).json({ message: "Address data not found" });
    }
    // Find the address with the given id and remove it from the array
    await addresses.updateOne({ email }, { $pull: { addresses: { _id: addressId } } });

    // Close the database connection
    client.connection.close();
    // Return the products list
    return res.status(200).json({ message: "Address deleted" });

}