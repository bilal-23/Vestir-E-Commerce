import { useUserData } from "../../context/UserData";
import AddressForm from "../Addresses/AddressForm";
import Address from "./Address";
import styles from "./Shipping.module.css";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";

const Shipping = () => {
  const { addresses } = useUserData();
  const [openForm, setOpenForm] = useState(false);
  return (
    <>
      {openForm && <AddressForm closeForm={() => setOpenForm(false)} />}
      <section className={styles["shipping-container"]}>
        <div className={styles["heading"]}>
          <h1 className={`text-l text-300`}>Shipping Address</h1>
        </div>
        <div className={styles["address-container"]}>
          {addresses?.length !== 0 ? (
            addresses?.map((address) => {
              return (
                <Address
                  key={address._id}
                  _id={address._id}
                  firstName={address.firstName}
                  lastName={address.lastName}
                  phone={address.phone}
                  city={address.city}
                  zip={address.zip}
                  address={address.address}
                  country={address.country}
                  state={address.state}
                />
              );
            })
          ) : (
            <p className={styles["empty"]}>No Address Added</p>
          )}
        </div>
        <div className={styles["new-address"]}>
          <button className={styles["btn"]} onClick={() => setOpenForm(true)}>
            <HomeIcon sx={{ fontSize: "2rem" }} /> Add New Address
          </button>
        </div>
      </section>
    </>
  );
};

export default Shipping;
