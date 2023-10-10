"use client";
import React from "react";
import styles from "./PriceSlider.module.css";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

function PriceSlider() {
  return (
    <div className={styles.container}>
      <p>Price Limit</p>
      <RangeSlider className={styles.slider} />
    </div>
  );
}

export default PriceSlider;
