export default function handler(req, res) {

  const projects = [
    {
      img: "/assets/portfolio/characters-start-wars.png",
      link: {
        git: "https://github.com/miltondw/characters-start-wars",
        demo: "https://characters-start-wars.vercel.app/?character=Luke%20Skywalker",
      },
      title: "Characters Star Wars",
      id: 1,
    },
    {
      img: "/assets/portfolio/weather.png",
      link: {
        git: "https://github.com/miltondw/weater-app-react",
        demo: "https://faciuni.000webhostapp.com/",
      },
      title: "Weather App",
      id: 2,
    },
    {
      img: "/assets/portfolio/lazo.png",
      link: {
        git: "https://github.com/miltondw/lazo-social",
        demo: "https://lazo-social.vercel.app/?search=all&club=all",
      },
      title: "lazo Social Deportivo",
      id: 3,
    },
  ];
  
  const services = {
    itemsTech: [
      "Acelerar tu crecimiento.",
      "Reducir costos y riesgos.",
      "Optimizar procesos importantes.",
      "Reducir el nivel de estrés y de asignaciones rutinarias.",
      "Lograr tus objetivos con recomendaciones y sugerencias externas y más objetivas.",
      "Fijar todos tus esfuerzos en un objetivo establecido",
    ],
    itemsWeb: [
      "Opciones de diseño responsive UX/UI",
      "Preparación técnica para mejorar nuestra comunicación",
      "Seguimiento de tu proyecto con Trello y slack",
      "soporte para resolver dudas",
      "Nombre de tu dominio que sería el nombre de tu empresa en la web.",
      "SEO Y SEM con Google Analytics para cumplir tus OKR",
    ],
    itemsShop: [
      "Ya no vas a estar limitado a trabajar en tu zona",
      "Guía de manejo óptimo para el panel de administración",
      "Acceso a la información del cliente para mejorar la experiencia de tu cliente",
      "Dar mayor información de tu producto o servicio en las plataformas de venta online",
      "Implementación de Pasarelas de pago con alta Seguridad",
    ],
  };

  const experience = {
    experiences: [
      "HTML",
      "Sass",
      "Material UI",
      "JavaScript",
      "ReactJs",
      "Nextjs",
    ],
    complements: [" Node JS", "Mongo DB", "Graphql", "Git", "Trello", "Figma"],
  };

  res.status(200).json({ projects, services, experience });
}
