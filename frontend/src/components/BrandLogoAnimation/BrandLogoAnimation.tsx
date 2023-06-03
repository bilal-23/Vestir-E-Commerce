import styles from "./BrandLogoAnimation.module.css";
import { useState, useEffect } from "react";

const generateRandomMutedColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 30) + 30; // 30-60%
  const lightness = Math.floor(Math.random() * 40) + 30; // 30-70%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
const BrandLogoAnimation = () => {
  const [backgroundColor, setBackgroundColor] = useState("var(--blue)");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomMutedColor = generateRandomMutedColor();
      setBackgroundColor(randomMutedColor);
    }, 700);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className={styles["container"]} style={{ backgroundColor }}>
      <div className={styles["overlay"]}></div>
      <h1 className={`${styles["brand"]} text-600`}>Vestir</h1>
    </div>
  );
};

export default BrandLogoAnimation;
