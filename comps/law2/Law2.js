import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Law2.module.css";
import Button from "../button/Button";

const Law2 = ({ laws }) => {
  const [showInfo, setShowInfo] = useState(false);

  const closeHandler = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className={`${styles.container} ${showInfo ? styles.active : ""}`}>
      <Image
        src={laws.frontmatter.thumbnailUrl}
        alt=''
        height={420}
        width={600}
        objectFit='cover'
        className={styles.img}
      />
      <div className={styles.top}>
        <h6 className={styles.number} lang='en'>
          Law {laws.frontmatter.number}
        </h6>
        <p onClick={closeHandler} className={styles.openClose}>
          {!showInfo ? "+" : "-"}
        </p>
      </div>
      {showInfo && <p className={styles.title} lang='en'>{laws.frontmatter.title} . . . .</p>}
      <div className={styles.btnContainer}>
        <Button href={`/laws/${laws.slug}`} text='Read More' color='tertiary' />
      </div>
    </article>
  );
};
export default Law2;
