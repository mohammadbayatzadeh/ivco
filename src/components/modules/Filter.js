import React from "react";
import styles from "./Filter.module.css";
import ApplyButton from "../elements/buttons/ApplyButton";
import PriceSlider from "../elements/PriceSlider";
import Selector from "../elements/Selector";

function Filter() {
  return (
    <div className={styles.container}>
      <ApplyButton />
      <Selector />
      <Selector />
      <PriceSlider />
    </div>
  );
}

export default Filter;
