import React from "react";
import styles from "./Cue.module.css";

function Cue() {
  return (
    <div className={styles.container}>
      <div className={styles.cue}>
        <div className={styles.badge}>
          <p>Phoenix</p>
          <img src="images/badge.png" />
        </div>
        <div className={styles.cueContianer}>
          <img src="/images/cue.png" />
        </div>
      </div>
      <div className={styles.info}></div>
    </div>
  );
}

export default Cue;
