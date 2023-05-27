import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check if it is a GET request
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    if (!req.cookies.refreshToken) {
        console.log(req.cookies)
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const jwt = require('jsonwebtoken');
        const decoded = jwt.verify(req.cookies.refreshToken, process.env.JWT_SECRET);
        // check expiry time
        console.log(decoded);
        const token = jwt.sign({ email: decoded.email, _id: decoded._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ token: token });
    }
    catch (error) {
        return res.status(500).json({ message: "Cannot generate token, please try again later." });
    }
}