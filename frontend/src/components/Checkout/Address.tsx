import { useAddress } from "../../hooks/useAddress";
import AddressForm from "../Addresses/AddressForm";
import styles from "./Address.module.css";
import { useState } from "react";

interface Props {
  selected?: boolean; //is checkout page
  _id: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  state: string;
  zip: string;
  phone: string;
}
const Address: React.FC<Props> = ({
  selected,
  _id,
  firstName,
  lastName,
  address,
  city,
  country,
  state,
  zip,
  phone,
}) => {
  const { handleRemoveAddress } = useAddress();
  const [openForm, setOpenForm] = useState(false);
  const handleDelete = () => {
    handleRemoveAddress(_id);
  };
  const addressData = {
    _id,
    firstName,
    lastName,
    address,
    city,
    country,
    state,
    zip,
    phone,
  };

  return (
    <>
      {openForm && (
        <AddressForm
          isEdit={true}
          formData={addressData}
          closeForm={() => setOpenForm(false)}
        />
      )}
      <address
        className={`${styles["address"]} 
      ${styles["address-card"]} 
      ${selected && styles["selected"]} `}
      >
        <div className={`${styles["name"]} text-s text-500`}>
          <span className={styles["first-name"]}>{firstName}</span>
          <span className={styles["last-name"]}>{lastName}</span>
        </div>
        <div className={styles["detail"]}>
          <p className={`text-xs text--400`}>
            {address} <br />
            {city}, {state} {zip} <br />
            {country}
          </p>
        </div>
        <div className={styles["phone"]}>
          <p className={`text-xs text--400`}>{phone}</p>
        </div>
        <div className={styles["buttons"]}>
          <button className={styles["btn"]} onClick={() => setOpenForm(true)}>
            Edit
          </button>
          <button className={styles["btn"]} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </address>
    </>
  );
};

export default Address;
