import React from "react";
import Navbar from "../modules/Navbar";
import Filter from "../modules/Filter";
import styles from './CuesPage.module.css'

function CuesPage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Filter />
    </div>
  );
}

export default CuesPage;
