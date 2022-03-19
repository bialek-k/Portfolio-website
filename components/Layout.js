import Header from "./Header";
import styles from "./Layout.module.css";

import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
