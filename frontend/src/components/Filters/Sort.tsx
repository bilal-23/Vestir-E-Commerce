import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Sort.module.css";
import { SortByFilter } from "../../context/ContextTypes";
import { useFilter } from "../../context/FilterContext";

const Sort = () => {
  const { sortBy, sort } = useFilter();
  const handleChange = (e: any) => {
    const value = e.target.value as SortByFilter;
    sort(value);
  };
  return (
    <div className={styles["sort"]}>
      <p className="text-s">Sort By:</p>
      <div className={styles["sort-select-container"]}>
        <ExpandMoreIcon className={styles["expand-icon"]} />
        <select
          className={`text-s text-300 ${styles["sort-select"]}`}
          value={sortBy}
          onChange={handleChange}
        >
          <option value="defaut-sort">Default</option>
          <option value="trending">Trending</option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
