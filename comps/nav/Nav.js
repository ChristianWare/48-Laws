import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/'>
          <a>About</a>
        </Link>
        <Link href='/'>
          <a>Blog</a>
        </Link>
      </nav>
    </header>
  );
};
export default Nav;
