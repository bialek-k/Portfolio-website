import Button from "./Button";
import styles from "./ProjectItem.module.scss";

import { StructuredText } from "react-datocms";

const ProjectItem = ({ img, title, desc, tech, github, demo, num }) => {
  console.log(num);
  return (
    <div className={`${styles["card"]} ${num % 2 && styles.cardRevers}`}>
      <div className={styles.photo}>
        <img src={img} />
      </div>
      <div className={styles.description}>
        <h1>{title}</h1>
        <p className={styles.descriptionShort}>{desc}</p>
        <div className={styles.btn}>
          {demo && <Button name={"Demo"} sec sm href={demo} />}
          <Button name={"Github"} sm href={github} />
        </div>
        <div className={styles.tech}>
          <StructuredText data={tech} />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
