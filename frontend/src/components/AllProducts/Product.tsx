import { useUserData } from "../../context/UserData";
import { useWishlist } from "../../hooks/useWishlist";
import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Products.module.css";

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
  const [isHoverSupported, setIsHoverSupported] = useState(true);
  const [productImage, setProductImage] = useState(images[0]);
  const [isLoading, setIsLoading] = useState(false);
  const { addItemToWishlist, removeItemFromWishlist } = useWishlist();
  const { addItemToCart } = useCart();
  const isWishlisted = wishlist?.includes(id);
  const { cartItems } = useUserData();
  const isInCart = cartItems?.find((item) => item._id === id);
  const navigate = useNavigate();

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

  const handleWishlistClick = async () => {
    if (isLoading) return;
    setIsLoading(true);
    if (isWishlisted) {
      await removeItemFromWishlist(id);
      setIsLoading(false);
    } else {
      await addItemToWishlist(id);
      setIsLoading(false);
    }
  };

  const handleAddToCart = async () => {
    addItemToCart(id);
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
          onClick={handleWishlistClick}
          className={styles["wishlist"]}
          sx={{ color: `${isWishlisted ? "red" : "black"}` }}
        />
      </div>

      <div className={styles["content"]}>
        {!isInCart ? (
          <button className={styles["add-to-cart"]} onClick={handleAddToCart}>
            Add to Cart <AddShoppingCartIcon />
          </button>
        ) : (
          <button
            className={styles["add-to-cart"]}
            onClick={() => navigate("/cart")}
          >
            Go to Cart <AddShoppingCartIcon />
          </button>
        )}
        <Link to={`/product/${id}`}>
          <p className={`${styles["title"]} text-500`}>{title}</p>
        </Link>
        <p className={`text-xs text-500 ${styles["price"]}`}>Rs. {price}</p>
      </div>
    </div>
  );
};
