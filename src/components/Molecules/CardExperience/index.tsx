import React from "react";
import styles from "./styles.module.scss";
import { BsPatchCheckFill } from "react-icons/bs";

interface IExperience {
  title: string;
  arrExperience: string[];
}
export const CardExperience = ({ title, arrExperience }: IExperience) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.items}>
        {arrExperience.map((item, i) => (
          <div className={styles.item} key={i}>
            <span className={styles.icon}>
              <BsPatchCheckFill />
            </span>
            <p className={styles.itemTitle}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
