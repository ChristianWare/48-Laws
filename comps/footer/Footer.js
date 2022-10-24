import CircleText from "../circleText/CircleText";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className={styles.content}>
        <div className={styles.circleTextContainer}>
          <CircleText text='48 • LAWS • OF • POWER •' />
        </div>
        <div className={styles.bottom}>
          <small>
            ©2022 48 LAWS OF POWER - DESIGNED AND DEVELOPED BY CHRIS WARE
          </small>
          <ul>
            <Link href='/'>
              <a>
                <li>Home</li>
              </a>
            </Link>
            <Link href='/about'>
              <a>
                <li>About</li>
              </a>
            </Link>
            <Link href='/laws'>
              <a>
                <li>Laws</li>
              </a>
            </Link>
            
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
