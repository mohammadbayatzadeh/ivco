import React from "react";
import BackButton from "../elements/BackButton";
import styles from "./Navbar.module.css";
import InfoButton from "../elements/InfoButton";
import ItemButtons from "../elements/ItemButtons";
import ShopButton from "../elements/ShopButton";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <BackButton />
      <InfoButton />
      <h2 className={styles.cues}>Cues</h2>
      <ItemButtons />
      <ItemButtons />
      <ItemButtons />
      <ShopButton />
    </nav>
  );
}

export default Navbar;
