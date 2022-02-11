import Image from "next/image";
import Button from "./Button";
import classes from "./ProjectItem.module.scss";

const ProjectItem = ({ img, title, desc, tech, rev, github }) => {
  return (
    <div className={`${classes["card"]} ${rev && classes.cardRevers}`}>
      <div className={classes.photo}>
        <Image src={img} />
      </div>
      <div className={classes.description}>
        <h1>{title}</h1>
        <p className={classes.descriptionShort}>{desc}</p>
        <div className={classes.btn}>
          <Button name={"Demo"} sec sm />
          <Button name={"Github"} sm href={github} />
        </div>
        <div className={classes.tech}>
          <p>{tech}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
