import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFoundContent.css";

const PageNotFoundContent = () => {
  return (
    <div className="container">
      <h1 className="errorCode">404</h1>
      <h2 className="message">Oeps! Pagina niet gevonden</h2>
      <p className="description">
        Het lijkt erop dat de pagina die je zoekt niet bestaat of is verplaatst.
      </p>
      <Link to="/" className="homeButton">
        Ga terug naar Home
      </Link>
    </div>
  );
};

export default PageNotFoundContent;
