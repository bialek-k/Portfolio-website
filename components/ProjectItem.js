import Image from "next/image";
import Button from "./Button";
import styles from "./ProjectItem.module.scss";

const ProjectItem = ({ img, title, desc, tech, rev, github, demo }) => {
  return (
    <div className={`${styles["card"]} ${rev && styles.cardRevers}`}>
      <div className={styles.photo}>
        <Image src={img} />
      </div>
      <div className={styles.description}>
        <h1>{title}</h1>
        <p className={styles.descriptionShort}>{desc}</p>
        <div className={styles.btn}>
          {demo && <Button name={"Demo"} sec sm href={demo} />}
          <Button name={"Github"} sm href={github} />
        </div>
        <div className={styles.tech}>
          <p>{tech}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
