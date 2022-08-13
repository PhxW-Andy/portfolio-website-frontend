// import fontawesome
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

// import utils
import { imageUrlBuilder } from '../utils/imageUrlBuilder'

const Projects = ({ projects }) => {
  const { data } = projects
  console.log(data)
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
                    item.attributes.project_image.data.attributes.url,
                  )}
                  alt=""
                />
              </div>
              <div className="project__content">
                <h4>{item.attributes.title}</h4>
                <p>{item.attributes.description}</p>
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
                      target={btn.download ? '_blank' : ''}
                    >
                      <span className="circle">
                        <span className="arrow"></span>
                      </span>
                      {btn.title}
                      {btn.title == 'GIT' ? (
                        <FaGithub className="icon" />
                      ) : (
                        <FaExternalLinkAlt className="icon" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
