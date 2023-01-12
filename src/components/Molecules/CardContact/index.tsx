import React from "react";
import styles from "./styles.module.scss";
interface ICardContact {
  title: string;
  option: string;
  link: string;
  icon: () => any;
}
export const CardContact = ({ title, option, link, icon }: ICardContact) => {
  return (
    <div className={styles.content}>
      {icon()}
      <h4 className={styles.title}>{title}</h4>
      <h5 className={styles.option}>{option}</h5>
      <a className={styles.link} href={link} target='_blank' rel='noreferrer'>
        Enviar un Mensaje
      </a>
    </div>
  );
};
