import Button from "../button/Button";
import Law from "../law/Law";
import styles from "./LawSection2.module.css";
import { useRouter } from "next/router";

const LawSection2 = ({ laws }) => {
    const router = useRouter();

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
          {laws.slice(0, 23).map((law, index) => (
            <Law laws={law} index={index} />
          ))}
        </div>
        <div className={styles.content2}>
          {laws.slice(24, 48).map((law, index) => (
            <Law laws={law} index={index} />
          ))}
        </div>
      </div>
      <div className={styles.btnContainer}>
        <Button href='/' text='See All Laws' color='secondary' />
      </div>
    </section>
  );
};
export default LawSection2;
