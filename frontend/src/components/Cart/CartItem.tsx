import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import styles from "./CartItem.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../../hooks/useCart";
import { useUserData } from "../../context/UserData";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { useWishlist } from "../../hooks/useWishlist";
import { useState } from "react";

interface Props {
  id: string;
  quantity: number;
  image: string;
  title: string;
  price: number;
  original_price: number;
  size: string;
}

const CartItem: React.FC<Props> = ({
  id,
  quantity,
  image,
  title,
  price,
  original_price,
  size,
}) => {
  const [loading, setLoading] = useState(false);
  const { wishlist } = useUserData();
  const { addItemToWishlist, removeItemFromWishlist } = useWishlist();
  const { decreaseItemQuantity, addItemToCart, removeItemFromCart } = useCart();
  const isWishlisted = wishlist?.some((item) => item === id);

  const handleIncreaseQuantity = async () => {
    if (loading) return;
    // increase quantity
    setLoading(true);
    await addItemToCart(id);
    setLoading(false);
  };

  const handleDecreaseQuanitity = async () => {
    if (loading) return;
    // increase quantity
    setLoading(true);
    await decreaseItemQuantity(id);
    setLoading(false);
  };

  const handleRemoveFromCart = async () => {
    if (loading) return;
    // remove from cart
    setLoading(true);
    await removeItemFromCart(id);
    setLoading(false);
  };

  const handleWishlistButton = async () => {
    if (loading) return;
    // add to wishlist
    setLoading(true);
    if (isWishlisted) {
      await removeItemFromWishlist(id);
    } else {
      await addItemToWishlist(id);
    }
    setLoading(false);
  };

  return (
    <>
      <div className={styles["items-card"]}>
        <div className={styles["image-container"]}>
          <img src={image} alt={title} />
        </div>
        <div className={styles["content"]}>
          {loading && <Loader />}
          <div>
            <p className={`text-s text-400 ${styles["title"]}`}>{title}</p>
            <div className={styles["price-container"]}>
              <p className={`text-s text-300`}>Rs. {price}</p>
              <p className={`text-s text-300 ${styles["original-price"]}`}>
                Rs. {original_price}
              </p>
            </div>
            <p className={`text-s text-300`}>Size: {size}</p>
          </div>
          <div className={styles["quantity"]}>
            <button
              className={styles["quantity-btn"]}
              onClick={handleDecreaseQuanitity}
            >
              <RemoveIcon />
            </button>
            <p className={`text-s text-300`}>{quantity}</p>
            <button
              className={styles["quantity-btn"]}
              onClick={handleIncreaseQuantity}
            >
              <AddIcon />
            </button>
          </div>
          <div className={styles["btn-container"]}>
            <button className={styles["btn"]} onClick={handleRemoveFromCart}>
              Remove From Cart{" "}
              <DeleteForeverIcon className={styles["delete-icon"]} />
            </button>
            <button className={styles["btn"]} onClick={handleWishlistButton}>
              {isWishlisted ? "Remove From Wishlist" : "Add To Wishlist"}
              {isWishlisted ? (
                <HeartBrokenIcon className={styles["delete-icon"]} />
              ) : (
                <FavoriteIcon className={styles["delete-icon"]} />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;

export const Loader = () => {
  return (
    <>
      <div className={`${styles["lds-dual-ring"]}`}></div>
      <div className={styles["overlay"]}></div>
    </>
  );
};
