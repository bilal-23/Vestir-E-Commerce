import { CartItem } from "../types/Cart";
import { Category } from "../types/Category";
import { Product } from "../types/Product";

export interface ContextProviderProps {
    children: React.ReactNode;
}

export interface AuthContextInterface {
    user: {
        name: string;
        email: string;
    } | null;
    token: string | null;
    login: (token: string,
        user: { name: string; email: string }) => void;
    logout: () => void;
}

export interface AuthState {
    user: {
        name: string;
        email: string;
    } | null;
    token: string | null;
}

// LoadingContext
export interface LoadingContextInterface {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

// DataContext

export interface DataContextInterface {
    products: Product[] | null;
    categories: Category[] | null;
}


// UserDataContext
export interface UserDataContextInterface {
    wishlist: string[] | null;
    cartItems: CartItem[] | null
    cartTotal: number | null;
    cartItemsCount: number | null;
    addresses: Address[] | null;

    addToWishlist: (productId: string) => void;
    removeFromWishlist: (productId: string) => void;
    clearWishlist: () => void;

    addToCart: (productId: string) => void;
    removeFromCart: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    clearCart: () => void;

    addAddress: (address: AddressForm, _id: string) => void;
    removeAddress: (addressId: string) => void;
    updateAddress: (address: Address) => void;

    resetUserDataContext: () => void;
}

// Address
export interface Address {
    _id: string;
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    country: string,
    state: string,
    zip: string,
    phone: string,
}
export interface AddressForm {
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    country: string,
    state: string,
    zip: string,
    phone: string,
}