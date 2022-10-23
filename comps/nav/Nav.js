import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Nav.module.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  const router = useRouter();

  useEffect(() => {
    const body = document.querySelector("body");
    if (window.innerWidth <= 768 && isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <header>
      <nav className={styles.navbar}>
        <ul
          onClick={openMenu}
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          {isOpen === true && window.innerWidth <= 768 ? (
            <>
              <h1 className={styles.title}>
                48 Laws
                <br />
                <span>of Power</span>
              </h1>
            </>
          ) : ("")}
          <li className={styles.navItem}>
            <Link href='/'>
              <a onClick={openMenu} title='Home Page'>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/about'>
              <a onClick={openMenu} title='About Page'>About</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/laws'>
              <a onClick={openMenu} title='Laws Page'>Laws</a>
            </Link>
          </li>
        </ul>
        <span
          onClick={openMenu}
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </span>
      </nav>
    </header>
  );
};
export default Nav;
