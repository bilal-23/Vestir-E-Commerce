import React from "react";
import styles from "./Product.module.css";
import { Product as ProductType } from "@/types/Product";
import StarIcon from "@mui/icons-material/Star";
import Buttons from "./Buttons";

interface Props {
  data: ProductType;
}
const Product: React.FC<Props> = ({ data }) => {
  const rating = Math.trunc(Number(data.rating));

  return (
    <div className={styles["container"]}>
      <div className={styles["image-container"]}>
        <div className={styles["first-image"]}>
          <img src={data.images[0]} alt={data.title} />
          {data.trending && <p className={styles["trending"]}>Trending</p>}
        </div>
        <img src={data.images[1]} alt={data.title} />
      </div>
      <div className={styles["content"]}>
        <p className={`text-m text-300`}>{data.title}</p>
        <div className={styles["price-container"]}>
          <p className={`text-s`}>Rs. {data.price}</p>
          <p className={`text-s ${styles["original-price"]}`}>
            Rs. {data.original_price}
          </p>
        </div>
        <p className={`text-s`}>Size: {data.size}</p>
        <div className={styles["rating"]}>
          <div className={styles["stars"]}>
            {Array(rating)
              .fill("")
              .map(() => (
                <StarIcon className={styles["star"]} />
              ))}
          </div>
          <p className={`text-s`}>{data.rating}</p>
        </div>
        <div className={styles["description"]}>
          <p className={`text-s`}>{data.description}</p>
        </div>
        <Buttons />
      </div>
    </div>
  );
};

export default Product;
