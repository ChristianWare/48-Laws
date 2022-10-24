import CircleText from "../circleText/CircleText";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.content}>
        <div className={styles.circleTextContainer}>
          <CircleText text='48 • LAWS • OF • POWER •' />
        </div>
        <small>
          ©2022 48 LAWS OF POWER - DESIGNED AND DEVELOPED BY CHRIS WARE
        </small>
      </div>
    </footer>
  );
};
export default Footer;
