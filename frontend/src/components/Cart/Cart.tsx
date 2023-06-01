import { useUserData } from "../../context/UserData";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const Cart = () => {
  const { cartItems } = useUserData();
  return (
    <section className={styles["container"]}>
      <div className={styles["cart-items"]}>
        {cartItems &&
          cartItems.map((item) => (
            <CartItem
              key={item._id}
              id={item._id}
              quantity={item.quantity}
              image={item.images[0]}
              original_price={item.originalPrice}
              price={item.price}
              size={item.size}
              title={item.title}
            />
          ))}
      </div>
      <CartTotal />
    </section>
  );
};

export default Cart;
