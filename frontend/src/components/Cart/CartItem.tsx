import { Product } from "@/types/Product";
import products from "../../products";
import { useState, useEffect } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import styles from "./CartItem.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface Props {
  id: string;
  quantity: number;
}

const CartItem: React.FC<Props> = ({ id, quantity }) => {
  const [data, setData] = useState<Product | null>(null);
  const [quantityState, setQuantityState] = useState<number>(quantity);

  useEffect(() => {
    const product = products.find((product) => product._id === id);
    if (product) {
      setData(product);
    }
  });

  if (!data) return null;

  return (
    <div className={styles["items-card"]}>
      <div className={styles["image-container"]}>
        <img src={data.images[0]} alt={data.title} />
      </div>
      <div className={styles["content"]}>
        <div>
          <p className={`text-s text-400 ${styles["title"]}`}>{data.title}</p>
          <div className={styles["price-container"]}>
            <p className={`text-s text-300`}>Rs. {data.price}</p>
            <p className={`text-s text-300 ${styles["original-price"]}`}>
              Rs. {data.original_price}
            </p>
          </div>
          <p className={`text-s text-300`}>Size: {data.size}</p>
        </div>
        <div className={styles["quantity"]}>
          <button
            className={styles["quantity-btn"]}
            onClick={() => setQuantityState((prev) => prev - 1)}
          >
            <RemoveIcon />
          </button>
          <p className={`text-s text-300`}>{quantityState}</p>
          <button
            className={styles["quantity-btn"]}
            onClick={() => setQuantityState((prev) => prev + 1)}
          >
            <AddIcon />
          </button>
        </div>
        <button className={styles["remove-btn"]}>
          Remove From Cart{" "}
          <DeleteForeverIcon className={styles["delete-icon"]} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
