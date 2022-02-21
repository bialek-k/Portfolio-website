import ProjectsList from "./ProjectsList";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h1>Projekty</h1>
      <ProjectsList />
    </section>
  );
};

export default Projects;
