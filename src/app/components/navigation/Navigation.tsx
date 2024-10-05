"use client";

import Link from "next/link";
import styles from "./navigation.module.css";

import { usePathname } from "next/navigation";

const Navigation = () => {
  const currentPath = usePathname();
  return (
    <nav className={styles.navigation}>
      <Link href="/" className={styles.name}>
        <h2 style={{ fontSize: "4vw" }}>Max Lopez</h2>
      </Link>
      <ul className={styles.links}>
        <li
          className={`${styles.listItem} ${
            currentPath === "/" ? styles.active : ""
          }`}
        >
          <Link href="/" className={styles.link}>
            <h4 className={styles.navText}>Home</h4>
          </Link>
        </li>
        <li
          className={`${styles.listItem} ${
            currentPath.startsWith("/portfolio") ? styles.active : ""
          }`}
        >
          <Link href="/portfolio" className={styles.link}>
            <h4 className={styles.navText}>Portfolio</h4>
          </Link>
        </li>
        <li
          className={`${styles.listItem} ${
            currentPath === "/contact" ? styles.active : ""
          }`}
        >
          <Link href="/contact" className={styles.link}>
            <h4 className={styles.navText}>Contact</h4>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
