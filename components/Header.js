import Link from "next/link";
import Head from "next/head";

import { useState } from "react";

import { useRouter } from "next/router";
import styles from "./Header.module.scss";
import Image from "next/image";

import { useTheme } from "next-themes";

import Light from "../assets/DarkMode.svg";
import LightDark from "../assets/DarkMode_dark.svg";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  if (toggle) {
    setTheme("light");
  } else {
    setTheme("dark");
  }
  return (
    <>
      <Head>
        <title>bialek-k.pl</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mobileNav}>
        <div className={styles.mobileLogo}>
          <p>KB</p>
        </div>
        <button className={`${styles.hamburger} ${styles.["active"]}` }>
          <span className={styles.hamburger__box}>
            <span className={styles.hamburger__inner}></span>
          </span>
        </button>
      </div>
      <header className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <a
              className={`${styles["link"]} ${
                router.pathname === "/" && styles.active
              }`}
            >
              <p>KB</p>
            </a>
          </Link>
        </div>
        <div className={styles.darkMode}>
          <Image
            src={toggle ? Light : LightDark}
            width={70}
            onClick={() => setToggle((prevState) => !prevState)}
          />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/">
                <a
                  className={`${styles["link"]} ${
                    router.pathname === "/" && styles.active
                  }`}
                >
                  Start
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a
                  className={`${styles["link"]} ${
                    router.pathname === "/blog" && styles.active
                  }`}
                >
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={`${styles["link"]} ${
                    router.pathname === "/contact" && styles.active
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
