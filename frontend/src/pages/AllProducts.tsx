import styles from "./AllProducts.module.css";
import Products from "../components/AllProducts/Products";
import ProductsBanner from "../components/ProductsPageBanner/ProductsBanner";
import Filters from "../components/Filters/Filters";
import { useFilter } from "../context/FilterContext";

const ProductsPage = () => {
  const { filteredProducts } = useFilter();

  return (
    <main className={styles["main"]}>
      <ProductsBanner />
      <Filters />
      {filteredProducts && filteredProducts.length === 0 ? (
        <div className={styles["no-products"]}>
          <p className="text-l text-300">No Products</p>
        </div>
      ) : (
        <Products products={filteredProducts} />
      )}
    </main>
  );
};

export default ProductsPage;
