import { Link } from "react-router-dom";
import styles from "./CartTotal.module.css";
import { useUserData } from "../../context/UserData";

const CartTotal = () => {
  const { cartTotal } = useUserData();
  const formatedPrice = new Intl.NumberFormat("en-US", {}).format(
    cartTotal || 0
  );
  return (
    <div className={styles["cart-total-container"]}>
      <div className={styles["subtotal"]}>
        <span className={`text-s`}>Subtotal:</span>
        <span className={`text-s`}>Rs.{formatedPrice}</span>
      </div>
      <div className={styles["checkout-btn-container"]}>
        <Link to="/checkout">
          <button className={`${styles["checkout-btn"]}`}>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default CartTotal;
