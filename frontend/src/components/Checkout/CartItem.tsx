import styles from "./CartItem.module.css";

interface Props {
  _id: string;
  quantity: number;
  image: string;
  title: string;
  price: number;
  original_price: number;
  size: string;
}

const CartItem: React.FC<Props> = ({ quantity, image, title, price }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["image-container"]}>
        <img src={image} alt={title} className={styles["image"]} />
      </div>
      <div className={styles["content"]}>
        <p className={`text-s text-600 ${styles["title"]}`}>{title}</p>
        <p className={`${styles["text"]} ${styles["quantity"]}`}>
          {quantity} x
        </p>
        <p className={`${styles["text"]} ${styles["price"]}`}>Rs {price}</p>
        <div className={styles["mobile-price"]}>
          <p className={`${styles["text"]}`}>{quantity} x</p>
          <p className={`${styles["text"]}`}>Rs {price}</p>
        </div>
        <p className={`${styles["text"]} text-500`}>
          Rs {formatPrice(quantity * +price)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
