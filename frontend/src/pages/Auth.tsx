import { useState } from "react";
import styles from "./Auth.module.css";
import Signup from "../components/Auth/Signup";
import Login from "../components/Auth/Login";

const Auth = () => {
  const [signup, setSignup] = useState(false);
  return (
    <main className={styles["main"]}>
      {signup ? (
        <Signup setSignup={setSignup} />
      ) : (
        <Login setSignup={setSignup} />
      )}
    </main>
  );
};

export default Auth;
