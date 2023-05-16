import Categories from "../components/Categories/Categories";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className={styles["main"]}>
      <div className={styles["hero"]}>
        <div className={styles["hero-text"]}>
          <h1>
            Ethical and Sustainable Products for{" "}
            <strong>Every Lifestyle</strong>
          </h1>
          <Link to="/products" className={styles["btn"]}>
            Shop All
          </Link>
        </div>
      </div>
      <Categories />
    </main>
  );
};

export default Home;
