import Image from "next/image";
import styles from "./styles.module.scss";
interface ICardProject {
  project: {
    id?: number;
    img: string;
    title: string;
    demo: string;
    git: string;
  };
}
export const CardProject = ({ project }: ICardProject) => {
  const { img, title, demo, git } = project;
  return (
    <div className={styles.project}>
      <Image
        className={styles.image}
        src={img}
        alt={title}
        width={250}
        height={250}
      />
      <div className='btns'>
        <button className='btn btn-secondary'>
          <a href={demo}>Demo</a>
        </button>
        <button className='btn btn-primary'>
          <a href={git}>Github</a>
        </button>
      </div>
    </div>
  );
};
