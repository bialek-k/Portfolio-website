import Link from "next/link";
import Head from "next/head";

import { useState, useRef } from "react";

import Navigation from "./Navigation";

import { useRouter } from "next/router";
import styles from "./Header.module.scss";
import Image from "next/image";

import { useTheme } from "next-themes";

import Light from "../assets/DarkMode.svg";
import LightDark from "../assets/DarkMode_dark.svg";

import logo from "../assets/logo.png";
import logo_dark from "../assets/logo_dark.png";

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
        <title>krzysztof-bialek.pl</title>
        <meta name="description" content="Frontend Developer Website" />
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
              <Image src={toggle ? logo : logo_dark} alt="logo white" />
            </a>
          </Link>
        </div>
        <div className={styles.darkMode}>
          <Image
            src={toggle ? Light : LightDark}
            width={"100%"}
            onClick={() => setToggle((prevState) => !prevState)}
            className={styles.lamp}
            alt="logo black"
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
        <Navigation
          mobileActive={mobileActive}
          setMobileActive={setMobileActive}
        />
      </header>
    </>
  );
};

export default Header;
