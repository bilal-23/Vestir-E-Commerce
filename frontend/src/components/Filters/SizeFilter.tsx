import styles from "./Filter.module.css";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { useFilter } from "../../context/FilterContext";
import { SizesFilter } from "../../context/ContextTypes";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function SizeFilter() {
  const { sizes, filterBySize } = useFilter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as SizesFilter;
    filterBySize(value);
  };

  return (
    <div className={styles["filter-size"]}>
      <FormGroup className={styles["checkbox-container"]}>
        <FormControlLabel
          control={
            <Checkbox
              checked={sizes.includes("XS")}
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
              checked={sizes.includes("S")}
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
              checked={sizes.includes("M")}
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
              checked={sizes.includes("L")}
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
              checked={sizes.includes("XL")}
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
