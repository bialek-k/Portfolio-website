import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/router";

import styles from "./Navigation.module.scss";
import useOutsideClick from "../hooks/useOutsideClick";

const Navigation = ({ mobileActive, setMobileActive }) => {
  const ref = useRef();
  const router = useRouter();

  useOutsideClick(ref, () => {
    if (mobileActive) setMobileActive(false);
  });

  return (
    <nav className={`${styles.nav} ${mobileActive && styles.navActive}`}>
      <ul className={styles.navList} ref={ref}>
        <li>
          <Link href="/">
            <a
              className={`${styles["link"]} ${
                router.pathname === "/" && styles.active
              }`}
              onClick={() => setMobileActive(false)}
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
              onClick={() => setMobileActive(false)}
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
              onClick={() => setMobileActive(false)}
            >
              Kontakt
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
