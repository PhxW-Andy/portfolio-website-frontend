import ReactMarkdown from "react-markdown";

// import utils
import { imageUrlBuilder } from "../utils/imageUrlBuilder";

// import components
import Skills from "./Skills";

const AboutMe = ({ about, skills }) => {
  const { data } = about;
  return (
    <section className="about-me" id="about">
      {data.map((data, index) => (
        <div key={index} className="container">
          <h2>Über mich</h2>
          <div className="content-2col">
            <div className="image-wrapper">
              <img
                src={imageUrlBuilder(
                  data.attributes.portrait.data.attributes.url
                )}
                alt=""
              />
            </div>
            <div className="description">
              <ReactMarkdown
                children={data.attributes.description}
              ></ReactMarkdown>
            </div>
          </div>
        </div>
      ))}

      <Skills skills={skills} />
    </section>
  );
};

export default AboutMe;
