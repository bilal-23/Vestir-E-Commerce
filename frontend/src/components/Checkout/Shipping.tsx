import Address from "./Address";
import styles from "./Shipping.module.css";
import HomeIcon from "@mui/icons-material/Home";

const Shipping = () => {
  return (
    <section className={styles["shipping-container"]}>
      <div className={styles["heading"]}>
        <h1 className={`text-l text-300`}>Shipping Address</h1>
      </div>
      <div className={styles["address-container"]}>
        <Address selected />
        <Address />
        <Address />
      </div>
      <div className={styles["new-address"]}>
        <button className={styles["btn"]}>
          <HomeIcon sx={{ fontSize: "2rem" }} /> Add New Address
        </button>
      </div>
    </section>
  );
};

export default Shipping;
