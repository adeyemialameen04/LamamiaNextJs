"use client";
import { useContext, useEffect } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "../../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  useEffect(() => {
    console.log(mode);
  }, [mode]);
  return (
    <div onClick={toggle} className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};
export default DarkModeToggle;
