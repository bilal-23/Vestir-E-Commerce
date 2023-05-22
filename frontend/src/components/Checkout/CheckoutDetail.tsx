import CartItem from "./CartItem";
import styles from "./CheckoutDetail.module.css";

const cartItems = [
  {
    id: "be51624b-c4a5-44f2-9c16-69b284e5fd5c",
    quantity: 1,
  },
  {
    id: "f5a3040d-5247-4b95-8a5d-9487dbd77392",
    quantity: 2,
  },
  {
    id: "c1d8eb29-8b89-4f9e-bd45-1f81bc0244e6",
    quantity: 3,
  },
];

const CheckoutDetail = () => {
  return (
    <section className={styles["container"]}>
      <div className={styles["heading"]}>
        <h1 className={`text-m text-300`}>Items in Cart</h1>
      </div>
      <div>
        <div className={styles["cart-items"]}>
          {cartItems.map((item) => (
            <CartItem id={item.id} key={item.id} quantity={item.quantity} />
          ))}
        </div>
        <button className={styles["payment-btn"]}>Proceed to payment</button>
      </div>
    </section>
  );
};

export default CheckoutDetail;
