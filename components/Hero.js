import Button from "./Button";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
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
          <Button name={"Github"} sec href={"https://github.com/bialek-k"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
