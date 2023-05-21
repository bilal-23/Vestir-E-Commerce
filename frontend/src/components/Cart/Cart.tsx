import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

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

const Cart = () => {
  return (
    <section className={styles["container"]}>
      <div className={styles["cart-items"]}>
        {cartItems.map((item) => (
          <CartItem key={item.id} id={item.id} quantity={item.quantity} />
        ))}
      </div>
      <CartTotal />
    </section>
  );
};

export default Cart;
