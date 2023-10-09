import React from "react";
import styles from "./BackButton.module.css";
import { TbArrowBackUp } from "react-icons/tb";

function BackButton() {
  return (
    <div className={styles.button}>
      <div className={styles.container}>
        <div className={styles.circular}>
          <TbArrowBackUp />
        </div>
      </div>
    </div>
  );
}

export default BackButton;
