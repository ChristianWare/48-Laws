import SectionHeader from "../comps/sectionHeader/SectionHeader";
import Button from "../comps/button/Button";
import styles from "../styles/404.module.css";

const notFoundPage = () => {
  return (
    <>
      <SectionHeader text1='404 laws' text2='of power' />
      <div className={styles.container}>
        <p>The page you are looking for is not here. </p>
        <div className={styles.btnContainer}>
          <Button href='/' text='Home' color='primary' />
          <Button href='/laws' text='All Laws' color='secondary' />
        </div>
      </div>
    </>
  );
};
export default notFoundPage;
