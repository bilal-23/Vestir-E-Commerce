import {
  validateName,
  validateAddress,
  validateCity,
  validatePhone,
  validateState,
} from "../../helpers/validate";
import { Address } from "../../context/ContextTypes";
import { useAddress } from "../../hooks/useAddress";
import styles from "./AddressForm.module.css";
import { useState } from "react";
import { toast } from "react-toastify";

interface Props {
  closeForm: () => void;
  formData?: Address;
  isEdit?: boolean;
}
const AddressForm: React.FC<Props> = ({ closeForm, formData, isEdit }) => {
  const { handleAddAddress, handleUpdateAddress } = useAddress();
  const [
    { firstName, lastName, address, city, country, phone, state, zip },
    setFormData,
  ] = useState(
    formData || {
      firstName: "",
      lastName: "",
      phone: "",
      city: "Delhi",
      zip: "",
      address: "",
      country: "India",
      state: "",
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const addressData = {
      firstName,
      lastName,
      phone,
      city,
      zip,
      address,
      country,
      state,
    };
    // Validate
    if (!validateName(firstName)) {
      return toast.error("First Name is not valid");
    }
    if (!validateName(lastName)) {
      return toast.error("Last Name is not valid");
    }
    if (!validateAddress(address)) {
      return toast.error("Address is not valid");
    }
    if (!validateCity(city)) {
      return toast.error("City is not valid");
    }
    if (!validatePhone(phone)) {
      return toast.error("Phone is not valid, cannot be more than 10 digits");
    }
    if (!validateState(state)) {
      return toast.error("State is not valid");
    }
    if (!zip) {
      return toast.error(
        "Zip Code is not valid, cannot be be more than 6 digits"
      );
    }

    if (!isEdit) {
      const isAdded = await handleAddAddress(addressData);
      if (isAdded) {
        closeForm();
      }
    } else {
      if (formData?._id) {
        const isUpdated = await handleUpdateAddress({
          _id: formData._id,
          ...addressData,
        });
        if (isUpdated) {
          closeForm();
        }
      }
    }
  };

  return (
    <>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <h1 className={`text-300 ${styles["heading"]}`}>Add New Address</h1>
        <div className={styles["form-row"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, firstName: e.target.value }));
              }}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, lastName: e.target.value }));
              }}
            />
          </div>
          <div className={`${styles["form-group"]} `}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, phone: e.target.value }));
              }}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="city">City</label>
            <input
              type="city"
              name="city"
              id="city"
              value={city}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, city: e.target.value }));
              }}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="zip">Zip Code</label>
            <input
              type="number"
              name="zip"
              id="zip"
              value={zip}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, zip: e.target.value }));
              }}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="country">Country</label>
            <input
              type="country"
              name="country"
              id="country"
              disabled
              value={country}
            />
          </div>
          <div className={`${styles["form-group"]} ${styles["full-row"]}`}>
            <label htmlFor="states">State</label>
            <select
              name="state"
              placeholder="State"
              required
              value={state}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, state: e.target.value }));
              }}
            >
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadra and Nagar Haveli">
                Dadra and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi" defaultValue={"true"}>
                Delhi
              </option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Orissa">Orissa</option>
              <option value="Pondicherry">Pondicherry</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttaranchal">Uttaranchal</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
        </div>
        <div className={`${styles["form-group"]} ${styles["address-group"]}`}>
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            rows={3}
            value={address}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, address: e.target.value }));
            }}
          ></textarea>
        </div>
        <div className={styles["button"]}>
          <button className={styles["btn"]} type="submit">
            {isEdit ? "Edit" : "Add"}
          </button>
        </div>
      </form>
      <div className={styles["overlay"]} onClick={closeForm}></div>
    </>
  );
};

export default AddressForm;
