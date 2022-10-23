import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.background}>
      <div className={styles.layout}>
        <Nav />
        {children}
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
