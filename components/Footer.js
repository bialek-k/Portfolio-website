import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>
        Made with love in <span>Kolbuszowa</span>
      </p>
    </div>
  );
};

export default Footer;
