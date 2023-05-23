import styles from "./Cart.module.css";
import Products from "../components/AllProducts/Products";

const Cart = () => {
  return (
    <main className={styles["main"]}>
      <header className={styles["heading"]}>
        <h1 className={`text-l text-300`}>Wishlist</h1>
      </header>
      <Products />
    </main>
  );
};

export default Cart;
