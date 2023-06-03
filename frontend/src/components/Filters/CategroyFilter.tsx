import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "./Filter.module.css";

export default function CategoryFilter() {
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    // Now check if the value is already in the array
    if (isChecked) {
      setCategoriesSelected((prev) => [...prev, value]);
    } else {
      setCategoriesSelected((prev) =>
        prev.filter((category) => category !== value)
      );
    }
  };

  return (
    <div className={styles["filter-category"]}>
      <FormGroup className={styles["checkbox-container"]}>
        <FormControlLabel
          control={
            <Checkbox
              checked={categoriesSelected.includes("men")}
              onChange={handleChange}
              value={"men"}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="For Him"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={categoriesSelected.includes("women")}
              onChange={handleChange}
              value={"women"}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="For Her"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={categoriesSelected.includes("accessories")}
              onChange={handleChange}
              value={"accessories"}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Accessories"
        />
      </FormGroup>
    </div>
  );
}
