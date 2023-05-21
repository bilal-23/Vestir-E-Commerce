import styles from "./CartTotal.module.css";

const CartTotal = () => {
  const formatedPrice = new Intl.NumberFormat("en-US", {}).format(15000);
  return (
    <div className={styles["cart-total-container"]}>
      <div className={styles["subtotal"]}>
        <span className={`text-s`}>Subtotal:</span>
        <span className={`text-s`}>Rs.{formatedPrice}</span>
      </div>
      <div className={styles["checkout-btn-container"]}>
        <button className={`${styles["checkout-btn"]}`}>Checkout</button>
      </div>
    </div>
  );
};

export default CartTotal;
