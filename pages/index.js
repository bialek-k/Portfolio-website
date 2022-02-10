import classes from "../styles/Home.module.scss";

import Button from "../components/Button";
import ProjectsList from "../components/ProjectsList";

export default function Home() {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.heroPhoto}></div>
        <div className={classes.heroDescription}>
          <p>Web Developer</p>
          <h1>Krzysztof Białek</h1>
          <p className={classes.desc}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut lavbore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud{" "}
          </p>
          <div className={classes.buttons}>
            <Button name={"Github"} sec />
          </div>
        </div>
      </section>
      <section className={classes.projects}>
        <h1>Projekty</h1>
        <ProjectsList />
      </section>
    </>
  );
}
