import React from "react";
import styles from "./Filter.module.css";
import ApplyButton from "../elements/ApplyButton";
import PriceSlider from "../elements/PriceSlider";

function Filter() {
  return (
    <div className={styles.container}>
      <ApplyButton />
      <PriceSlider />
    </div>
  );
}

export default Filter;
