import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <h1 className={styles.title}>
            48 Laws
            <br />
            <span>of Power</span>
          </h1>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>
            48 Laws of Power details the laws for attaining power in life,
            business, and more, and gives historical examples of each law in
            practice, as well as examples of those who do not respect these
            laws.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
