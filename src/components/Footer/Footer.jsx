import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/Images/Fadroei.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="Fadroei Poelekes Logo" className="footer-logo-img" />
            <span className="footer-team-name">Fadroei Poelekes</span>
          </div>
          <p className="footer-description">
            7 vrienden, 1 passie. Elkaar kloten.
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Ons team</Link></li>
            <li><Link to="/tournaments">Toernooien</Link></li>
            <li><Link to="/gallery">Gallerij</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Volg onze avonturen</h3>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">📘</a>
            <a href="#" className="social-link" aria-label="Instagram">📷</a>
            <a href="#" className="social-link" aria-label="Twitter">🐦</a>
          </div>
          <p className="footer-contact">
            📧 contact@fadroeipoelekes.com<br />
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Fadroei Poelekes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
