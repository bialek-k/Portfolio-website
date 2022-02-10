import Head from "next/head";
import Image from "next/image";
import classes from "../styles/Home.module.scss";

import heroPhoto from "../assets/hero_photo.jpeg";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className={classes.container}>
      <section className={classes.hero}>
        <div className={classes.heroPhoto}>
          {/* <Image src={heroPhoto} alt="profilowe" layout="responsive" /> */}
        </div>
        <div className={classes.heroDescription}>
          <p>Web Developer</p>
          <h1>Krzysztof Białek</h1>
          <p className={classes.desc}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut lavbore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud{" "}
          </p>
          <div className={classes.buttons}>
            <Button name={"Portfolio"} sec />
            <Button name={"Github"} sec />
          </div>
        </div>
      </section>
      <section className={classes.projects}>
        <h1>Projekty</h1>
      </section>
    </div>
  );
}
