import { useUserData } from "../../context/UserData";
import CartItem from "./CartItem";
import styles from "./CheckoutDetail.module.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { toast } from "react-toastify";

const CheckoutDetail = () => {
  const { cartItems, cartTotal, selectedAddress } = useUserData();
  const { clearAllCartItems } = useCart();
  const navigate = useNavigate();
  const formatPrice = (price: number) => {
    return price.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    });
  };

  console.log(selectedAddress);

  const placeOrder = async () => {
    if (!selectedAddress) {
      toast.error("Please select an address to place order");
      return;
    }
    navigate("/order-confirmed");
    clearAllCartItems();
  };

  return (
    <section className={styles["container"]}>
      <div className={styles["heading"]}>
        <h1 className={`text-m text-300`}>Items in Cart</h1>
      </div>
      <div>
        <div className={styles["cart-items"]}>
          {cartItems &&
            cartItems.map((item) => (
              <CartItem
                key={item._id}
                _id={item._id}
                quantity={item.quantity}
                image={item.images[0]}
                original_price={item.originalPrice}
                price={item.price}
                size={item.size}
                title={item.title}
              />
            ))}
        </div>
        <div className={styles["cart-total"]}>
          {cartTotal && (
            <p className="text-300 text-s">Rs {formatPrice(cartTotal)}</p>
          )}
        </div>
        <button className={styles["payment-btn"]} onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </section>
  );
};

export default CheckoutDetail;
