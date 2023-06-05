import React from "react";
import styles from "./Auth.module.css";
import { toast } from "react-toastify";
import { validateEmail, validatePassword } from "../../helpers/validate";
import { useAuth } from "../../hooks/useAuth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface Props {
  setSignup: React.Dispatch<React.SetStateAction<boolean>>;
}
const Login: React.FC<Props> = ({ setSignup }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { login } = useAuth();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as {
      email: string;
      password: string;
    };
    if (!data) return;
    const { email, password } = data;
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address", {
        toastId: "form-error",
      });
      return;
    }
    if (!validatePassword(password)) {
      toast.error(
        "Password should be minimum 8 characters long, have at least one uppercase letter and one lowercase letter.",
        { toastId: "form-error", autoClose: 5000 }
      );
      return;
    }
    // BOTH ARE VALID, LOGIN USER
    login(email.toLowerCase(), password);
  };

  const guestLogin = () => {
    login("test@test.com", "Test12345");
  };

  return (
    <div className={styles["container"]}>
      <h1 className="text-l text-300">Already Registered?</h1>
      <form className={styles["form"]} onSubmit={handleFormSubmit}>
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
          <div className={styles["password-input"]}>
            <input
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              id="password"
              placeholder="*********"
              autoComplete="off"
              className={styles["password-input"]}
            />
            {!showPassword ? (
              <VisibilityOffIcon
                className={styles["password-icon"]}
                type="button"
                onClick={() => {
                  setShowPassword(true);
                }}
              />
            ) : (
              <VisibilityIcon
                className={styles["password-icon"]}
                type="button"
                onClick={() => {
                  setShowPassword(false);
                }}
              />
            )}
          </div>
        </div>
        <div className={styles["button-container"]}>
          <div className={styles["main-btn"]}>
            <button className={styles["btn"]}>Sign in</button>
            <button className={styles["btn"]} onClick={() => setSignup(true)}>
              Create Account
            </button>
          </div>
          <button
            className={styles["btn"]}
            style={{ width: "100%" }}
            onClick={guestLogin}
            type="button"
          >
            Guest login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
