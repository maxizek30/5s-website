import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome.</h1>
      <p>
        My name is Max Lopez.Lorem ipsum, or lipsum as it is sometimes known, is
        dummy text used in laying out print, graphic or web designs. The passage
        is attributed to an unknown typesetter in the 15th century who is
        thought to have scrambled parts of Cicero's De Finibus Bonorum et M
      </p>
    </div>
  );
}
