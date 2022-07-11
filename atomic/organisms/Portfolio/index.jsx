import CardPortfolio from "../../molecules/CardPortfolio";

const Porfolio = ({ projects }) => {
  return (
    <section id="portfolio">
      <h2>Proyectos</h2>
      <div className="container portfolio__container">
        {projects &&
          projects.map((project) => (
            <CardPortfolio
              img={project.img}
              link={project.link}
              title={project.title}
              key={project.id}
            />
          ))}
      </div>
    </section>
  );
};

export default Porfolio;
