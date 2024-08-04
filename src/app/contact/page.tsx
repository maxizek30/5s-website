import styles from "./contact.module.css";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <div className={styles.contactContainer}>
        <button>
          <Image
            src="/logos/email_red.svg"
            width={300}
            height={300}
            alt="Logo"
          />
        </button>
        <button>
          <Image
            src="/logos/linkedin_red.svg"
            width={300}
            height={300}
            alt="Logo"
          />
        </button>
        <button>
          <Image
            src="/logos/github_red.svg"
            width={300}
            height={300}
            alt="Logo"
          />
        </button>
      </div>
    </>
  );
}
