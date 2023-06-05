// const ROOT_URL = "https://vestir-backend.vercel.app"
const ROOT_URL = import.meta.env.VITE_API_URL

export const API_URLS = {
    login: `${ROOT_URL}/api/auth/login`,
    signup: `${ROOT_URL}/api/auth/signup`,

    getProducts: `${ROOT_URL}/api/products`,
    getProduct: (productId: string) => `${ROOT_URL}/api/products/${productId}`,

    getCategories: `${ROOT_URL}/api/categories`,

    wishlist: `${ROOT_URL}/api/wishlist`,
    deleteFromWishlist: (productId: string) => `${ROOT_URL}/api/wishlist/delete/${productId}`,

    getCart: `${ROOT_URL}/api/cart`,
    addToCart: `${ROOT_URL}/api/cart/add-to-cart`,
    clearCart: `${ROOT_URL}/api/cart/delete`,
    decreaseQuantity: (productId: string) => `${ROOT_URL}/api/cart/delete/${productId}`,
    removeCartItem: (productId: string) => `${ROOT_URL}/api/cart/delete/${productId}/true`,

    getAddresses: `${ROOT_URL}/api/address`,
    postAddress: `${ROOT_URL}/api/address/add`,
    deleteAddress: (addressId: string) => `${ROOT_URL}/api/address/delete/${addressId}`,
    updateAddress: `${ROOT_URL}/api/address/edit`,

}