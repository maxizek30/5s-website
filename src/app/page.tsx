import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome.</h1>
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionBar} />
        <p>
          Hello! I&apos;m Max Lopez, a dedicated Computer Science student at
          Pacific Lutheran University, aspiring to become a software engineer.
          Beyond coding, I recharge by taking long walks on the beach and
          playing{" "}
          <Link href="https://www.fortnite.com/" style={{ color: "#F3AF19" }}>
            Fortnite
          </Link>{" "}
          or{" "}
          <Link
            href="https://playvalorant.com/en-us/"
            style={{ color: "#FD4556" }}
          >
            Valorant
          </Link>
          . I&apos;m always happy to{" "}
          <Link href="/contact" style={{ color: "#9d4dbb" }}>
            connect
          </Link>{" "}
          feel free to reach out anytime!
        </p>
      </div>
    </div>
  );
}
