import CardServices from "../../molecules/CardServices";

function Services({ services }) {
  return (
    <section id="services">
      <h2>Servicios</h2>
      <div className="container services__container">
        <CardServices
          title={"Consultoría Tecnológica"}
          items={services.itemsTech}
        />
        <CardServices
          title={"Creación de sitio Web"}
          items={services.itemsWeb}
        />
        <CardServices
          title={"Desarrollo de Tienda Online"}
          items={services.itemsShop}
        />
      </div>
    </section>
  );
}

export default Services;
