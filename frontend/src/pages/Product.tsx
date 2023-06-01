import { useEffect, useState } from "react";
import styles from "./Product.module.css";
import ProductComponent from "../components/Product/Product";
import { Product as ProductType } from "@/types/Product";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
const Product = () => {
  const { products } = useData();
  const [data, setData] = useState<ProductType | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const product = products?.find((product) => product._id === id);
    if (product) {
      setData(product);
    }
  });

  return (
    <main className={styles["container"]}>
      {data && (
        <>
          <p className={`${styles["location"]} text-xs text-500`}>
            <span className={styles["category"]}>{data.category}</span>/
            <span className={styles["name"]}>{data.title}</span>
          </p>
          <ProductComponent data={data} />
        </>
      )}
    </main>
  );
};

export default Product;
