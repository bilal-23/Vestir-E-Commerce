// This will contain Cart, Wishlist, Address and Orders
import { createContext, useContext, useEffect, useState } from "react";
import {
  Address,
  AddressForm,
  ContextProviderProps,
  UserDataContextInterface,
} from "./ContextTypes";
import axios from "axios";
import { API_URLS } from "../apiConfig";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";
import { useLoading } from "./LoadingContext";
import { CartItem, Cart as CartType } from "../types/Cart";
import { useData } from "./DataContext";

const UserDataContext = createContext<UserDataContextInterface>({
  wishlist: [] || null,
  cartItems: [] || null,
  cartTotal: 0,
  cartItemsCount: 0,
  addresses: [] || null,
  selectedAddress: null,

  addToWishlist: () => {},
  removeFromWishlist: () => {},
  clearWishlist: () => {},

  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  decreaseQuantity: () => {},

  addAddress: () => {},
  removeAddress: () => {},
  updateAddress: () => {},
  selectAddress: () => {},

  resetUserDataContext: () => {},
});

export const UserDataProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const { token } = useAuth();
  const { setLoading } = useLoading();
  const { products } = useData();
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cart, setCart] = useState<CartType | null>(null);
  const [addresses, setAddresses] = useState<Address[] | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  useEffect(() => {
    if (addresses && addresses.length > 0) setSelectedAddress(addresses[0]);
    else setSelectedAddress(null);
  }, [addresses]);

  useEffect(() => {
    async function init() {
      try {
        setLoading(true);
        await fetchWishlist();
        await fetchCart();
        await fetchAddresses();
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
  const fetchAddresses = async () => {
    try {
      const res = await axios.get(API_URLS.getAddresses, {
        headers: { authorization: token },
      });
      const addresses = res.data.address.addresses;
      setAddresses(addresses);
      setSelectedAddress(addresses[0]);
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ||
          "Something went wrong while fetching addresses"
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
    if (cart === null) return;
    // Find the product in products
    const product = products?.find((p) => p._id === productId);

    if (product) {
      // Check if product is already in cart
      const itemIndex = cart.items.findIndex((item) => item._id === productId);
      if (itemIndex !== -1) {
        // Increase the quantity of the item
        let items = cart?.items as CartItem[];
        items[itemIndex].quantity += 1;
        // Increase the total and itemsCount
        const total = cart.total + +product.price;
        const itemsCount = cart.itemsCount + 1;
        setCart({ items, total, itemsCount });
      } else {
        const items: CartItem[] = [
          ...cart.items,
          {
            _id: product._id,
            title: product.title,
            price: +product.price,
            quantity: 1,
            originalPrice: +product.original_price,
            images: product.images,
            size: product.size,
          },
        ];
        // Increase the total and itemsCount
        const total = cart.total + +product.price;
        const itemsCount = cart.itemsCount + 1;
        setCart({ items, total, itemsCount });
      }
    }
  };

  const decreaseQuantity = (productId: string) => {
    if (cart === null) return;
    // Find the product in products
    const product = products?.find((p) => p._id === productId);

    if (product) {
      // Check if product is already in cart
      const itemIndex = cart.items.findIndex((item) => item._id === productId);
      if (itemIndex !== -1) {
        // Decrease the quantity of the item
        let items = cart?.items as CartItem[];
        items[itemIndex].quantity -= 1;
        // Decrease the total and itemsCount
        const total = cart.total - +product.price;
        const itemsCount = cart.itemsCount - 1;

        if (items[itemIndex].quantity === 0) {
          items.splice(itemIndex, 1);
        }

        setCart({ items, total, itemsCount });
      }
    }
  };

  const removeFromCart = (productId: string) => {
    if (cart === null) return;
    // Find the product in products
    const product = products?.find((p) => p._id === productId);
    if (product) {
      // Get the index in cart items
      const itemIndex = cart.items.findIndex((item) => item._id === productId);
      if (itemIndex !== -1) {
        // Decrease the total and itemsCount
        const total =
          cart.total - +product.price * cart.items[itemIndex].quantity;
        const itemsCount = cart.itemsCount - cart.items[itemIndex].quantity;
        // Remoev the item from cart
        let items = cart?.items as CartItem[];
        items.splice(itemIndex, 1);
        setCart({ items, total, itemsCount });
      }
    }
  };

  const clearCart = () => {
    setCart({ items: [], total: 0, itemsCount: 0 });
  };

  const resetContext = () => {
    setCart({ items: [] || null, total: 0, itemsCount: 0 } || null);
    setWishlist([]);
  };

  const addAddress = (address: AddressForm, id: string) => {
    setAddresses((prev) => {
      if (prev === null) return [{ ...address, _id: id }];
      return [{ ...address, _id: id }, ...prev];
    });
  };

  const removeAddress = (addressId: string) => {
    setAddresses((prev) => {
      if (prev === null) return null;
      return prev.filter((address) => address._id !== addressId);
    });
  };

  const updateAddress = (addressFormData: Address) => {
    setAddresses((prev) => {
      if (prev === null) return null;
      return prev.map((address) => {
        if (address._id === addressFormData._id) {
          return { ...address, ...addressFormData };
        }
        return address;
      });
    });
  };

  const selectAddress = (addressId: string) => {
    if (addresses === null) return;
    const address = addresses.find((address) => address._id === addressId);
    if (address) {
      setSelectedAddress(address);
    }
  };

  const userDataContext = {
    wishlist,
    cartItems: cart?.items || null,
    cartTotal: cart?.total || 0,
    cartItemsCount: cart?.itemsCount || 0,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    resetUserDataContext: resetContext,
    addresses,
    addAddress,
    removeAddress,
    updateAddress,
    selectedAddress,
    selectAddress,
  };

  return (
    <UserDataContext.Provider value={userDataContext}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
