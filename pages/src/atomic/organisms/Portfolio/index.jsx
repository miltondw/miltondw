import CardPortfolio from "../../molecules/CardPortfolio";

const Porfolio = () => {
  const projects = [
    {
      img: {
        src: "/assets/portfolio/characters-start-wars.png",
        alt: "proyecto",
      },
      link: {
        git: "https://github.com/miltondw/characters-start-wars",
        demo: "https://characters-start-wars.vercel.app/?character=Luke%20Skywalker",
      },
      title: "Characters Star Wars",
      id: 0,
    },
    {
      img: {
        src: "/assets/portfolio/weather.png",
        alt: "proyecto",
      },
      link: {
        git: "https://github.com/miltondw/weater-app-react",
        demo: "https://faciuni.000webhostapp.com/",
      },
      title: "Weather App",
      id: 1,
    },
    {
      img: {
        src: "/assets/portfolio/lazo.png",
        alt: "proyecto",
      },
      link: {
        git: "https://github.com/miltondw/lazo-social",
        demo: "https://lazo-social.vercel.app/?search=all&club=all",
      },
      title: "lazo Social Deportivo",
      id: 2,
    },
  ];
  return (
    <section id="portfolio">
      <h2>Proyectos</h2>
      <div className="container portfolio__container">
        {projects.map((project) => (
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
