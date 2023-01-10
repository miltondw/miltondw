import React from "react";
import styles from "./styles.module.scss";
import { CardExperience } from "../../Molecules/CardExperience";
export const Experience = ({ experience }: any) => {
  return (
    <section className={styles.about}>
      <h2 className='title-header'>Mi Experiencia</h2>
      <div className={styles.cardsExperience}>
        <CardExperience title='FrontEnd' arrExperience={experience.frontend} />
        <CardExperience title='Backend' arrExperience={experience.backend} />
        <CardExperience
          title='Complementos'
          arrExperience={experience.complements}
        />
      </div>
    </section>
  );
};
