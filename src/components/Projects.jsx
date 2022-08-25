//import components
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projekte</h2>
        <p className="intro-text">
          Die aufgelisteten Projekte habe ich alle privat umgesetzt, um bereits
          erlerntes weiter zu verinnerlichen und um neue Technologien zu
          erlernen.
        </p>
        <div className="projects__wrapper">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

const projects = [
  {
    img: "todo-app.png",
    title: "Todo App",
    desc: `Eine App um einzelne Todo's anzulegen. Es kann nach **all**, **active** und **completed** gefiltert werden. 
           Alle erledigten Todo's können zusammen gelöscht werden. Todo's werden im LocalStorage gespeichert.`,
    techs: ["React", "HTML", "SCSS"],
    buttons: [
      {
        title: "GIT",
        link: "https://github.com/PhxW-Andy/reactjs-todo-app",
      },
      {
        title: "Webseite",
        link: "https://reactjs-todo.vercel.app/",
      },
    ],
  },
  {
    img: "sunnyside.png",
    title: "Sunnyside Landingpage",
    desc: `Eine einfache Landingpage, wo die Umsetzung des Layouts im Vordergrund stand. Hier ging es mir darum, bereits erlerntes anzuwenden und weiter zu verinnerlichen. 
           Das ganze ist eine Challenge, die auf [Frontendmentor.io](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef) zu finden ist.`,
    techs: ["HTML", "SCSS", "Vanilla JS"],
    buttons: [
      {
        title: "GIT",
        link: "https://github.com/PhxW-Andy/html-scss-sunnyside-landingpage",
      },
      {
        title: "Webseite",
        link: "https://sunnyside-landingpage-html-scss.vercel.app/",
      },
    ],
  },
  {
    img: "pokemon.png",
    title: "Pokédex App",
    desc: `Eine Pokédex App der ersten 151 Pokémon. Über das Input-Field können die Pokémon nach dem Namen gefiltert werden. Jedes einzelne Pokémon besitzt eine Detailseite, mit weiteren Informationen.`,
    techs: ["React", "API", "HTML", "SCSS"],
    buttons: [
      {
        title: "GIT",
        link: "https://github.com/PhxW-Andy/pokedex",
      },
      {
        title: "Webseite",
        link: "https://my-pokedex-app.vercel.app/pokemon",
      },
    ],
  },
  {
    img: "country.png",
    title: "Country App",
    desc: `Eine App über alle Länder der Welt. Man kann nach Name und Region Filtern. Für jedes Land gibt es eine Dateilseite mit weiteren Informationen.
           Das ganze ist eine Challenge, die auf [Frontendmentor.io](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) zu finden ist.`,
    techs: ["Next JS", "API", "HTML", "CSS Modules"],
    buttons: [
      {
        title: "GIT",
        link: "https://github.com/PhxW-Andy/countries-app-nextjs",
      },
      {
        title: "Webseite",
        link: "https://c0untries-nextjs.vercel.app/",
      },
    ],
  },
];
