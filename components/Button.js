import React from "react";
import classes from "./Button.module.css";

const Button = ({ name, sec }) => {
  return (
    <button className={`${classes["btn"]} ${sec && classes.secondary}`}>
      {name}
    </button>
  );
};

export default Button;
