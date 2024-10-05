import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome.</h1>
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionBar} />
        <p>
          My name is Max Lopez, a junior at Pacific Lutheran University majoring
          in Computer Science.
        </p>
      </div>
    </div>
  );
}
