import Portrait from "../assets/images/portrait.png";

// import components
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <div className="container">
        <h2>Über mich</h2>
        <div className="content-2col">
          <div className="image-wrapper">
            <img src={Portrait} alt="Portrait" />
          </div>
          <div className="description">
            <p>
              Ich bin André, 28 und komme aus Essen. Meine Ausbildung als
              Anwendungsentwickler habe ich bei der Havas in Düsseldorf gemacht,
              wo ich im Anschluss 2 Jahre lang als Junior Entwickler tätig war.
            </p>
            <p>
              Ich bin hauptsächlich im Frontend unterwegs und stelle mich stetig
              neuen Herausforderungen, um mich immer weiterzuentwickeln und neue
              Technologie zu erlernen. Aber auch im Backend habe ich mir einen
              gewissen Kenntnisstand angeeignet und versuche mich weiter zu
              verbessern.
            </p>
          </div>
        </div>
      </div>

      <Skills />
    </section>
  );
};

export default AboutMe;
