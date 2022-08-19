import HeaderImg from "../assets/images/developer.svg";

// import fontawesome
import { FaFileDownload } from "react-icons/fa";

const Header = () => {
  const pdf = new URL("../assets/uploads/lebenslauf.pdf", import.meta.url).href;

  return (
    <header id="home">
      <div className="container">
        <div className="content">
          <span className="title">
            &gt;&gt; Junior Frontend Entwickler &lt;&lt;
          </span>
          <h1>André Lebioda</h1>
          <p>
            Leidenschaftlicher Entwickler, mit dem interesse neue Technologien
            zu erlernen und sich immer wieder neuen Herausforderungen zu
            stellen.
          </p>
          <div className="btn-wrapper">
            <a className="btn" href="#projects">
              <span className="circle">
                <span className="arrow"></span>
              </span>
              Projekte
            </a>
            <a className="btn download" href={pdf} target="_blank">
              <span className="circle">
                <span className="arrow"></span>
              </span>
              Download CV
              <FaFileDownload className="down-icon" />
            </a>
          </div>
        </div>
        <div className="image">
          <img src={HeaderImg} alt="Developer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
