import Button from "../button/Button";
import Law from "../law/Law";
import styles from "./LawSection.module.css";

const LawSection = ({ laws }) => {
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <h2 className={styles.title}>
          Top Laws <br />
          <span>of Power</span>
        </h2>
      </div>
      <div className={styles.content}>
        <div className={styles.content1}>
          {laws.slice(0, 3).map((law, index) => (
            <Law laws={law} index={index} />
          ))}
        </div>
        <div className={styles.content2}>
          {laws.slice(4, 7).map((law, index) => (
            <Law laws={law} index={index} />
          ))}
        </div>
      </div>
      {/* <div className={styles.btnContainer}>
        <Button text='See All Laws' />
      </div> */}
    </section>
  );
};
export default LawSection;
