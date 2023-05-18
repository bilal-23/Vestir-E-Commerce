import { useState } from "react";
import styles from "./Filter.module.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `Rs. ${value}`;
}

const PriceFilter = () => {
  const [value, setValue] = useState<number[]>([0, 10000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div className={styles["filter-price"]}>
      <p className="text-s text-400">{value[0]}</p>
      <Box sx={{ width: 300 }}>
        <Slider
          className={styles["price-slider"]}
          getAriaLabel={() => "Price range"}
          value={value}
          min={0}
          max={10000}
          step={100}
          onChange={handleChange}
          getAriaValueText={valuetext}
        />
      </Box>
      <p className="text-s text-400">{value[1]}</p>
    </div>
  );
};

export default PriceFilter;
