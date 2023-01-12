import React from "react";
import { CardProject } from "../../Molecules/CardProject";
import styles from "./styles.module.scss";
interface IProjects {
  projects: [
    {
      img: string;
      git: string;
      demo: string;
      title: string;
      info: string;
      id: number;
    }
  ];
}
export const Projects = ({ projects }: IProjects) => {
  return (
    <section id='projects' className={styles.content}>
      <h2 className='title-header'>Proyectos</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
