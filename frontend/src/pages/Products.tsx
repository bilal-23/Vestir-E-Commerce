import styles from "./Products.module.css";
import Products from "../components/Products/Products";
import ProductsBanner from "../components/ProductsPageBanner/ProductsBanner";

const ProductsPage = () => {
  return (
    <main className={styles["main"]}>
      <ProductsBanner />
      <Products />
    </main>
  );
};

export default ProductsPage;
