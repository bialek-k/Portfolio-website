import ProjectsList from "./ProjectsList";
import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={classes.projects}>
      <h1>Projekty</h1>
      <ProjectsList />
    </section>
  );
};

export default Projects;
