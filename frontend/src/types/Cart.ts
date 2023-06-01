export interface CartItem {
    _id: string,
    quantity: number,
    price: number,
    images: string[],
    title: string,
    size: string,
    originalPrice: number,
}

export interface Cart {
    items: CartItem[],
    total: number,
    itemsCount: number,
}