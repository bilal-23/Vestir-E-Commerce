// This will contain Cart, Wishlist, Address and Orders
import { createContext, useContext, useEffect, useState } from "react";
import { ContextProviderProps, UserDataContextInterface } from "./ContextTypes";
import axios from "axios";
import { API_URLS } from "../apiConfig";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";
import { useLoading } from "./LoadingContext";

const UserDataContext = createContext<UserDataContextInterface>({
  wishlist: [] || null,
  cartItems: [] || null,
  cartTotal: 0,
  cartItemsCount: 0,

  addToWishlist: () => {},
  removeFromWishlist: () => {},
  clearWishlist: () => {},

  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},

  resetUserDataContext: () => {},
});

export const UserDataProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const { token } = useAuth();
  const { setLoading } = useLoading();
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cart, setCart] = useState(
    { items: [] || null, total: 0, itemsCount: 0 } || null
  );

  useEffect(() => {
    async function init() {
      try {
        setLoading(true);
        await fetchWishlist();
        await fetchCart();
      } catch (e) {
        window.location.reload();
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    if (token) {
      init();
    }
  }, [token]);
  const fetchWishlist = async () => {
    try {
      const res = await axios.get(API_URLS.wishlist, {
        headers: { authorization: token },
      });
      const wishlist = res.data.wishlist.wishlist;
      setWishlist(wishlist);
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ||
          "Something went wrong while fetching wishlist"
      );
    }
  };

  const fetchCart = async () => {
    try {
      const res = await axios.get(API_URLS.getCart, {
        headers: { authorization: token },
      });
      const items = res.data.cart.cart;
      const itemsCount = items.reduce(
        (acc: number, item: CartItem) => acc + item.quantity,
        0
      );
      const total = items.reduce((acc: number, item: CartItem) => {
        return acc + +item.price * item.quantity;
      }, 0);
      setCart({ items, itemsCount, total });
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ||
          "Something went wrong while fetching cart"
      );
    }
  };

  const addToWishlist = (productId: string) => {
    setWishlist((prev) => [...prev, productId]);
  };
  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  };
  const clearWishlist = () => {};

  const addToCart = (productId: string) => {
    console.log(productId);
  };
  const removeFromCart = (productId: string) => {
    console.log(productId);
  };
  const clearCart = () => {};

  const resetContext = () => {
    setCart({ items: [] || null, total: 0, itemsCount: 0 } || null);
    setWishlist([]);
  };

  const userDataContext = {
    wishlist,
    cartItems: cart?.items,
    cartTotal: cart?.total,
    cartItemsCount: cart?.itemsCount,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    addToCart,
    removeFromCart,
    clearCart,
    resetUserDataContext: resetContext,
  };

  return (
    <UserDataContext.Provider value={userDataContext}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
