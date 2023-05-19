import { useState } from "react";
import styles from "./Filter.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategroyFilter";
import SizeFilter from "./SizeFilter";
import Sort from "./Sort";

const Filters = () => {
  const [openFilter, setOpenFilter] = useState({
    price: false,
    category: false,
    size: false,
  });

  function toggleFilter(type: "price" | "category" | "size") {
    switch (type) {
      case "price":
        setOpenFilter((prev) => ({
          price: !prev.price,
          category: false,
          size: false,
        }));
        break;
      case "category":
        setOpenFilter((prev) => ({
          price: false,
          category: !prev.category,
          size: false,
        }));
        break;
      case "size":
        setOpenFilter((prev) => ({
          price: false,
          category: false,
          size: !prev.size,
        }));
        break;
      default:
        break;
    }
  }

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
  };
}
const Filter: React.FC<FilterProps> = ({ filter }) => {
  return (
    <div className={styles["filter-container"]}>
      {filter.price && <PriceFilter />}
      {filter.category && <CategoryFilter />}
      {filter.size && <SizeFilter />}
      <button className={styles["filter-reset-btn"]}>Remove Filters</button>
    </div>
  );
};
