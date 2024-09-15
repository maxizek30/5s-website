import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome.</h1>
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionBar} />
        <p>
          My name is Max Lopez, a sophomore at Pacific Lutheran University
          majoring in Computer Science. Eager to dive deep into the world of
          technology, Im all about learning and applying foundational concepts,
          exploring vast possibilities, and contributing to innovative
          solutions.
        </p>
      </div>
    </div>
  );
}
