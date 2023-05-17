import styles from "./ProductsBanner.module.css";

const ProductsBanner = () => {
  return (
    <div className={styles["container"]}>
      <h1 className={`text-l text-300`}>
        Born For The Sea. <br />
        Built For Adventure.
      </h1>
    </div>
  );
};

export default ProductsBanner;
