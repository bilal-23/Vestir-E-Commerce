import styles from "./Wishlist.module.css";
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
      {wishlistProducts?.length !== 0 ? (
        <Products products={wishlistProducts} />
      ) : (
        <p className={`${styles["empty"]} text-s text-300`}>
          Wishlist is Empty
        </p>
      )}
    </main>
  );
};

export default Wishlist;
