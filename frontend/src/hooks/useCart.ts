import axios from "axios";
import { toast } from "react-toastify";
import { API_URLS } from "../apiConfig";
import { useUserData } from "../context/UserData";
import { useAuth } from "../context/AuthContext";

export const useCart = () => {
    const { token } = useAuth();
    const { addToCart, decreaseQuantity, removeFromCart } = useUserData();
    const header = { headers: { Authorization: `${token}` } }

    const addItemToCart = async (productId: string) => {
        try {
            const res = await axios.post(API_URLS.addToCart, { productId }, header);

            if (res.status === 200) {
                toast.success(res?.data?.message || "Item added to cart!");
                addToCart(productId);
            }
        }
        catch (err: any) {
            toast.error(err?.response?.data?.message || "Something went wrong!");
        }
    }

    const decreaseItemQuantity = async (productId: string) => {
        try {
            const res = await axios.delete(API_URLS.decreaseQuantity(productId), header);
            if (res.status === 200) {
                toast.success(res?.data?.message || "Item removed from cart!");
                decreaseQuantity(productId)
            }
        }
        catch (err: any) {
            toast.error(err?.response?.data?.message || "Something went wrong!");
        }
    }

    const removeItemFromCart = async (productId: string) => {
        try {
            const res = await axios.delete(API_URLS.removeCartItem(productId), header);
            if (res.status === 200) {
                toast.success(res?.data?.message || "Item removed from cart!");
                removeFromCart(productId);
            }
        }
        catch (err: any) {
            toast.error(err?.response?.data?.message || "Something went wrong!");
        }
    }

    return { addItemToCart, decreaseItemQuantity, removeItemFromCart };
}