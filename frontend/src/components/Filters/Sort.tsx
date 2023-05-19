import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Sort.module.css";

const Sort = () => {
  const [] = useState();
  return (
    <div className={styles["sort"]}>
      <p className="text-s">Sort By:</p>
      <div className={styles["sort-select-container"]}>
        <ExpandMoreIcon className={styles["expand-icon"]} />
        <select className={`text-s text-300 ${styles["sort-select"]}`}>
          <option value="defaut-sort">Default</option>
          <option value="tredning">Trending</option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
