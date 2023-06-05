import { toast } from "react-toastify";
import { useUserData } from "../context/UserData"
import { useAuth } from "../context/AuthContext";
import { API_URLS } from "../apiConfig";
import axios from "axios";

export const useWishlist = () => {
    const { addToWishlist, removeFromWishlist } = useUserData();
    const { token } = useAuth();

    const addItemToWishlist = async (productId: string) => {
        if (!token) {
            toast.error("Please login to add product to wishlist", { toastId: "errorAddWishlist" });
            return;
        }
        // Make Api call to add item to wishlist
        try {
            const res = await axios.post(API_URLS.wishlist, { productId }, {
                headers: {
                    Authorization: `${token}`
                }
            });
            if (res.status === 200) {
                toast.success("Product added to wishlist");
                addToWishlist(productId);
            }
        }
        catch (err: any) {
            toast.error(err?.response?.data?.message, { toastId: "errorAddWishlist" });
        }
    }

    const removeItemFromWishlist = async (productId: string) => {
        if (!token) {
            toast.error("Please login to add product to wishlist", { toastId: "errorAddWishlist" });
            return;
        }
        // Make Api call to remove item from wishlist
        try {
            const res = await axios.delete(API_URLS.deleteFromWishlist(productId), {
                headers: {
                    Authorization: `${token}`
                }
            });
            if (res.status === 200) {
                toast.success("Product removed from wishlist");
                removeFromWishlist(productId);
            }
        }
        catch (err: any) {
            toast.error(err?.response?.data?.message, { toastId: "errorAddWishlist" });
        }
    }


    return { addItemToWishlist, removeItemFromWishlist }
}