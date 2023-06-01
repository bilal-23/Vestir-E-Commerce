import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import styles from "./CartItem.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../../hooks/useCart";

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
  const { decreaseItemQuantity, addItemToCart, removeItemFromCart } = useCart();

  const handleIncreaseQuantity = () => {
    // increase quantity
    addItemToCart(id);
  };

  const handleDecreaseQuanitity = () => {
    // increase quantity
    decreaseItemQuantity(id);
  };

  const handleRemoveFromCart = () => {
    removeItemFromCart(id);
  };

  return (
    <div className={styles["items-card"]}>
      <div className={styles["image-container"]}>
        <img src={image} alt={title} />
      </div>
      <div className={styles["content"]}>
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
        <button className={styles["remove-btn"]} onClick={handleRemoveFromCart}>
          Remove From Cart{" "}
          <DeleteForeverIcon className={styles["delete-icon"]} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
