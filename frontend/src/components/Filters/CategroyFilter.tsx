import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "./Filter.module.css";
import { useFilter } from "../../context/FilterContext";
import { CategoryFilter as CategoryFilterType } from "../../context/ContextTypes";

export default function CategoryFilter() {
  const { category, filterByCategory } = useFilter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as CategoryFilterType;
    filterByCategory(value);
  };

  return (
    <div className={styles["filter-category"]}>
      <FormGroup className={styles["checkbox-container"]}>
        <FormControlLabel
          control={
            <Checkbox
              checked={category.includes("Men")}
              onChange={handleChange}
              value={"Men"}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="For Him"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={category.includes("Women")}
              onChange={handleChange}
              value={"Women"}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="For Her"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={category.includes("Accessories")}
              onChange={handleChange}
              value={"Accessories"}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Accessories"
        />
      </FormGroup>
    </div>
  );
}
