import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import classes from "./Header.module.scss";
import { route } from "next/dist/server/router";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>bialek-k.pl</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={classes.container}>
        <div className={classes.logo}>
          <p>KB</p>
        </div>
        <nav className={classes.nav}>
          <ul className={classes.navList}>
            <li>
              <Link href="/">
                <a
                  className={`${classes["link"]} ${
                    router.pathname === "/" && classes.active
                  }`}
                >
                  Start
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a
                  className={`${classes["link"]} ${
                    router.pathname === "/blog" && classes.active
                  }`}
                >
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={`${classes["link"]} ${
                    router.pathname === "/contact" && classes.active
                  }`}
                >
                  Kontakt
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
