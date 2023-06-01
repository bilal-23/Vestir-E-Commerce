import styles from "./Products.module.css";
import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { Product as ProductType } from "../../types/Product";
import { useUserData } from "../../context/UserData";

interface Props {
  products: ProductType[] | null;
}

const Products: React.FC<Props> = ({ products }) => {
  return (
    <div className={styles["container"]}>
      {products &&
        products.map((product) => {
          return (
            <Product
              id={product._id}
              key={product._id}
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
  id: string;
  images: string[];
  title: string;
  trending: boolean;
  price: string;
}

export const Product: React.FC<ProductProps> = ({
  id,
  title,
  images,
  trending,
  price,
}) => {
  const { wishlist } = useUserData();
  const [isWishlisted] = useState(() => wishlist?.includes(id));
  const [isHoverSupported, setIsHoverSupported] = useState(true);
  const [productImage, setProductImage] = useState(images[0]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none)");
    setIsHoverSupported(!mediaQuery.matches);

    const handleMediaChange = (event: any) => {
      setIsHoverSupported(!event.matches);
    };

    mediaQuery.addListener(handleMediaChange);

    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []);

  const handleMouseEnter = () => {
    if (isHoverSupported) {
      setProductImage(images[1]);
    }
  };

  const handleMouseLeave = () => {
    if (isHoverSupported) {
      setProductImage(images[0]);
    }
  };

  return (
    <div className={styles["product-card"]}>
      <div
        className={styles["product-image"]}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <Link to={`/product/${id}`}>
          <img
            src={productImage}
            alt="product"
            className={styles["card-img"]}
          />
        </Link>
        {trending && <p className={styles["trending"]}>Trending</p>}
        <FavoriteBorderIcon
          className={styles["wishlist"]}
          sx={{ color: `${isWishlisted ? "red" : "black"}` }}
        />
      </div>

      <div className={styles["content"]}>
        <button className={styles["add-to-cart"]}>
          Add to Cart <AddShoppingCartIcon />
        </button>
        <Link to={`/product/${id}`}>
          <p className={`${styles["title"]} text-500`}>{title}</p>
        </Link>
        <p className={`text-xs text-500 ${styles["price"]}`}>Rs. {price}</p>
      </div>
    </div>
  );
};
