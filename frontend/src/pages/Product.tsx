import { useEffect, useState } from "react";
import styles from "./Product.module.css";
import ProductComponent from "../components/Product/Product";
import { Product as ProductType } from "@/types/Product";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URLS } from "../apiConfig";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useLoading } from "../context/LoadingContext";

const Product = () => {
  const [data, setData] = useState<ProductType | null>(null);
  const { id } = useParams();
  const { token } = useAuth();
  const { setLoading } = useLoading();

  useEffect(() => {
    async function getProduct() {
      if (!id) {
        toast.error("Product id invalid");
        return;
      }
      try {
        setLoading(true);
        const res = await axios.get(API_URLS.getProduct(id), {
          headers: {
            Authorization: token,
          },
        });
        setData(res.data.product);
      } catch (err: any) {
        toast.error(err?.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    getProduct();
  }, []);

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
