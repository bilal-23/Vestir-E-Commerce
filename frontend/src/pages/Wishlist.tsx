import styles from "./Wishlist.module.css";
import Products from "../components/AllProducts/Products";
import { useData } from "../context/DataContext";
import { useUserData } from "../context/UserData";
import { Product } from "../types/Product";
import { useEffect, useState } from "react";
import { getRandomMessage } from "../helpers/getRandomMessage";

const emptyWishlistMessages = [
  "Oh no! Your wishlist is currently as empty as a blank canvas.",
  "Attention, wishlist wanderer! Your wishlist seems to be on a temporary vacation.",
  "Whoops! Your wishlist is feeling a bit shy and empty, like a bookshelf without any books.",
  "Uh-oh! It seems your wishlist is as quiet as a library after closing time.",
  "Attention, dream collector! Your wishlist is currently as bare as a moonless night sky. ",
  "Oops! Your wishlist is looking a bit lonely, like a puzzle missing a vital piece.",
  "Oh dear! Your wishlist is currently floating in a sea of emptiness, like a ship without a destination.",
  "Warning! Wishlist alert! Your wishlist is yearning for attention, like a stage waiting for a grand performance. ",
  "Attention, wishlist explorer! Your wishlist is currently on standby, awaiting new discoveries.",
  "Oh my! Your wishlist seems to be napping, dreaming of the incredible items it could hold.",
];

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
          {getRandomMessage(emptyWishlistMessages)}
        </p>
      )}
    </main>
  );
};

export default Wishlist;
