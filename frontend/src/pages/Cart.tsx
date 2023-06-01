import styles from "./Cart.module.css";
import CartIcon from "../assets/cart.svg";
import CartComponent from "../components/Cart/Cart";
import { useUserData } from "../context/UserData";
import { getRandomMessage } from "../helpers/getRandomMessage";

const cartEmptyResponse = [
  "Whoopsie-daisy! It seems your cart is feeling rather weightless, like a feather floating in the wind",
  "Uh-oh! Your cart is as empty as a magician's hat after a disappearing act.",
  "Attention, cart explorers! Your cart is currently experiencing an 'empty space syndrome.'",
  "Houston, we have a cart problem! It seems your cart has drifted into the abyss of emptiness.",
  "Oh dear! Your cart is feeling a bit lonely, like a deserted island in the vast ocean of possibilities.",
  "Warning! Cart alert! Your cart is in a state of extreme emptiness, like a desert without a single oasis.",
  "Attention shoppers! Your cart is currently on a diet, but we believe in second chances.",
  "Hold on tight! Your cart is as empty as a racetrack with no cars.",
  "Calling all cart enthusiasts! We have a 'cart-astrophe' on our hands. Your cart is feeling a bit down and blue.",
  "Attention, shoppers! Your cart is currently experiencing a case of emptiness, like a symphony without instruments.",
];

const Cart = () => {
  const { cartItemsCount } = useUserData();
  return (
    <main className={styles["main"]}>
      <header className={styles["heading"]}>
        <h1 className={`text-l text-300`}>Cart</h1>
        <div className={styles["cart-icon-container"]}>
          <span className={`text-xs text-400 ${styles["cart-quantity"]}`}>
            {cartItemsCount || 0}
          </span>
          <img src={CartIcon} alt="cart" className={styles["cart-icon"]} />
        </div>
      </header>
      {cartItemsCount !== 0 ? (
        <CartComponent />
      ) : (
        <p className={`${styles["empty"]} text-s text-300`}>
          {getRandomMessage(cartEmptyResponse)}
        </p>
      )}
    </main>
  );
};

export default Cart;
