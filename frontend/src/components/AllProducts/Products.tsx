import styles from "./Products.module.css";
import { Product as ProductType } from "../../types/Product";
import { Product } from "./Product";

interface Props {
  products: ProductType[] | null;
}

const Products: React.FC<Props> = ({ products }) => {
  return (
    <div className={styles["container"]}>
      {products &&
        products.map((product) => {
          return (
            <Product
              id={product._id}
              key={product._id}
              images={product.images}
              title={product.title}
              trending={product.trending}
              price={product.price}
            />
          );
        })}
    </div>
  );
};

export default Products;
