import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import styles from "./styles.module.scss";
export const CardAbout = () => {
  const itemsCardAbout = [
    {
      title: "Experiencia",
      subtitle: "+2 años",
      icon: () => <FaAward className={styles.icon} />,
    },
    {
      title: "Clientes",
      subtitle: "+20 clientes en distintos países",
      icon: () => <FiUsers className={styles.icon} />,
    },
    {
      title: "Proyectos",
      subtitle: "+30 Proyectos",
      icon: () => <VscFolderLibrary className={styles.icon} />,
    },
  ];
  return (
    <>
      {itemsCardAbout.map((item, i) => (
        <div key={i} className={styles.cardAbout}>
          {item.icon()}
          <h5 className={styles.title}>{item.title}</h5>
          <small className={styles.subtitle}>{item.subtitle}</small>
        </div>
      ))}
    </>
  );
};
