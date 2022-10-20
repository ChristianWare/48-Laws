import Nav from "../nav/Nav";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.background}>
      <div className={styles.layout}>
        <Nav />
        {children}
      </div>
    </div>
  );
};
export default Layout;
