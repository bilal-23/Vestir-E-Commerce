import React from "react";
import styles from "./Auth.module.css";

interface Props {
  setSignup: React.Dispatch<React.SetStateAction<boolean>>;
}
const Login: React.FC<Props> = ({ setSignup }) => {
  return (
    <div className={styles["container"]}>
      <h1 className="text-l text-300">Already Registered?</h1>
      <form className={styles["form"]}>
        <div className={styles["form-group"]}>
          <label htmlFor="email" className="text-s text-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            autoComplete="off"
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password" className="text-s text-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*********"
            autoComplete="off"
          />
        </div>
        <div className={styles["button-container"]}>
          <button className={styles["btn"]}>Sign in</button>
          <button className={styles["btn"]} onClick={() => setSignup(true)}>
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
