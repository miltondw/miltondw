import Image from "next/image";
import styles from "./styles.module.scss";
import profile from "../../../img/profile_home.png";
export const Inicio = () => {
  return (
    <header className={styles.header}>
      <div className={styles.welcome}>
        <p className={styles.subtitle}>Hola! Bienvenid@, Soy</p>
        <h1 className={styles.title}>Milton Estrada</h1>
        <h2 className={styles.subtitle}>FullStack Developer</h2>
      </div>
      <div className={styles.btns}>
        <button className='btn btn-secondary'>
          <a href='/assets/Milton-Estrada-FrontEnd-CV.pdf' download>
            Descargar curriculum
          </a>
        </button>
        <button className='btn btn-primary'>
          <a href='#contact'>Hablemos</a>
        </button>
      </div>
      <Image
        width={200}
        height={300}
        className={styles.profile}
        src={profile}
        alt='miltondw'
      />
    </header>
  );
};
