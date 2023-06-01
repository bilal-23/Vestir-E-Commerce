import { useUserData } from "../context/UserData";

export const useCart = () => {
    const { addToCart, decreaseQuantity, removeFromCart } = useUserData();

    const addItemToCart = (productId: string) => {
        addToCart(productId);
    }

    const decreaseItemQuantity = (productId: string) => {
        decreaseQuantity(productId)
    }

    const removeItemFromCart = (productId: string) => {
        removeFromCart(productId);
    }

    return { addItemToCart, decreaseItemQuantity, removeItemFromCart };
}