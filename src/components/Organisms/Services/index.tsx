import React from "react";
import { CardServices } from "../../Molecules/CardServices";
import styles from "./styles.module.scss";
interface IServices {
  services: {
    itemsTech: string[];
    itemsWeb: string[];
    itemsShop: string[];
  };
}
export const Services = ({ services }: IServices) => {
  return (
    <section className={styles.about}>
      <h2 className='title-header'>Servicios</h2>
      <div className={styles.container}>
        <CardServices
          title='Consultoría Tecnológica'
          services={services.itemsTech}
        />
        <CardServices
          title='Creación de sitios Web'
          services={services.itemsWeb}
        />
        <CardServices
          title='Desarrollo de tiendas Online'
          services={services.itemsShop}
        />
      </div>
    </section>
  );
};
