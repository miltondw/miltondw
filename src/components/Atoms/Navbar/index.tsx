import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { items } from "./dbItems";
export const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [scroll, setScroll] = useState(0);
  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
  }, [scroll]);
  return (
    <nav className={`${styles.navbar} ${scroll > 95 && styles.navActive}`}>
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
