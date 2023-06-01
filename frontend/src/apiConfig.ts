// const ROOT_URL = "https://vestir-backend.vercel.app"
const ROOT_URL = import.meta.env.VITE_API_URL

export const API_URLS = {
    login: `${ROOT_URL}/api/auth/login`,
    signup: `${ROOT_URL}/api/auth/signup`,

    getProducts: `${ROOT_URL}/api/products`,

    getCategories: `${ROOT_URL}/api/categories`,

    wishlist: `${ROOT_URL}/api/wishlist`,
    deleteFromWishlist: (productId: string) => `${ROOT_URL}/api/wishlist/delete/${productId}`,

    getCart: `${ROOT_URL}/api/cart`,
    addToCart: `${ROOT_URL}/api/cart/add-to-cart`,
    decreaseQuantity: (productId: string) => `${ROOT_URL}/api/cart/delete/${productId}`,
    removeCartItem: (productId: string) => `${ROOT_URL}/api/cart/delete/${productId}/true`,

}