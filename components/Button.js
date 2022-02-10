import React from "react";
import classes from "./Button.module.css";

const Button = ({ name, sec }) => {
  return (
    <button className={sec ? classes[`btn`] : classes[`btn secondary`]}>
      {name}
    </button>
  );
};

export default Button;
