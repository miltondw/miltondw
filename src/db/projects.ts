interface IProjects {
  img: string;
  git: string;
  demo: string;
  title: string;
  info: string;
  id: number;
}
export const projects: IProjects[] = [
  {
    img: "/assets/portfolio/characters-start-wars.png",
    git: "https://github.com/miltondw/characters-start-wars",
    demo: "https://characters-start-wars.vercel.app/?character=Luke%20Skywalker",
    title: "Characters Star Wars",
    info: "Sitio web para los Consultar las características de personajes de Star Wars. Tech Stack  Client: Nextjs, TypeScript, GraphQL-Apollo, Antd. La API: https://swapi.loquenecesito.co/graphql/",
    id: 1,
  },
  {
    img: "/assets/portfolio/weather.png",
    git: "https://github.com/miltondw/weater-app-react",
    demo: "https://faciuni.000webhostapp.com/",
    title: "Weather App",
    info: "App web para ver el clima pasando los parámetros del país y la ciudad. Tech Stack : Reactjs Node-Sass. La API:`https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${API_KEY}&units=metric`;",
    id: 2,
  },
  {
    img: "/assets/portfolio/lazo.png",
    git: "https://github.com/miltondw/lazo-social",
    demo: "https://lazo-social.vercel.app/?search=all&club=all",
    title: "lazo Social Deportivo",
    info: "Sito Web para añadir la tarjeta de cada deportista a su escuela y calcular su indice de masa muscular y la tabla de información de cada estudiante Tech Stack  Client: Nextjs,css,Context Back: jsonwebtoken,mongoose,Mongodb API:Privada conectado desde un cluster de mongodb",
    id: 3,
  },
  {
    img: "/assets/portfolio/taskApp.png",
    git: "https://github.com/miltondw/todo-list-reactjs",
    demo: "/project/tasks",
    title: "Tasks App",
    info: "App con su respectivo CRUD de tareas Tech Stack  Client:  Reactjs Back: mongodb, express, nodejs y babel API: https://github.com/miltondw/rest-api-tasks/",
    id: 4,
  },
  {
    img: "/assets/portfolio/tweetPlat.png",
    git: "https://github.com/miltondw/tweet-platz",
    demo: "https://miltondw.github.io/tweet-platz/",
    title: "Tweet Platz",
    info: "Platzi Challenge Clone Twitter TweetPlatz ech Stack  Client: REACTJS,Sass API: https://api.breakingbadquotes.xyz/v1/quotes",
    id: 4,
  },
  {
    img: "/assets/portfolio/pinterest.png",
    git: "https://github.com/miltondw/pinteres-platz",
    demo: "https://miltondw.github.io/pinteres-platz/",
    title: "Pinteres Platz",
    info: "Platzi Challenge Clone Pinterest básico Tech Stack  Client: REACTJS,TailwindCSS API:https://picsum.photos/v2/list?limit=8",
    id: 4,
  },
];



