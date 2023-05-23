import Address from "../Checkout/Address";
import styles from "./Addresses.module.css";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddressForm from "./AddressForm";

const Addresses = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <>
      <main className={styles["container"]}>
        <div className={styles["new-address"]}>
          <button className={styles["btn"]} onClick={() => setOpenForm(true)}>
            <HomeIcon sx={{ fontSize: "2rem" }} /> Add New Address
          </button>
          {openForm && <AddressForm closeForm={() => setOpenForm(false)} />}
        </div>
        <div className={styles["addresses"]}>
          <Address classes={styles["address-card"]}>
            <div className={styles["buttons"]}>
              <button className={styles["btn"]}>Edit</button>
              <button className={styles["btn"]}>Delete</button>
            </div>
          </Address>
          <Address classes={styles["address-card"]}>
            <div className={styles["buttons"]}>
              <button className={styles["btn"]}>Edit</button>
              <button className={styles["btn"]}>Delete</button>
            </div>
          </Address>
        </div>
      </main>
    </>
  );
};

export default Addresses;
