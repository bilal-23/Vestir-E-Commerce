import CheckoutDetail from "../components/Checkout/CheckoutDetail";
import styles from "./Checkout.module.css";
import Shipping from "../components/Checkout/Shipping";

const Checkout = () => {
  return (
    <main className={styles["main"]}>
      <Shipping />
      <CheckoutDetail />
    </main>
  );
};

export default Checkout;
