import { useState } from "react";
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
      <div className={styles.law}>
        <p>Law {laws.frontmatter.number}</p>
        <p>+</p>
        {showInfo && (
          <>
            <h3>{laws.frontmatter.title}</h3>
            <p>{laws.frontmatter.description}</p>
          </>
        )}
      </div>
    </article>
  );
};
export default Law;
