import styles from "./Address.module.css";

const address = {
  firstName: "John",
  lastName: "Doe",
  address: "1234 Main St",
  city: "Anytown",
  country: "USA",
  state: "CA",
  zip: "123456",
  phone: "123-456-7890",
};
interface Props {
  selected?: boolean;
  classes?: string;
  children?: React.ReactNode;
}
const Address: React.FC<Props> = ({ selected, classes, children }) => {
  return (
    <address
      className={`${styles["address"]} ${
        selected && styles["selected"]
      } ${classes} `}
    >
      <div className={`${styles["name"]} text-s text-500`}>
        <span className={styles["first-name"]}>{address.firstName}</span>
        <span className={styles["last-name"]}>{address.lastName}</span>
      </div>
      <div className={styles["detail"]}>
        <p className={`text-xs text--400`}>
          {address.address} <br />
          {address.city}, {address.state} {address.zip} <br />
          {address.country}
        </p>
      </div>
      <div className={styles["phone"]}>
        <p className={`text-xs text--400`}>{address.phone}</p>
      </div>
      {children}
    </address>
  );
};

export default Address;
