import styles from "./Filter.module.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useFilter } from "../../context/FilterContext";

function valuetext(value: number) {
  return `Rs. ${value}`;
}

const PriceFilter = () => {
  const { minPrice, maxPrice, filterByPrice } = useFilter();

  const handleChange = (_event: any, newValue: number | number[]) => {
    const [min, max] = newValue as number[];
    filterByPrice(min, max);
  };
  return (
    <div className={styles["filter-price"]}>
      <p className="text-s text-400">{minPrice}</p>
      <Box sx={{ width: 300 }}>
        <Slider
          className={styles["price-slider"]}
          getAriaLabel={() => "Price range"}
          value={[minPrice, maxPrice]}
          min={0}
          max={5000}
          step={100}
          onChange={handleChange}
          getAriaValueText={valuetext}
        />
      </Box>
      <p className="text-s text-400">{maxPrice}</p>
    </div>
  );
};

export default PriceFilter;
