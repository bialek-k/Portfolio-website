import React from "react";
import styles from "./Button.module.scss";

const Button = ({ name, sec, sm, onClick, href }) => {
  return (
    <button
      className={`${styles["btn"]} ${sec && styles.secondary} ${
        sm && styles.small
      }`}
      onClick={onClick && onClick}
    >
      <a href={href}>{name}</a>
    </button>
  );
};

export default Button;
