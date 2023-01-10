interface Iprojects{
  id:number;
  img:string;
  link:{
      demo:string;
      git:string;
  },
  title:string;
}
export const projects:Iprojects = [
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
    {
      img: "/assets/portfolio/taskApp.png",
      link: {
        git: "https://github.com/miltondw/lazo-social",
        demo: "/project/tasks",
      },
      title: "Tasks App",
      id: 4,
    },
  ];



