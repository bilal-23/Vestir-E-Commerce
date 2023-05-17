import styles from "./Products.module.css";
import { useState } from "react";
import ProductsArray from "../../products";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const images = [
  `https://ik.imagekit.io/averno2301/Vestir/Products/Men/Channel_Stripe_Long_Sleeve_T-Shirt-1_BDneAhgBq.webp?updatedAt=1684350416505`,
  `https://ik.imagekit.io/averno2301/Vestir/Products/Men/Channel_Stripe_Long_Sleeve_T-Shirt-2_CXizFrryt.webp?updatedAt=1684350416449`,
];

const Products = () => {
  return (
    <div className={styles["container"]}>
      {ProductsArray.map((product) => {
        return (
          <Product
            images={product.images}
            title={product.title}
            trending={product.trending}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default Products;

interface ProductProps {
  images: string[];
  title: string;
  trending: boolean;
  price: string;
}
export const Product: React.FC<ProductProps> = ({
  title,
  images,
  trending,
  price,
}) => {
  const [productImage, setProductImage] = useState(images[0]);
  return (
    <div className={styles["product-card"]}>
      <div
        className={styles["product-image"]}
        onMouseEnter={() => setProductImage(images[1])}
        onMouseLeave={() => setProductImage(images[0])}
      >
        <img src={productImage} alt="product" className={styles["card-img"]} />
        {trending && <p className={styles["trending"]}>Trending</p>}
        <FavoriteBorderIcon className={styles["wishlist"]} />
      </div>
      <div className={styles["content"]}>
        <button className={styles["add-to-cart"]}>
          Add to Cart <AddShoppingCartIcon />
        </button>
        <p className={`${styles["title"]} text-500`}>{title}</p>
        <p className={`text-xs text-500 ${styles["price"]}`}>Rs. {price}</p>
      </div>
    </div>
  );
};
