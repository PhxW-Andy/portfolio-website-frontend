import ReactMarkdown from "react-markdown";

// import fontawesome
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// import utils
import { imageUrlBuilder } from "../utils/imageUrlBuilder";

const Projects = ({ projects }) => {
  const { data } = projects;
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projekte</h2>
        <div className="projects__wrapper">
          {data.map((item, index) => (
            <div key={index} className="project__item">
              <div className="project__image">
                <img
                  src={imageUrlBuilder(
                    item.attributes.project_image.data.attributes.url
                  )}
                  alt=""
                />
              </div>
              <div className="project__content">
                <h3>{item.attributes.title}</h3>
                <ReactMarkdown
                  linkTarget="_blank"
                  children={item.attributes.description}
                ></ReactMarkdown>
                <div className="bottom">
                  <ul className="techs__list">
                    {item.attributes.technologies_used.map((tech, index) => (
                      <li key={index}>{tech.name}</li>
                    ))}
                  </ul>
                  <div className="btn-wrapper">
                    {item.attributes.buttons.map((btn, index) => (
                      <a
                        key={index}
                        className="btn"
                        href={btn.link}
                        target="_blank"
                      >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
