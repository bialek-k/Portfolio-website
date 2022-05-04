import React from "react";
import styles from "./Technologies.module.scss";

const Technologies = () => {
  const techData = [
    "HTML5",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Sass",
    "GraphQL",
    "DatoCMS",
    "GIT",
    "GitHub",
    "TailwindCss",
    "TailwindCss",
    "TailwindCss",
  ];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Technologie</h1>
      <div className={styles.techList}>
        {techData.map((item) => (
          <div className={styles.techItem} key={item}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Technologies;
