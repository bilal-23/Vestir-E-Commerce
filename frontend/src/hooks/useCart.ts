import axios from "axios";
import { toast } from "react-toastify";
import { API_URLS } from "../apiConfig";
import { useUserData } from "../context/UserData";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../context/LoadingContext";

export const useCart = () => {
    const { token } = useAuth();
    const { addToCart, decreaseQuantity, removeFromCart, clearCart } = useUserData();
    const header = { headers: { Authorization: `${token}` } }
    const navigate = useNavigate();
    const { setLoading } = useLoading();

    const addItemToCart = async (productId: string) => {
        if (!token) {
            return toast.error("Please login to add product to cart!");
        }
        try {
            const res = await axios.post(API_URLS.addToCart, { productId }, header);

            if (res.status === 200) {
                toast.success(res?.data?.message || "Product added to cart!");
                addToCart(productId);

            }
        }
        catch (err: any) {
            toast.error(err?.response?.data?.message || "Something went wrong!");
        }
    }

    const decreaseItemQuantity = async (productId: string) => {
        if (!token) {
            return toast.error("Please login to remove product from cart!");
        }
        try {
            const res = await axios.delete(API_URLS.decreaseQuantity(productId), header);
            if (res.status === 200) {
                toast.success(res?.data?.message || "Product removed from cart!");
                decreaseQuantity(productId)
            }
        }
        catch (err: any) {
            toast.error(err?.response?.data?.message || "Something went wrong!");
        }
    }

    const removeItemFromCart = async (productId: string) => {
        if (!token) {
            return toast.error("Please login to remove product from cart!");
        }
        try {
            const res = await axios.delete(API_URLS.removeCartItem(productId), header);
            if (res.status === 200) {
                toast.success(res?.data?.message || "Product removed from cart!");
                removeFromCart(productId);
            }
        }
        catch (err: any) {
            toast.error(err?.response?.data?.message || "Something went wrong!");
        }
    }

    const clearAllCartItems = async () => {
        if (!token) {
            return toast.error("Please login to clear cart!");
        }
        try {
            setLoading(true);
            const res = await axios.delete(API_URLS.clearCart, header);
            if (res.status === 200) {
                // toast.success(res?.data?.message || "Cart cleared!");
                clearCart();
                navigate("/order-confirmed");
            }
        }
        catch (err: any) {
            console.log(err.response.data);
            toast.error(err?.response?.data?.message || "Something went wrong!");
        }

        finally {
            setLoading(false);
        }

    }

    return { addItemToCart, decreaseItemQuantity, removeItemFromCart, clearAllCartItems };
}