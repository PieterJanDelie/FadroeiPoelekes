import React from "react";
import { Link } from "react-router-dom";
import "./TeamIntro.css";
import teamPhoto from "../../assets/Images/ploegfoto.jpg";

const TeamIntro = () => {
  return (
    <section className="team-intro">
      <div className="container">
        <div className="intro-grid">
          <div className="intro-content">
            <h2 className="section-title">
              Wie zijn Fadroei <span className="highlight">Poelekes</span>?
            </h2>

            <p className="intro-text">
              Wij zijn geen gewone sportclub. Wij zijn zeven vrienden die hun
              liefde voor sport hebben omgezet in een echte passie. Van voetbal
              tot volleybal, van basketball tot andere sporten - wij doen het
              allemaal met dezelfde toewijding en vriendschap.
            </p>

            <p className="intro-text">
              Onze reis begon als een groep vrienden die graag samen sportten.
              Nu hebben we onze eigen jerseys, logo, en een indrukwekkende lijst
              van toernooien waar we aan deelgenomen hebben. We combineren
              competitieve geest met plezier en respect voor onze tegenstanders.
            </p>

            <Link to="/about" className="learn-more-btn">
              Leer het team kennen
            </Link>
          </div>

          <div className="intro-image">
            <img
              src={teamPhoto}
              alt="Fadroei Poelekes Team"
              className="team-photo"
            />
            <div className="image-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntro;
