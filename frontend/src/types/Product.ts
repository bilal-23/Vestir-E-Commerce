export interface Product {
    _id: string;
    images: string[];
    category: "Men" | "Women" | "Accessories";
    rating: string;
    size: "XS" | "S" | "M" | "L" | "XL";
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