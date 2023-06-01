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
            <CartItem key={item._id} id={item._id} quantity={item.quantity} />
          ))}
      </div>
      <CartTotal />
    </section>
  );
};

export default Cart;
