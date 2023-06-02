import React from "react";
import styles from "./Product.module.css";
import { Product as ProductType } from "@/types/Product";
import StarIcon from "@mui/icons-material/Star";
import Buttons from "./Buttons";
import { useLoading } from "../../context/LoadingContext";
import { useUserData } from "../../context/UserData";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";

interface Props {
  data: ProductType;
}
const Product: React.FC<Props> = ({ data }) => {
  const { setLoading } = useLoading();
  const { wishlist, cartItems } = useUserData();
  const { addItemToCart } = useCart();
  const { addItemToWishlist, removeItemFromWishlist } = useWishlist();
  const navigate = useNavigate();

  const isInCart = cartItems?.some((item) => item._id === data._id);
  const isWishlisted = wishlist?.some((item) => item === data._id);
  const rating = Math.trunc(Number(data.rating));

  const handleAddToCart = async () => {
    if (isInCart) {
      navigate("/cart");
      return;
    } else {
      setLoading(true);
      await addItemToCart(data._id);
      setLoading(false);
    }
  };
  const handleWishlistButton = async () => {
    setLoading(true);
    if (isWishlisted) {
      await removeItemFromWishlist(data._id);
    } else {
      await addItemToWishlist(data._id);
    }
    setLoading(false);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["image-container"]}>
        <div className={styles["first-image"]}>
          <img src={data.images[0]} alt={data.title} />
          {data.trending && <p className={styles["trending"]}>Trending</p>}
        </div>
        <img
          src={data.images[1]}
          alt={data.title}
          className={styles["secondary-image"]}
        />
      </div>
      <div className={styles["content"]}>
        <p className={`text-m text-300 ${styles["title"]}`}>{data.title}</p>
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
              .map((_, index) => (
                <StarIcon key={index} className={styles["star"]} />
              ))}
          </div>
          <p className={`text-s`}>{data.rating}</p>
        </div>
        <div className={styles["description"]}>
          <p className={`text-s`}>{data.description}</p>
        </div>
        <Buttons
          handleAddToCart={handleAddToCart}
          handleWishlistButton={handleWishlistButton}
          isInCart={isInCart}
          isWishlisted={isWishlisted}
        />
      </div>
    </div>
  );
};

export default Product;
