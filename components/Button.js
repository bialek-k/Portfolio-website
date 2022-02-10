import React from "react";
import classes from "./Button.module.css";

const Button = ({ name, sec, sm }) => {
  return (
    <button
      className={`${classes["btn"]} ${sec && classes.secondary} ${
        sm && classes.small
      }`}
    >
      {name}
    </button>
  );
};

export default Button;
