import { useState } from "react";
import Link from "next/link";
import styles from "./Law.module.css";

const Law = ({ laws }) => {
  const [showInfo, setShowInfo] = useState(false);

  const closeHandler = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article
      className={`${styles.container} ${showInfo ? styles.active : ""}`}
      onClick={closeHandler}
    >
      <div className={styles.top}>
        <p className={styles.number}>LAW {laws.frontmatter.number}</p>
        <p className={styles.openClose}>{!showInfo ? "+" : "-"}</p>
      </div>
      {showInfo && (
        <div className={styles.bottom}>
          <p className={styles.title}>{laws.frontmatter.title}</p>
          <p className={styles.description}>{laws.frontmatter.description}</p>
          <Link href={`/laws/${laws.slug}`}>
            <a className={styles.readMore}>
              Read More <span>→</span>
            </a>
          </Link>
        </div>
      )}
    </article>
  );
};
export default Law;
