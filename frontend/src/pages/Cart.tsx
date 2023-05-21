import styles from "./Cart.module.css";
import CartIcon from "../assets/cart.svg";
import CartComponent from "../components/Cart/Cart";

const Cart = () => {
  return (
    <main className={styles["main"]}>
      <header className={styles["heading"]}>
        <h1 className={`text-l text-300`}>Cart</h1>
        <div className={styles["cart-icon-container"]}>
          <span className={`text-xs text-400 ${styles["cart-quantity"]}`}>
            3
          </span>
          <img src={CartIcon} alt="cart" className={styles["cart-icon"]} />
        </div>
      </header>
      <CartComponent />
    </main>
  );
};

export default Cart;