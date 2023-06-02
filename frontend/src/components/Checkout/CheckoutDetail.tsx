import { useUserData } from "../../context/UserData";
import CartItem from "./CartItem";
import styles from "./CheckoutDetail.module.css";

const CheckoutDetail = () => {
  const { cartItems, cartTotal } = useUserData();
  const formatPrice = (price: number) => {
    return price.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    });
  };

  return (
    <section className={styles["container"]}>
      <div className={styles["heading"]}>
        <h1 className={`text-m text-300`}>Items in Cart</h1>
      </div>
      <div>
        <div className={styles["cart-items"]}>
          {cartItems &&
            cartItems.map((item) => (
              <CartItem
                key={item._id}
                _id={item._id}
                quantity={item.quantity}
                image={item.images[0]}
                original_price={item.originalPrice}
                price={item.price}
                size={item.size}
                title={item.title}
              />
            ))}
        </div>
        <div className={styles["cart-total"]}>
          {cartTotal && (
            <p className="text-300 text-s">Rs {formatPrice(cartTotal)}</p>
          )}
        </div>
        <button className={styles["payment-btn"]}>Proceed to payment</button>
      </div>
    </section>
  );
};

export default CheckoutDetail;
