import Button from "../button/Button";
import Law2 from "../law2/Law2";
import styles from "./LawSection2.module.css";

const LawSection2 = ({ laws }) => {

  return (
    <section className={styles.container}>
      <div >
        <div className={styles.content}>
          {laws.map((law, index) => (
            <Law2 laws={law} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default LawSection2;
