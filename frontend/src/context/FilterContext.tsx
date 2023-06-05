import { createContext, useState, useEffect, useContext } from "react";
import {
  CategoryFilter,
  FilterContextInterface,
  FilterState,
  SizesFilter,
  SortByFilter,
} from "./ContextTypes";
import { useData } from "./DataContext";
import { useNavigate } from "react-router-dom";
const FilterContext = createContext<FilterContextInterface>({
  category: [],
  sizes: [],
  minPrice: 0,
  maxPrice: 5000,
  searchTerm: "",
  rating: "1",
  filteredProducts: [],
  sortBy: "default-sort",
  setSearchTerm: () => {},
  searchProducts: () => {},
  filterBySize: () => {},
  filterByCategory: () => {},
  filterByRating: () => {},
  filterByPrice: () => {},
  sort: () => {},
  clearFilters: () => {},
});

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const { products } = useData();
  const navigate = useNavigate();
  const [
    {
      category,
      sizes,
      minPrice,
      maxPrice,
      searchTerm,
      rating,
      filteredProducts,
      sortBy,
    },
    setFilters,
  ] = useState<FilterState>({
    category: [],
    sizes: [],
    minPrice: 0,
    maxPrice: 5000,
    searchTerm: "",
    rating: "1",
    filteredProducts: products,
    sortBy: "default-sort",
  });

  useEffect(() => {
    if (products) {
      setFilters((prev) => ({
        ...prev,
        filteredProducts: products,
      }));
    }
  }, [products]);

  useEffect(() => {
    sort(sortBy);
  }, [filteredProducts]);

  const setSearchTerm = (searchTerm: string) => {
    setFilters((prev) => ({
      ...prev,
      searchTerm: searchTerm,
    }));
  };

  const searchProducts = (searchTerm: string) => {
    if (!products) return;
    const newProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilters((prev) => ({
      ...prev,
      searchTerm: searchTerm,
      filteredProducts: newProducts,
    }));
    navigate("/products");
  };

  const filterBySize = (size: SizesFilter) => {
    if (!products) return;
    let filters = {
      category,
      filteredProducts,
      maxPrice,
      minPrice,
      rating,
      searchTerm,
      sortBy,
    };
    if (sizes.includes(size)) {
      let newSizes = sizes.filter((s) => s !== size);
      setFilters((prev) => {
        return {
          ...prev,
          sizes: newSizes,
        };
      });
      filterProducts({ ...filters, sizes: newSizes });
    } else {
      let newSizes = [...sizes, size];
      setFilters((prev) => {
        return {
          ...prev,
          sizes: newSizes,
        };
      });
      filterProducts({ ...filters, sizes: newSizes });
    }
  };

  const filterByCategory = (categoryName: CategoryFilter) => {
    if (!products) return;
    let filters = {
      sizes,
      filteredProducts,
      maxPrice,
      minPrice,
      rating,
      searchTerm,
      sortBy,
    };
    if (category.includes(categoryName)) {
      let newCategory = category.filter((c) => c !== categoryName);
      setFilters((prev) => {
        return {
          ...prev,
          category: newCategory,
        };
      });
      filterProducts({ ...filters, category: newCategory });
    } else {
      let newCategory = [...category, categoryName];
      setFilters((prev) => {
        return {
          ...prev,
          category: newCategory,
        };
      });
      filterProducts({ ...filters, category: newCategory });
    }
  };

  const filterByRating = (rating: string) => {
    setFilters((prev) => {
      return {
        ...prev,
        rating: rating,
      };
    });
    const filters = {
      sizes,
      category,
      filteredProducts,
      maxPrice,
      minPrice,
      searchTerm,
      sortBy,
    };
    filterProducts({ ...filters, rating: rating });
  };

  const filterByPrice = (minPrice: number, maxPrice: number) => {
    setFilters((prev) => {
      return {
        ...prev,
        minPrice: minPrice,
        maxPrice: maxPrice,
      };
    });
    const filters = {
      sizes,
      category,
      filteredProducts,
      rating,
      searchTerm,
      sortBy,
    };
    filterProducts({ ...filters, minPrice: minPrice, maxPrice: maxPrice });
  };

  const sort = (sortType: SortByFilter) => {
    if (!filteredProducts) return;
    let newProducts = filteredProducts;
    switch (sortType) {
      case "default-sort":
        newProducts = filteredProducts.sort((a, b) => +a._id - +b._id);
        break;
      case "price-low-to-high":
        newProducts = filteredProducts.sort((a, b) => +a.price - +b.price);
        break;
      case "price-high-to-low":
        newProducts = filteredProducts.sort((a, b) => +b.price - +a.price);
        break;
      case "trending":
        // All the products which have trending set to true will be shown first
        newProducts = filteredProducts.sort((a, b) => {
          if (a.trending && !b.trending) return -1;
          if (!a.trending && b.trending) return 1;
          return 0;
        });
        break;
    }
    setFilters((prev) => {
      return {
        ...prev,
        sortBy: sortType,
        filteredProducts: newProducts,
      };
    });
  };

  const filterProducts = (filters: FilterState) => {
    if (!products) return;
    // FILTER PRODUCTS
    let newProducts = products.filter((product) => {
      let filtered = product;
      // Check if the product title contain the search term
      if (filters.searchTerm.length > 0) {
        const isValid = product.title
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase());
        if (!isValid) return false;
      }

      // Check if the product contain atleast one of the categories from the filter
      if (filters.category.length > 0) {
        const isValid = filters.category.includes(product.category);
        if (!isValid) return false;
      }

      // Check if the product contain atleast one of the sizes from the filter
      if (filters.sizes.length > 0) {
        const isValid = filters.sizes.includes(product.size);
        if (!isValid) return false;
      }
      return filtered;
    });

    // Filter by price
    newProducts = newProducts.filter((product) => {
      return (
        +product.price >= filters.minPrice && +product.price <= filters.maxPrice
      );
    });

    // Filter by  rating
    newProducts = newProducts.filter((product) => {
      return +product.rating >= +filters.rating;
    });

    setFilters((prev) => {
      return {
        ...prev,
        filteredProducts: newProducts,
      };
    });
  };

  const clearFilters = () => {
    const newFilters: FilterState = {
      sizes: [],
      category: [],
      filteredProducts: products,
      maxPrice: 5000,
      minPrice: 0,
      rating: "1",
      searchTerm: "",
      sortBy: "default-sort",
    };
    setFilters(newFilters);
    filterProducts(newFilters);
  };

  const filterContext = {
    category,
    sizes,
    minPrice,
    maxPrice,
    searchTerm,
    rating,
    filteredProducts,
    sortBy,
    setSearchTerm,
    searchProducts,
    filterBySize,
    filterByCategory,
    filterByRating,
    filterByPrice,
    sort,
    clearFilters,
  };
  return (
    <FilterContext.Provider value={filterContext}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
