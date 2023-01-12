import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.scss";
interface ICardProject {
  project: {
    id?: number;
    img: string;
    title: string;
    info: string;
    demo: string;
    git: string;
  };
}
export const CardProject = ({ project }: ICardProject) => {
  const { img, title, demo, git, info } = project;
  const [moreInfo, setMoreInfo] = useState(false);
  return (
    <div onClick={() => setMoreInfo(!moreInfo)} className={styles.project}>
      <div className={`${styles.infoContent} ${moreInfo && styles.infoActive}`}>
        <p className={styles.info}>{info}</p>
      </div>
      <Image
        className={styles.image}
        src={img}
        alt={title}
        width={250}
        height={250}
      />

      <div className='btns'>
        <button className='btn btn-secondary'>
          <a href={demo} target='_blank' rel='noreferrer'>
            Demo
          </a>
        </button>
        <button
          onClick={() => setMoreInfo(!moreInfo)}
          className='btn btn-tertiary'>
          Más Info.
        </button>
        <button className='btn btn-primary'>
          <a href={git} target='_blank' rel='noreferrer'>
            Github
          </a>
        </button>
      </div>
    </div>
  );
};
