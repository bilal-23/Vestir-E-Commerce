import { useUserData } from "../../context/UserData";
import { useWishlist } from "../../hooks/useWishlist";
import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Products.module.css";
import StarIcon from "@mui/icons-material/Star";
interface ProductProps {
  id: string;
  images: string[];
  title: string;
  trending: boolean;
  price: string;
  size: string;
  rating: string;
}

export const Product: React.FC<ProductProps> = ({
  id,
  title,
  images,
  trending,
  price,
  size,
  rating,
}) => {
  const { wishlist } = useUserData();
  const [isHoverSupported, setIsHoverSupported] = useState(true);
  const [productImage, setProductImage] = useState(images[0]);
  const [isLoading, setIsLoading] = useState({ cart: false, wishlist: false });
  const { addItemToWishlist, removeItemFromWishlist } = useWishlist();
  const { addItemToCart } = useCart();
  const isWishlisted = wishlist?.includes(id);
  const { cartItems } = useUserData();
  const isInCart = cartItems?.find((item) => item._id === id);
  const navigate = useNavigate();
  const productRating = Math.trunc(Number(rating));

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
    if (isLoading.wishlist) return;
    setIsLoading((prev) => ({ ...prev, wishlist: true }));
    if (isWishlisted) {
      await removeItemFromWishlist(id);
      setIsLoading((prev) => ({ ...prev, wishlist: false }));
    } else {
      await addItemToWishlist(id);
      setIsLoading((prev) => ({ ...prev, wishlist: false }));
    }
  };

  const handleAddToCart = async () => {
    if (isLoading.cart) return;
    if (!isInCart) {
      setIsLoading((prev) => ({ ...prev, cart: true }));
      await addItemToCart(id);
      setIsLoading((prev) => ({ ...prev, cart: false }));
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
        {isWishlisted ? (
          <FavoriteIcon
            onClick={handleWishlistClick}
            className={styles["wishlist"]}
            sx={{ color: "red" }}
          />
        ) : (
          <FavoriteBorderIcon
            onClick={handleWishlistClick}
            className={styles["wishlist"]}
            sx={{ color: "var(--blue)" }}
          />
        )}
        <p className={`text-xs ${styles["size"]}`}>{size}</p>
        <div className={styles["rating"]}>
          <StarIcon className={styles["star"]} />
          <p className={`text-xs`}>{rating}</p>
        </div>

        {isLoading.wishlist && <Loader />}
        {isLoading.cart && <Loader />}
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

export const Loader = ({ cartLoader }: { cartLoader?: boolean }) => {
  return (
    <>
      <div
        className={`${styles["lds-dual-ring"]} ${
          cartLoader && styles["cart-loader"]
        }`}
      ></div>
      {!cartLoader && <div className={styles["overlay"]}></div>}
    </>
  );
};
