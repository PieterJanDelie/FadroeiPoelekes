import React from "react";
import "./Partners.css";
import sportkafeeImg from "../../assets/Images/sportkafe.avif";
import consobeImg from "../../assets/Images/Consobe.png";
import buyckVisualsImg from "../../assets/Images/BuyckVisuals.png";

const Partners = () => {
  const partners = [
    {
      name: "Sportkafee Desselgem",
      image: sportkafeeImg,
      website: "https://sportkaffeedesselgem.be/",
    },
    {
      name: "BuyckVisuals",
      image: buyckVisualsImg,
      website: null,
    },
    {
      name: "Consobe",
      image: consobeImg,
      website: null,
    },
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-header">
          <h2 className="section-title">
            Onze <span className="highlight">Partners</span>
          </h2>
        </div>

        <div className="partners-row">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item">
              {partner.website ? (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-link"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="partner-logo"
                  />
                </a>
              ) : (
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="partner-logo"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
