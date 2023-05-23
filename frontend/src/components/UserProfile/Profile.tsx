import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["profile"]}>
        <div className={styles["profile-group"]}>
          <p>First Name</p>
          <p className={`text-700`}>John</p>
        </div>
        <div className={styles["profile-group"]}>
          <p>Last Name</p>
          <p className={`text-700`}>Doe</p>
        </div>
        <div className={styles["profile-group"]}>
          <p>Email</p>
          <p className={`text-700`}>test@test.com</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
