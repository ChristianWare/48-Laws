import styles from '../layout/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.background}>
      <div className={styles.layout}>{children}</div>
    </div>
  );
};
export default Layout