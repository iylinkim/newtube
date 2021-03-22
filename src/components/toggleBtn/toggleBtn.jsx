import React, { useEffect } from "react";
import styles from "./toggleBtn.module.css";

const ToggleBtn = ({ darkMode, setDarkMode }) => {
  const DARK = "dark";

  const handleTheme = (isDark) => {
    if (isDark) {
      localStorage.setItem(DARK, true);
    } else {
      localStorage.setItem(DARK, false);
    }
  };

  const onClick = (e) => {
    const {
      target: { innerText },
    } = e;

    if (!darkMode && innerText === "Dark") {
      setDarkMode((prev) => {
        handleTheme(!prev);
        return !prev;
      });
    } else if (darkMode && innerText === "Light") {
      setDarkMode((prev) => {
        handleTheme(!prev);
        return !prev;
      });
    }
  };

  useEffect(() => {
    let ls_theme = JSON.parse(localStorage.getItem(DARK));

    if (ls_theme !== null) {
      //localStorage에 theme이 저장되어 있을 때
      setDarkMode(ls_theme);
      handleTheme(ls_theme);
    } else {
      //localStorage가 비어있을 때
      console.log("localStorage 비어있음");

      const darkMode = window.matchMedia("(prefers-color-scheme: Dark)")
        .matches;
      setDarkMode(darkMode);
      handleTheme(darkMode);
    }
  }, [setDarkMode]);
  return (
    <div className={darkMode ? `${styles.mode} ${styles.dark}` : styles.mode}>
      <p
        onClick={onClick}
        className={
          darkMode
            ? styles.mode_state
            : `${styles.mode_state} ${styles.selected}`
        }
      >
        Light
      </p>
      <p
        onClick={onClick}
        className={
          darkMode
            ? `${styles.mode_state} ${styles.selected}`
            : styles.mode_state
        }
      >
        Dark
      </p>
    </div>
  );
};

export default ToggleBtn;
