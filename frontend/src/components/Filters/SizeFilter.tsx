import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "./Filter.module.css";
import { useState } from "react";

export default function SizeFilter() {
  const [sizesSelected, setSizesSelected] = useState<string[]>(["XS", "S"]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    // Now check if the value is already in the array
    if (isChecked) {
      setSizesSelected((prev) => [...prev, value]);
    } else {
      setSizesSelected((prev) => prev.filter((size) => size !== value));
    }
  };

  return (
    <div className={styles["filter-size"]}>
      <FormGroup className={styles["checkbox-container"]}>
        <FormControlLabel
          control={
            <Checkbox
              checked={sizesSelected.includes("XS")}
              onChange={handleChange}
              value={"XS"}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="XS"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={sizesSelected.includes("S")}
              onChange={handleChange}
              value={"S"}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="S"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={sizesSelected.includes("M")}
              onChange={handleChange}
              value={"M"}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="M"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={sizesSelected.includes("L")}
              onChange={handleChange}
              value={"L"}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="L"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={sizesSelected.includes("XL")}
              onChange={handleChange}
              value={"XL"}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="XL"
        />
      </FormGroup>
    </div>
  );
}
