export interface User {
    _id: string;
    email: string;
    password: string;
}
export interface Product {
    _id: string;
    images: string[];
    category: string;
    rating: string;
    size: string;
    description: string;
    title: string;
    type: string;
    trending: boolean;
    original_price: string;
    price: string;
    delivery_time: string;
    reviews: string;
    in_stock: boolean;
}
interface CartProduct {
    _id: string;
    quantity: number;
    price: number;
}
interface Cart {
    _id: string;
    email: string;
    cart: CartProduct[];
}
interface Wishlist {
    _id: string;
    email: string;
    wishlist: string[];
}
interface Category {
    _id: string;
    name: string;
    image: string;
    tag: string;
}
interface Categories {
    categories: Category[];
}
export interface Address {
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    country: string,
    state: string,
    zip: string,
    phone: string,
}