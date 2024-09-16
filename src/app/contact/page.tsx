import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./contact.module.css";
import Image from "next/image";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  return (
    <>
      <div className={styles.contactContainer}>
        <a className={styles.links} href="mailto:familiacachorin@gmail.com">
          <FontAwesomeIcon icon={faSquareEnvelope} className={styles.icon} />
        </a>
        <a
          className={styles.links}
          href="https://www.linkedin.com/in/maxizek30/"
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>

        <a className={styles.links} href="https://github.com/maxizek30">
          {" "}
          <FontAwesomeIcon icon={faSquareGithub} className={styles.icon} />
        </a>
      </div>
    </>
  );
}
