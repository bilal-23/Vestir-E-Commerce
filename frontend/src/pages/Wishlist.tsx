import styles from "./Cart.module.css";
import Products from "../components/AllProducts/Products";
import { useData } from "../context/DataContext";
import { useUserData } from "../context/UserData";
import { Product } from "../types/Product";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const { products } = useData();
  const { wishlist } = useUserData();
  const [wishlistProducts, setWishlistProducts] = useState<Product[] | null>(
    null
  );

  useEffect(() => {
    if (products && wishlist) {
      const wishlistProducts = products.filter((product) =>
        wishlist.includes(product._id)
      );
      setWishlistProducts(wishlistProducts);
    }
  }, [products, wishlist]);

  return (
    <main className={styles["main"]}>
      <header className={styles["heading"]}>
        <h1 className={`text-l text-300`}>Wishlist - {wishlist?.length}</h1>
      </header>
      <Products products={wishlistProducts} />
    </main>
  );
};

export default Wishlist;
