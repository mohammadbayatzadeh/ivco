"use client";
import React, { useEffect, useRef } from "react";
import styles from "./ProgressBar.module.css";

function ProgressBar({ amount = 1, title,color }) {
  const ref = useRef();
  useEffect(() => {
    const bars = ref.current.childNodes;
    bars.forEach((element, index) => {
      if (index < amount) {
        element.style.backgroundColor = color;
      }
    });
  }, []);
  return (
    <div className={styles.container}>
      <p> {title}</p>
      <div className={styles.progress} ref={ref}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
}

export default ProgressBar;
