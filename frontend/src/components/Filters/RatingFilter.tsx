import styles from "./Filter.module.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

const RatingFilter = () => {
  const [ratingValue, setRatingValue] = useState<string>("5");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRatingValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className={styles["filter-rating"]}>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          className={styles["radio-group"]}
          value={ratingValue}
          onChange={handleChange}
        >
          <FormControlLabel
            value="4"
            control={<Radio />}
            label="4 stars & above"
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 28,
              },
            }}
          />
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="3 stars & above"
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 28,
              },
            }}
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="2 stars & above"
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
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="1 star & above"
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
};

export default RatingFilter;
