import connectDB from "@/utils/connectToDb";
import verifyToken from "@/utils/verifyToken";
import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import { runMiddleware } from "@/utils/middleware";

interface CartProduct {
  _id: string;
  quantity: number;
  price: number;
}
interface Cart {
  email: string;
  cart: CartProduct[];
}
const corsOptions: any = Cors({
  origin: "*", // Replace * with the specific origin(s) allowed to access your API
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Specify the HTTP methods allowed
  allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed headers
});

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // check if method is not get
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
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

  let client = null;
  try {
    client = await connectDB();
  } catch (error) {
    return res.status(500).json({ message: "Cannot connect to the database" });
  }

  const db = client.connection.db;
  const cart = db.collection("cart");
  // Get cart from the database
  const cartData = await cart.findOne({ email });
  // Cart not found
  if (!cartData) {
    return res.status(404).json({ message: "Cart not found" });
  }
  const productsCollection = db.collection("products");
  await cart.updateOne({ email }, { $set: { cart: [] } });
  return res.status(200).json({ message: "Cart Cleared" });
}

export default async function myAPI(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, corsOptions);
  return handler(req, res);
}
