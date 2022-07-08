import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h2>Mi experiencia</h2>
      <div className="container experience__container">
        <div className="experience__container-skills">
          <h3 className="experience__container-title">Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Sass</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Material UI</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>ReactJs</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Nextjs</h4>
            </article>
          </div>
        </div>
        <div className="experience__container-skills">
          <h3 className="experience__container-title">
            Complementos de Desarrollo
          </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Node JS</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Mongo DB</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Graphql</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Git</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Trello</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Figma</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
