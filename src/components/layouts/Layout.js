"use client";
import React, { useEffect, useState } from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
  }, []);

  return (
    <div id={[theme]} className={styles.body}>
      {children}
    </div>
  );
}

export default Layout;
