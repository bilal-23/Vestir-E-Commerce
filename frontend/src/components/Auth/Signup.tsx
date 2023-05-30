import styles from "./Auth.module.css";

interface Props {
  setSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signup: React.FC<Props> = ({ setSignup }) => {
  return (
    <div className={styles["container"]}>
      <h1 className="text-l text-300">Create an Account</h1>
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
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*********"
            autoComplete="off"
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password" className="text-s text-300">
            Confirm Password
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
          <button className={styles["btn"]}>Create account</button>
          <button className={styles["btn"]} onClick={() => setSignup(false)}>
            Already have an account ?
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
