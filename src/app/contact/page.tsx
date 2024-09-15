import styles from "./contact.module.css";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <div className={styles.contactContainer}>
        <a className={styles.links} href="mailto:familiacachorin@gmail.com">
          <Image
            src="/logos/email_red.svg"
            width={300}
            height={300}
            alt="Logo"
          />
        </a>
        <a
          className={styles.links}
          href="https://www.linkedin.com/in/maxizek30/"
        >
          <Image
            src="/logos/linkedin_red.svg"
            width={300}
            height={300}
            alt="Logo"
          />
        </a>
        <a className={styles.links} href="https://github.com/maxizek30">
          <Image
            src="/logos/github_red.svg"
            width={300}
            height={300}
            alt="Logo"
          />
        </a>
      </div>
    </>
  );
}
