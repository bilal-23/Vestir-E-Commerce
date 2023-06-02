import styles from "./Buttons.module.css";

interface Props {
  handleAddToCart: () => void;
  handleWishlistButton: () => void;
  isInCart?: boolean;
  isWishlisted?: boolean;
}

const Buttons: React.FC<Props> = ({
  handleAddToCart,
  handleWishlistButton,
  isInCart,
  isWishlisted,
}) => {
  return (
    <div className={styles["container"]}>
      <button
        className={`btn btn-primary ${styles["btn"]}`}
        onClick={() => handleAddToCart()}
      >
        {!isInCart ? "Add to Cart" : "Go to Cart"}
      </button>
      <button
        className={`btn btn-secondary ${styles["btn"]}`}
        onClick={handleWishlistButton}
      >
        {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default Buttons;
