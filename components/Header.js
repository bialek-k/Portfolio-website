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
  const [mobileActive, setMobileActive] = useState(false);
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
            width={60}
            onClick={() => setToggle((prevState) => !prevState)}
          />
        </div>
        <button
          className={`${styles.hamburger} ${
            mobileActive && styles.hamburgerActive
          }`}
          onClick={() => setMobileActive((prevState) => !prevState)}
        >
          <span className={styles.hamburgerBox}>
            <span className={styles.hamburgerInner}></span>
          </span>
        </button>
        <nav className={`${styles.nav} ${mobileActive && styles.navActive}`}>
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
