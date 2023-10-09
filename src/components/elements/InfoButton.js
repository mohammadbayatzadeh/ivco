import React from "react";
import styles from "./InfoButton.module.css";
import { AiOutlineInfo } from "react-icons/ai";

function InfoButton() {
  return (
    <div className={styles.button}>
      <div className={styles.container}>
        <div className={styles.circular}>
          <AiOutlineInfo />
        </div>
      </div>
    </div>
  );
}

export default InfoButton;
