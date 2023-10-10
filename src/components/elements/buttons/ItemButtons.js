import React from "react";
import styles from "./ItemButtons.module.css";
import { GiDiceFire } from "react-icons/gi";

function ItemButtons() {
  return (
    <div className={styles.button}>
      <div className={styles.container}>
        <GiDiceFire />
      </div>
    </div>
  );
}

export default ItemButtons;
