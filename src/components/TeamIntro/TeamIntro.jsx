import React from "react";
import { Link } from "react-router-dom";
import "./TeamIntro.css";
import teamPhoto from "../../assets/Images/ploegfoto.jpg";

const TeamIntro = () => {
  const achievements = [
    { icon: "🏆", title: "Lokaal Kampioen", description: "Voetbal Zomertoernooi 2024" },
    { icon: "🥈", title: "Tweede Plaats", description: "Volleybal League 2024" },
    { icon: "🎖️", title: "Goe geprobeerd", description: "Basketball Toernooi 2023" },
    { icon: "⚽", title: "0+ Tornooien", description: "Sinds onze oprichting" },
  ];

  return (
    <section className="team-intro">
      <div className="container">
        <div className="intro-grid">
          <div className="intro-content">
            <h2 className="section-title">
              Wie zijn <span className="highlight">Fadroei Poelekes</span>?
            </h2>
            
            <p className="intro-text">
              Wij zijn geen gewone sportclub. Wij zijn zeven vrienden die hun liefde 
              voor sport hebben omgezet in een echte passie. Van voetbal tot volleybal, 
              van basketball tot andere sporten - wij doen het allemaal met dezelfde 
              toewijding en vriendschap.
            </p>
            
            <p className="intro-text">
              Onze reis begon als een groep vrienden die graag samen sportten. 
              Nu hebben we onze eigen jerseys, logo, en een indrukwekkende lijst 
              van tornooien waar we aan deelgenomen hebben. We combineren competitieve 
              geest met plezier en respect voor onze tegenstanders.
            </p>
            
            <div className="team-values">
              <div className="value">
                <span className="value-icon">🤝</span>
                <span className="value-text">Vriendschap</span>
              </div>
              <div className="value">
                <span className="value-icon">💪</span>
                <span className="value-text">Teamwork</span>
              </div>
              <div className="value">
                <span className="value-icon">🎯</span>
                <span className="value-text">Passie</span>
              </div>
            </div>
            
            <Link to="/about" className="learn-more-btn">
              Leer het team kennen
            </Link>
          </div>
          
          <div className="intro-image">
            <img src={teamPhoto} alt="Fadroei Poelekes Team" className="team-photo" />
            <div className="image-decoration"></div>
          </div>
        </div>
        
        <div className="achievements-section">
          <h3 className="achievements-title">Onze Prestaties</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <span className="achievement-icon">{achievement.icon}</span>
                <h4 className="achievement-title">{achievement.title}</h4>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntro;
