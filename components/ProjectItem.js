import Button from "./Button";
import styles from "./ProjectItem.module.scss";

import { StructuredText } from "react-datocms";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ProjectItem = ({ img, title, desc, tech, github, demo, num }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const projectVariant = {
    visible: { opacity: 1, x: 0, transition: { delay: 0.7, duration: 0.5 } },
    hidden: { opacity: 0, x: num % 2 ? 1024 : -1024 },
  };

  useEffect(() => {
    inView && control.start("visible");
  }, [control, inView]);

  return (
    <motion.div
      variants={projectVariant}
      initial="hidden"
      animate={control}
      ref={ref}
    >
      <div className={`${styles["card"]} ${num % 2 && styles.cardRevers}`}>
        <div className={styles.photo}>
          <Image src={img} alt="project image" width={408} height={326} />
        </div>
        <div className={styles.description}>
          <h1>{title}</h1>
          <p className={styles.descriptionShort}>{desc}</p>
          <div className={styles.btn}>
            {demo && <Button name={"Demo"} sec sm href={demo} />}
            {github && <Button name={"Github"} sm href={github} />}
          </div>
          <div className={styles.tech}>
            <StructuredText data={tech} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
