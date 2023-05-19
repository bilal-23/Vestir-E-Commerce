import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import styles from "./Filter.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function CategoryFilter() {
  const [value, setValue] = React.useState("men");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className={styles["filter-category"]}>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          className={styles["radio-group"]}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="men"
            control={<Radio />}
            label="For Him"
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 28,
              },
            }}
          />
          <FormControlLabel
            value="women"
            control={<Radio />}
            label="For Her"
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 28,
              },
            }}
          />
          <FormControlLabel
            value="accessories"
            control={<Radio />}
            label="Accessories"
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 28,
              },
              color: "black",
              "&.Mui-checked": {
                color: "black",
              },
            }}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
