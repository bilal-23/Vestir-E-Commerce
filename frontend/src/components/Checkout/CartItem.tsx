import { useState, useEffect } from "react";
import styles from "./CartItem.module.css";
import products from "../../products";
import { Product } from "@/types/Product";
interface Props {
  id: string;
  quantity: number;
}

const CartItem: React.FC<Props> = ({ id, quantity }) => {
  const [data, setData] = useState<Product | null>(null);
  const formatPrice = (price: number) => {
    return price.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    });
  };

  useEffect(() => {
    const product = products.find((product) => product._id === id);
    if (product) {
      setData(product);
    }
  });

  if (!data) return null;
  return (
    <div className={styles["container"]}>
      <div className={styles["image-container"]}>
        <img
          src={data.images[0]}
          alt={data.title}
          className={styles["image"]}
        />
      </div>
      <div className={styles["content"]}>
        <p className={`text-s text-600 ${styles["title"]}`}>{data.title}</p>
        <p className={`${styles["text"]} ${styles["quantity"]}`}>
          {quantity} x
        </p>
        <p className={`${styles["text"]} ${styles["price"]}`}>
          Rs {data.price}
        </p>
        <div className={styles["mobile-price"]}>
          <p className={`${styles["text"]}`}>{quantity} x</p>
          <p className={`${styles["text"]}`}>Rs {data.price}</p>
        </div>
        <p className={`${styles["text"]} text-500`}>
          Rs {formatPrice(quantity * +data.price)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
