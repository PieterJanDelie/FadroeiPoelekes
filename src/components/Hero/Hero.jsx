import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../../assets/Images/hero.jpg";
import logo from "../../assets/Images/Fadroei.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroImage} alt="Sports field" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">

        <h1 className="hero-title">
          Fadroei <span className="highlight">Poelekes</span>
        </h1>

        <p className="hero-subtitle">
          Zeven vrienden, één ploeg. Zeven amateurs die meedoen aan verschillende sporttornooien met bloed zweet en mss een pintje.
        </p>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">0</span>
            <span className="stat-label">Tornooien</span>
          </div>
          <div className="stat">
            <span className="stat-number">0</span>
            <span className="stat-label">Sporten</span>
          </div>
          <div className="stat">
            <span className="stat-number">7</span>
            <span className="stat-label">Vrienden</span>
          </div>
        </div>

        <div className="hero-actions">
          <Link to="/tournaments" className="btn btn-primary">
            Bekijk Tornooien
          </Link>
          <Link to="/about" className="btn btn-primary" style={{ backgroundColor: "#2D5016" }}>
            De poelekes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
