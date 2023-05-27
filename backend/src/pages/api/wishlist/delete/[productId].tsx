import connectDB from "@/utils/connectToDb";
import verifyToken from "@/utils/verifyToken";
import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

// this endpoint have  method DELETE
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // check if method is not get post or delete
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const productId = req.query.productId as string;
  // check if product id is not provided
  if (!productId) {
    return res.status(400).json({ message: "Product id is required" });
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
  const wishlist = db.collection("wishlist");

  // check if product id is valid
  if (!ObjectId.isValid(productId)) {
    return res.status(400).json({ message: "Invalid product id" });
  }

  // get wishlist document
  const wishlistData = await wishlist.findOne({ email });
  if (!wishlistData) {
    return res.status(404).json({ message: "Wishlist does not exist" });
  } else {
    // Remove the product from the wishlist
    const wishlistArray: string[] = wishlistData.wishlist;
    // check if product is not in the wishlist
    if (!wishlistArray.includes(productId)) {
      return res.status(404).json({ message: "Product not in the wishlist" });
    }

    const updatedWishlist = wishlistArray.filter((item) => item !== productId);
    await wishlist.replaceOne({ email }, { email, wishlist: updatedWishlist });
    // Close the database connection
    client.connection.close();
    // Return the products list
    return res
      .status(200)
      .json({ message: "Product removed from the wishlist" });
  }
}
