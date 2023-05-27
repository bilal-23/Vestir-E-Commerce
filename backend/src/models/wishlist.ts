import mongoose from 'mongoose';

const wishlistScheme = new mongoose.Schema<{ email: string, wishlist: string[] }>({
    email: String,
    wishlist: Array,
});

export default mongoose.models.wishlist || mongoose.model('wishlist', wishlistScheme);