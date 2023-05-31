import { useAuth } from "../../context/AuthContext";
import styles from "./Profile.module.css";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className={styles["container"]}>
      <div className={styles["profile"]}>
        <div className={styles["profile-group"]}>
          <p>Name</p>
          <p className={`text-700`}>{user?.name}</p>
        </div>
        {/* <div className={styles["profile-group"]}>
          <p>Last Name</p>
          <p className={`text-700`}>Doe</p>
        </div> */}
        <div className={styles["profile-group"]}>
          <p>Email</p>
          <p className={`text-700`}>{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
