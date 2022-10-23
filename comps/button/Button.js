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
      <a
        className={`${styles.btn} ${styles[color]}`}
        title={title}
      >
        {text}
      </a>
    </Link>
  );
};
export default Button;
