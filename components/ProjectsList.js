import React from "react";
import Image from "next/image";
import Button from "./Button";
import classes from "./ProjectList.module.scss";

import sucharPhoto from "../assets/suchar-romana.png";

const ProjectsList = () => {
  return (
    <div className={classes.card}>
      <div className={classes.photo}>
        <Image src={sucharPhoto} />
      </div>
      <div className={classes.desc}>
        <h1>SucharRomana</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <div className={classes.btn}>
          <Button name={"Demo"} sec />
          <Button name={"Github"} />
        </div>
        <div className={classes.tech}>
          <p>HTML CSS JavaScript React</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
