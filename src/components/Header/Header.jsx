import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Images/Fadroei.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`header ${
        isHomePage && !isScrolled ? "header-transparent" : "header-solid"
      }`}
    >
      <div className="header-container">
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <img src={logo} alt="Fadroei Poelekes" className="logo-img" />
          <span className="team-name">Fadroei Poelekes</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>
            Ons Team
          </Link>
          <Link to="/tournaments" className="nav-link" onClick={closeMenu}>
            Tornooien
          </Link>
          <Link to="/gallery" className="nav-link" onClick={closeMenu}>
            Gallerij
          </Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        <button
          className={`menu-toggle ${isMenuOpen ? "menu-open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
