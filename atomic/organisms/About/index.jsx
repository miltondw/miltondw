import Image from "next/image";
import CardsAbout from "../../molecules/CardsAbout";
const About = () => {
  return (
    <section id="about">
      <h2>Conocerme</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <Image
              src="/assets/perfil.jpg"
              alt="Miltondw"
              width={680}
              height={590}
            />
          </div>
        </div>
        <div className="about__content">
          <CardsAbout />
          <p className="about__content-paragraph">
            Me apasiona ayudar a las empresas a crecer y adaptarse al mundo
            digital. Mi experiencia se basa en la recopilación de fundaciones y
            empresas en las que he podido ayudar, desde la creación de nuevos
            productos y su adaptación y actualización.
          </p>

          <a href="#contact" className="btn btn-primary">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
