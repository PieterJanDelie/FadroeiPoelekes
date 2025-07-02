import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Images/Fadroei.png";

const Header = ({ transparentHeader = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if we should show transparent header
  const shouldBeTransparent =
    transparentHeader ||
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/about"||
    location.pathname === "/tournaments"||
    location.pathname === "/gallery"||
    location.pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    if (shouldBeTransparent) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (shouldBeTransparent) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [shouldBeTransparent]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`header ${
        shouldBeTransparent && !isScrolled
          ? "header-transparent"
          : "header-solid"
      }`}
    >
      <div className="header-container">
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <img src={logo} alt="Fadroei Poelekes" className="logo-img" />
          <span className="team-name">Fadroei <span className="highlight">Poelekes</span></span>
        </Link>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Ons Team
          </Link>
          <Link
            to="/tournaments"
            className={`nav-link ${
              location.pathname === "/tournaments" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Toernooien
          </Link>
          <Link
            to="/gallery"
            className={`nav-link ${
              location.pathname === "/gallery" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Gallerij
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
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
