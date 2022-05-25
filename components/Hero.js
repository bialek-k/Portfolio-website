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
          Zawsze pracowałem kreatywnie, ale dopiero podczas programowania mogę w
          pełni rozwinąć swoje skrzydła. Połączenie duszy artystycznej z chęcią
          poznawania technicznych zagadnień codziennie pcha mnie do przodu w
          poznawaniu nowych technologii w świecie frontendu i nie tylko.
        </p>
      </div>
    </section>
  );
};

export default Hero;
