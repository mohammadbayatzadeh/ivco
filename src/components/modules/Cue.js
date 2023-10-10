import React from "react";
import styles from "./Cue.module.css";
import { TiShoppingCart } from "react-icons/ti";
import ProgressBar from "../elements/ProgressBar";

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
      <div className={styles.info}>
        <div className={styles.details}>
          <ProgressBar amount={5} title='Force' color="red" />
          <ProgressBar amount={2} title='Aim' color="yellow" />
          <ProgressBar amount={2}  title='Spin' color="purple"/>
          <ProgressBar amount={6}  title='Time' color="blue"/>
        </div>
        <div className={styles.buttons}>
          <span className={styles.price}>USDT 1000</span>
          <div className={styles.row}>
            <span className={styles.point}>+ 10</span>
            <button className={styles.buy}>
              <div className={styles.circular}>
                <TiShoppingCart />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cue;
