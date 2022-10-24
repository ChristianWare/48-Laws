import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
          {/* <Link href='/'>
              <a>Read More</a>
            </Link> */}
        </div>
      )}
    </article>
  );
};
export default Law;
