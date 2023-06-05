import { validateEmail, validatePassword } from "../../helpers/validate";
import styles from "./Auth.module.css";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

interface Props {
  setSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signup: React.FC<Props> = ({ setSignup }) => {
  const { singup, login } = useAuth();
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm_password: false,
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as {
      email: string;
      name: string;
      password: string;
      confirm_password: string;
    };
    if (!data) return;
    const { email, name, password, confirm_password } = data;

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
    if (password !== confirm_password) {
      toast.error("Password and confirm password should be same.", {
        toastId: "form-error",
        autoClose: 5000,
      });
      return;
    }
    // Validate Name
    if (name.length < 3) {
      toast.error("Name should be minimum 3 characters long.", {
        toastId: "form-error",
        autoClose: 5000,
      });
      return;
    }
    // ALL ARE VALID, REGISTER USER
    const accountCreated = await singup(email.toLowerCase(), password, name);
    if (!accountCreated) return;
    await login(email.toLowerCase(), password);
  };
  return (
    <div className={styles["container"]}>
      <h1 className="text-l text-300">Create an Account</h1>
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
          <label htmlFor="name" className="text-s text-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            autoComplete="off"
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password" className="text-s text-300">
            Password
          </label>
          <div className={styles["password-input"]}>
            <input
              type={`${showPassword.password ? "text" : "password"}`}
              name="password"
              id="password"
              placeholder="*********"
              autoComplete="off"
              className={styles["password-input"]}
            />
            {!showPassword.password ? (
              <VisibilityOffIcon
                className={styles["password-icon"]}
                type="button"
                onClick={() => {
                  setShowPassword((prev) => {
                    return { ...prev, password: true };
                  });
                }}
              />
            ) : (
              <VisibilityIcon
                className={styles["password-icon"]}
                type="button"
                onClick={() => {
                  setShowPassword((prev) => {
                    return { ...prev, password: false };
                  });
                }}
              />
            )}
          </div>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="confirm_password" className="text-s text-300">
            Confirm Password
          </label>
          <div className={styles["password-input"]}>
            <input
              type={`${showPassword.confirm_password ? "text" : "password"}`}
              name="confirm_password"
              id="confirm_password"
              placeholder="*********"
              autoComplete="off"
              className={styles["password-input"]}
            />
            {!showPassword.confirm_password ? (
              <VisibilityOffIcon
                className={styles["password-icon"]}
                type="button"
                onClick={() => {
                  setShowPassword((prev) => {
                    return { ...prev, confirm_password: true };
                  });
                }}
              />
            ) : (
              <VisibilityIcon
                className={styles["password-icon"]}
                type="button"
                onClick={() => {
                  setShowPassword((prev) => {
                    return { ...prev, confirm_password: false };
                  });
                }}
              />
            )}
          </div>
        </div>
        <div className={styles["button-container"]}>
          <div className={styles["main-btn"]}>
            <button className={styles["btn"]}>Create account</button>
            <button className={styles["btn"]} onClick={() => setSignup(false)}>
              Already have an account ?
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
