import styles from "./AllProducts.module.css";
import Products from "../components/AllProducts/Products";
import ProductsBanner from "../components/ProductsPageBanner/ProductsBanner";
import Filters from "../components/Filters/Filters";
import { useData } from "../context/DataContext";

const ProductsPage = () => {
  const { products } = useData();

  return (
    <main className={styles["main"]}>
      <ProductsBanner />
      <Filters />
      <Products products={products} />
    </main>
  );
};

export default ProductsPage;
