// This contexts stores the products list and categories list

import React, { createContext, useState, useEffect, useContext } from "react";
import { ContextProviderProps, DataContextInterface } from "./ContextTypes";
import { Product } from "../types/Product";
import { API_URLS } from "../apiConfig";
import axios from "axios";
import { useLoading } from "./LoadingContext";
import { toast } from "react-toastify";

const DataContext = createContext<DataContextInterface>({
  products: [] || null,
  categories: [] || null,
});

export const DataContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const { setLoading } = useLoading();
  const [products, setProducts] = useState<Product[] | null>(null);
  const [categories, setCategories] = useState<any[] | null>(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URLS.getProducts);
      const data = res.data;
      setProducts(data.products);
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ||
          "Something went wrong while fetching products"
      );
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get(API_URLS.getCategories);
      const data = res.data;
      setCategories(data.categories);
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ||
          "Something went wrong while fetching categories"
      );
    }
  };

  const fetchAllData = async () => {
    setLoading(true);
    await fetchProducts();
    await fetchCategories();
    setLoading(false);
  };

  const dataContext = {
    products,
    categories,
  };

  return (
    <DataContext.Provider value={dataContext}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
