import React from "react";
import styles from "./styles.module.scss";
interface IServices {
  title: string;
  services: string[];
}
export const CardServices = ({ title, services }: IServices) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.items}>
        {services.map((service, i) => (
          <li className={styles.item} key={i}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};
