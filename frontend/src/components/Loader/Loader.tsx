import classes from "./Loader.module.css";
import { useEffect } from "react";

function Loader() {
  useEffect(() => {
    // When the modal is shown, we want a fixed body
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;

    return () => {
      // When the modal is hidden, we want to remain at the top of the scroll position
      document.body.style.position = "";
      document.body.style.top = "";
    };
  });

  return (
    <>
      <div className={classes["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classes["overlay"]}></div>
    </>
  );
}

export default Loader;
