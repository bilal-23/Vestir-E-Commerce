import styles from "./Products.module.css";
import ProductsBanner from "../components/ProductsPageBanner/ProductsBanner";

const Products = () => {
  return (
    <main className={styles["main"]}>
      <ProductsBanner />
    </main>
  );
};

export default Products;
