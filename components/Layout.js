import Header from "./Header";
import styles from "./Layout.module.css";
import Image from "next/image";

import background_1 from "../assets/background_1.svg";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
