import { useState } from "react";
import styles from "./Buttons.module.css";

const Buttons = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  return (
    <div className={styles["container"]}>
      <button
        className={`btn btn-primary ${styles["btn"]}`}
        onClick={() => setIsAddedToCart(!isAddedToCart)}
      >
        {!isAddedToCart ? "Add to Cart" : "Go to Cart"}
      </button>
      <button
        className={`btn btn-secondary ${styles["btn"]}`}
        onClick={() => setIsAddedToWishlist(!isAddedToWishlist)}
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default Buttons;
