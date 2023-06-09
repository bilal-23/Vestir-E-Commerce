import { useState, useEffect } from "react";
import styles from "./Filter.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategroyFilter";
import SizeFilter from "./SizeFilter";
import Sort from "./Sort";
import RatingFilter from "./RatingFilter";
import { useFilter } from "../../context/FilterContext";

const Filters = () => {
  const [openFilter, setOpenFilter] = useState({
    price: false,
    category: false,
    size: false,
    rating: false,
  });

  function toggleFilter(type: "price" | "category" | "size" | "rating") {
    switch (type) {
      case "price":
        setOpenFilter((prev) => ({
          price: !prev.price,
          category: false,
          size: false,
          rating: false,
        }));
        break;
      case "category":
        setOpenFilter((prev) => ({
          price: false,
          category: !prev.category,
          size: false,
          rating: false,
        }));
        break;
      case "size":
        setOpenFilter((prev) => ({
          price: false,
          category: false,
          size: !prev.size,
          rating: false,
        }));
        break;
      case "rating":
        setOpenFilter((prev) => ({
          price: false,
          category: false,
          size: false,
          rating: !prev.rating,
        }));
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    // Add a event listener to close the filter when clicked outside
    const closeFilter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${styles["filters"]}`)) {
        setOpenFilter({
          price: false,
          category: false,
          size: false,
          rating: false,
        });
      }
    };
    document.addEventListener("click", closeFilter);

    return () => {
      document.removeEventListener("click", closeFilter);
    };
  }, []);

  return (
    <div className={styles["container"]}>
      <div className={styles["filters"]}>
        <div className={styles["filter"]} onClick={() => toggleFilter("price")}>
          <h3 className="text-s text-400">Price</h3>
          <ExpandMoreIcon
            className={`${styles["expand"]} ${
              openFilter.price && styles["active-icon"]
            }`}
          />
        </div>
        <div
          className={styles["filter"]}
          onClick={() => toggleFilter("category")}
        >
          <h3 className="text-s text-400">Category</h3>
          <ExpandMoreIcon
            className={`${styles["expand"]} ${
              openFilter.category && styles["active-icon"]
            }`}
          />
        </div>
        <div className={styles["filter"]} onClick={() => toggleFilter("size")}>
          <h3 className="text-s text-400">Size</h3>
          <ExpandMoreIcon
            className={`${styles["expand"]} ${
              openFilter.size && styles["active-icon"]
            }`}
          />
        </div>
        <div
          className={styles["filter"]}
          onClick={() => toggleFilter("rating")}
        >
          <h3 className="text-s text-400">Rating</h3>
          <ExpandMoreIcon
            className={`${styles["expand"]} ${
              openFilter.rating && styles["active-icon"]
            }`}
          />
        </div>
        {Object.values(openFilter).some((item) => item) && (
          <Filter filter={openFilter} />
        )}
      </div>
      <Sort />
    </div>
  );
};

export default Filters;

interface FilterProps {
  filter: {
    price: boolean;
    category: boolean;
    size: boolean;
    rating: boolean;
  };
}
const Filter: React.FC<FilterProps> = ({ filter }) => {
  const { clearFilters } = useFilter();
  return (
    <div className={styles["filter-container"]}>
      {filter.price && <PriceFilter />}
      {filter.category && <CategoryFilter />}
      {filter.size && <SizeFilter />}
      {filter.rating && (
        <div>
          <RatingFilter />{" "}
        </div>
      )}
      <button className={styles["filter-reset-btn"]} onClick={clearFilters}>
        Remove All Filters
      </button>
    </div>
  );
};
