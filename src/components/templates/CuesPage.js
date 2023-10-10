import React from "react";
import Navbar from "../layouts/Navbar";
import Filter from "../modules/Filter";
import styles from "./CuesPage.module.css";
import Cue from "../modules/Cue";

function CuesPage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Filter />
      <Cue />
    </div>
  );
}

export default CuesPage;
