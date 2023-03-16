import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import styles from "./styles.module.scss";
export const Footer = () => {
  const items = [
    ["Inicio", "#"],
    ["Conóceme", "#about"],
    ["Experiencia", "#experience"],
    ["Servicios", "#services"],
    ["Proyectos", "#projects"],
    ["Contácteme", "#contact"],
  ];
  return (
    <footer className={styles.footer}>
      <a href='#' className={styles.title}>
        MILTONDW
      </a>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={styles.item}>
            <a href={item[1]} className={styles.link}>
              {item[0]}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.socials}>
        <a
          target={"_blank"}
          rel='noreferrer'
          href='https://www.linkedin.com/in/milton-dw/'>
          <BsLinkedin />
        </a>
        <a
          target={"_blank"}
          rel='noreferrer'
          href='https://github.com/miltondw'>
          <BsGithub />
        </a>
        <a
          target={"_blank"}
          rel='noreferrer'
          href='https://api.whatsapp.com/send/?phone=573002321421&text&app_absent=0'>
          <BsWhatsapp />
        </a>
      </div>
    </footer>
  );
};
