import styles from "./AddressForm.module.css";

interface Props {
  closeForm: () => void;
}
const AddressForm: React.FC<Props> = ({ closeForm }) => {
  return (
    <>
      <form className={styles["form"]}>
        <h1 className={`text-300 ${styles["heading"]}`}>Add New Address</h1>
        <div className={styles["form-row"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" />
          </div>
        </div>
        <div className={styles["form-row"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="city">City</label>
            <input type="city" name="city" id="city" />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="zipcode">Zip Code</label>
            <input type="number" name="zipcode" id="zipcode" />
          </div>
        </div>
        <div className={styles["form-row"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="country">Country</label>
            <input
              type="country"
              name="country"
              id="country"
              value="India"
              disabled
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="states">State</label>
            <select name="states" placeholder="State" required>
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
          <label htmlFor="add`re`ss">Address</label>
          <textarea name="address" id="address" rows={3}></textarea>
        </div>
        <div className={styles["button"]}>
          <button className={styles["btn"]} type="submit">
            Add
          </button>
        </div>
      </form>
      <div className={styles["overlay"]} onClick={closeForm}></div>
    </>
  );
};

export default AddressForm;
