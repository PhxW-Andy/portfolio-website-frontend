// import fontawesome
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import ReactMarkdown from "react-markdown";

const ProjectCard = ({ project }) => {
  const { img, title, desc, techs, buttons } = project;

  const imgUrl = new URL(`../assets/images/projects/${img}`, import.meta.url)
    .href;
  return (
    <div className="project__item">
      <div className="project__image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="project__content">
        <h3>{title}</h3>
        <ReactMarkdown linkTarget="_blank" children={desc}></ReactMarkdown>
        <div className="bottom">
          <ul className="techs__list">
            {techs.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <div className="btn-wrapper">
            {buttons.map((btn, index) => (
              <a key={index} className="btn" href={btn.link} target="_blank">
                <span className="circle">
                  <span className="arrow"></span>
                </span>
                {btn.title}
                {btn.title == "GIT" ? (
                  <FaGithub className="icon" />
                ) : (
                  <FaExternalLinkAlt className="icon" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
