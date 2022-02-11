import React from "react";
import classes from "./Button.module.css";

const Button = ({ name, sec, sm, onClick, href }) => {
  return (
    <button
      className={`${classes["btn"]} ${sec && classes.secondary} ${
        sm && classes.small
      }`}
      onClick={onClick && onClick}
      href={href}
    >
      {name}
    </button>
  );
};

export default Button;
