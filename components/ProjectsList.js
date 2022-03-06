import ProjectItem from "./ProjectItem";
import styles from "./ProjectsList.module.scss";

const ProjectsList = ({ datodata }) => {
  const data = datodata.data.allProjects;
  console.log(data);

  let number = 1;
  return (
    <>
      <section className={styles.projects}>
        <h1>Projekty</h1>
        {data.map((project) => {
          number++;
          return (
            <ProjectItem
              key={project.id}
              img={project.thumbnail.url}
              title={project.title}
              desc={project.description}
              tech={project.technology}
              github={project.github}
              demo={project.demo}
              num={number}
            />
          );
        })}
      </section>
    </>
  );
};

export default ProjectsList;
