import { useState } from "react";
import styles from "./styles.module.scss";
import { items } from "./dbItems";
export const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navItems}>
        {items.map((item) => (
          <li
            className={`${styles.navItem} ${
              activeNav === item.link ? styles.active : ""
            }`}
            key={item.link}
            onClick={() => setActiveNav(item.link)}>
            <a className={styles.navLink} href={item.link}>
              {item.icon()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
