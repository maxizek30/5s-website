"use client";

import Link from "next/link";
import styles from "./navigation.module.css";

import { usePathname } from "next/navigation";

const Navigation = () => {
  const currentPath = usePathname();
  return (
    <nav className={styles.navigation}>
      <h3>Max Lopez</h3>
      <ul className={styles.links}>
        <li
          className={`${styles.link} ${
            currentPath === "/" ? styles.active : ""
          }`}
        >
          <Link href="/">
            <h4>Home</h4>
          </Link>
        </li>
        <li
          className={`${styles.link} ${
            currentPath.startsWith("/portfolio") ? styles.active : ""
          }`}
        >
          <Link href="/portfolio">
            <h4>Portfolio</h4>
          </Link>
        </li>
        <li
          className={`${styles.link} ${
            currentPath === "/contact" ? styles.active : ""
          }`}
        >
          <Link href="/contact">
            <h4>Contact</h4>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
