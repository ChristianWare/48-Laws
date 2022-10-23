import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({
  text,
  href = "",
  title,
  color = "primary",
}) => {
  return (
    <Link href={href}>
      <a className={styles.container} title={title}>
        <button className={`${styles.btn} ${styles[color]}`}>
          {text}
        </button>
      </a>
    </Link>
  );
};
export default Button;
