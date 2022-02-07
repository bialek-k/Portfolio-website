import Header from "./Header";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
