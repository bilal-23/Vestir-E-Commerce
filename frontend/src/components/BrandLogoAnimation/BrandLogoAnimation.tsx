import styles from "./BrandLogoAnimation.module.css";
import { useState, useEffect } from "react";
const BrandLogoAnimation = () => {
  const [backgroundColor, setBackgroundColor] = useState("var(--blue)");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      setBackgroundColor(randomColor);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles["container"]} style={{ backgroundColor }}>
      <h1 className={`${styles["brand"]} text-xl text-600`}>Vestir</h1>
    </div>
  );
};

export default BrandLogoAnimation;
