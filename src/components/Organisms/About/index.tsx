import Image from "next/image";
import React from "react";
import about from "../../../img/aboutProfile.png";
import { CardAbout } from "../../Molecules/CardAbout";
import styles from "./styles.module.scss";
export const About = () => {
  return (
    <section id='about' className={styles.about}>
      <h2 className='title-header'>Conóceme</h2>

      <div className={styles.CardsAbout}>
        <CardAbout />
      </div>
      <div className={styles.contentFigure}>
        <figure className={styles.aboutImage}>
          <Image alt='miltondw' src={about} width={250} height={249} />
        </figure>
        <div className={styles.footer}>
          <p className={styles.paragraph}>
            Me apasiona ayudar a las empresas a crecer y adaptarse al mundo
            digital. Mi experiencia se basa en la recopilación de fundaciones y
            empresas en las que he podido colaborar, desde la creación de nuevos
            productos, adaptación y su actualización.
          </p>
          <button className='btn btn-primary'>
            <a href='#contact'>Hablemos</a>
          </button>
        </div>
      </div>
    </section>
  );
};
