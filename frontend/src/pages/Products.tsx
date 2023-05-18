import styles from "./Products.module.css";
import Products from "../components/Products/Products";
import ProductsBanner from "../components/ProductsPageBanner/ProductsBanner";
import Filters from "../components/Filters/Filters";

const ProductsPage = () => {
  return (
    <main className={styles["main"]}>
      <ProductsBanner />
      <Filters />
      <Products />
    </main>
  );
};

export default ProductsPage;
