import React from "react";
import styles from './ApplyButton.module.css'

function ApplyButton() {
  return (
    <div className={styles.button}>
      <div className={styles.container}>
        <div className={styles.circular}>
          Apply
        </div>
      </div>
    </div>
  );
}

export default ApplyButton;
