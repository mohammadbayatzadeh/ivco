import React from "react";
import styles from "./ShopButton.module.css";
import { TiShoppingCart } from "react-icons/ti";

function ShopButton() {
  return (
    <div className={styles.shop}>
      <div className={styles.counter}>
        <span> +5</span>
      </div>
      <div className={styles.button}>
        <div className={styles.container}>
          <div className={styles.circular}>
            <TiShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopButton;
