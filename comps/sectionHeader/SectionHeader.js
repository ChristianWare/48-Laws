import styles from './SectionHeader.module.css'

const SectionHeader = ({ text1, text2 }) => {
  return (
    <div>
      <div className={styles.top}>
        <h1 className={styles.title}>
          {text1}
          <br />
          <span>{text2}</span>
        </h1>
      </div>
    </div>
  );
}
export default SectionHeader