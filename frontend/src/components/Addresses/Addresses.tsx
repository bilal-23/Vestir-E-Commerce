import Address from "../Checkout/Address";
import styles from "./Addresses.module.css";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddressForm from "./AddressForm";
import { useUserData } from "../../context/UserData";

const Addresses = () => {
  const { addresses } = useUserData();
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
      </main>
    </>
  );
};

export default Addresses;
