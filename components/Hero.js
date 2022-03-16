import Button from "./Button";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroPhoto}></div>
      <div className={styles.heroDescription}>
        <p>Web Developer</p>
        <h1>Krzysztof Białek</h1>
        <p className={styles.desc}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut lavbore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud{" "}
        </p>
        <div className={styles.buttons}>
          <Button name={"Github"} sec sm href={"https://github.com/bialek-k"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
