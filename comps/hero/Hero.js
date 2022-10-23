import styles from "./Hero.module.css";
import Image from "next/image";
import img from "../../public/images/law30.jpg";
import Button from "../button/Button";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>
          48 Laws
          <br />
          <span>of Power</span>
        </h1>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <p className={styles.copy}>
            48 Laws of Power details the laws for attaining power in life,
            business, and more, and gives historical examples of each law in
            practice, as well as examples of those who do not respect these
            laws.
          </p>
          <div className={styles.btnContainer}>
            <Button href='/' text='About' title='about' />
            <Button href='/' color='secondary' text='All Laws' title='about' />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <Image
              src={img}
              className={styles.img}
              layout='responsive'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
