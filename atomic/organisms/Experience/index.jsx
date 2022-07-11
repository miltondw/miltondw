import { BsPatchCheckFill } from "react-icons/bs";
const Experience = ({ experience }) => {
  return (
    <section id="experience">
      <h2>Mi experiencia</h2>
      <div className="container experience__container">
        <div className="experience__container-skills">
          <h3 className="experience__container-title">Frontend Development</h3>
          <div className="experience__content">
            {experience?.experiences &&
              experience?.experiences.map((experience) => (
                <article key={experience} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <h4>{experience}</h4>
                </article>
              ))}
          </div>
        </div>
        <div className="experience__container-skills">
          <h3 className="experience__container-title">
            Complementos de Desarrollo
          </h3>
          <div className="experience__content">
            {experience?.complements &&
              experience?.complements.map((complement) => (
                <article key={complement} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <h4>{complement}</h4>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
