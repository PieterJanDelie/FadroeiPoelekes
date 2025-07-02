import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./About.css";
import teamPhoto from "../../assets/Images/ploegfoto.jpg";
import zulteTifoImg from "../../assets/Images/zulte-waregem-tifo.webp";
import gillesImg from "../../assets/Images/Gilles.jpg";
import wannesImg from "../../assets/Images/Wannes.jpg";
import krijnImg from "../../assets/Images/Krijn.jpg";
import pieterJanImg from "../../assets/Images/Pieter-Jan.jpg";
import larsImg from "../../assets/Images/Lars.jpg";
import robinImg from "../../assets/Images/Robin.jpg";
import runeImg from "../../assets/Images/Rune.jpg";

const About = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const teamMembers = [
    {
      name: "Gilles",
      lastName: "Verhelst",
      nickname: "Gille",
      number: 1,
      position: "Keeper (c)",
      bio: "Onze onverstoorbaarbare laatste linie en natuurlijke leider. Met zijn kalmte en overzicht houdt hij het team bij elkaar.",
      quote: "Leiderschap begint tussen de palen!",
      transferValue: "€85M",
      image: gillesImg,
    },
    {
      name: "Pieter-Jan",
      lastName: "Delie",
      nickname: "PJ",
      number: 3,
      position: "CV",
      bio: "Solide verdediger met een uitstekende tackle. Zijn defensieve instinct en positiespel houden de tegenstander op afstand.",
      quote: "Verdedigen is een teameffort",
      transferValue: "€45M",
      image: pieterJanImg,
    },
    {
      name: "Wannes",
      lastName: "Vandeweghe",
      nickname: "Wanne",
      number: 4,
      position: "CV",
      bio: "Veelzijdige verdediger die ook graag mee opkomt in de aanval. Zijn snelheid en overzicht maken hem onmisbaar.",
      quote: "Aanvallen begint bij de verdediging",
      transferValue: "€52M",
      image: wannesImg,
    },
    {
      name: "Krijn",
      lastName: "Vanommeslaeghe",
      nickname: "Krijntje",
      number: 6,
      position: "CM",
      bio: "De verbindingsschakel tussen verdediging en aanval. Zijn passing en spelinterpretatie zijn van onschatbare waarde.",
      quote: "Het spel begint bij het middenveld",
      transferValue: "€78M",
      image: krijnImg,
    },
    {
      name: "Rune",
      lastName: "Messiaen",
      nickname: "Ruuntje",
      number: 8,
      position: "CM",
      bio: "Dynamische middenvelder met een onvermoeibare motor. Zorgt voor de balans tussen aanval en verdediging.",
      quote: "Elke bal is een nieuwe kans",
      transferValue: "€63M",
      image: runeImg,
    },
    {
      name: "Robin",
      lastName: "Demeestere",
      nickname: "Robbe",
      number: 7,
      position: "RB",
      bio: "Snelle buitenspeler met gevaarlijke voorzetten. Zijn dribbles en crosses creëren kansen voor het team.",
      quote: "Snelheid opent alle deuren",
      transferValue: "€71M",
      image: robinImg,
    },
    {
      name: "Lars",
      lastName: "Buyck",
      nickname: "Larsie",
      number: 10,
      position: "SP/Coach",
      bio: "De tactische meesterbrein en doelgerichte afmaker. Combineert zijn kennis van het spel met een neus voor goals.",
      quote: "Voetbal is schaken met je voeten",
      transferValue: "€95M",
      image: larsImg,
    },
  ];

  const openPlayerModal = (player) => {
    setSelectedPlayer(player);
  };

  const closePlayerModal = () => {
    setSelectedPlayer(null);
  };

  return (
    <DefaultLayout>
      <div className="about-page">
        <section className="about-hero">
          <div className="hero-background">
            <img
              src={zulteTifoImg}
              alt="Team Fadroei Poelekes"
              className="hero-bg-image"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-text">Est. 2020</span>
              </div>
              <h1>Over Fadroei Poelekes</h1>
              <p className="hero-subtitle">
                Zeven vrienden, één droom: samen sporten en plezier hebben
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">7</span>
                  <span className="stat-label">Spelers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">€489M</span>
                  <span className="stat-label">Totale Waarde</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Jaren Actief</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-history">
          <div className="container">
            <div className="history-grid">
              <div className="history-content">
                <h2>Onze Geschiedenis</h2>
                <p>
                  Het begon allemaal in 2020 toen zeven vrienden besloten om hun
                  liefde voor sport serieuzer aan te pakken. Wat begon als
                  casual weekend voetbal groeide uit tot deelname aan lokale
                  tornooien.
                </p>
                <p>
                  In 2021 ontwierpen we ons eigen logo en lieten we
                  professionele jerseys maken. Sindsdien hebben we deelgenomen
                  aan meer dan 15 verschillende sporttornooien, waarbij we niet
                  alleen voetbal spelen, maar ook volleybal, basketball en
                  andere sporten.
                </p>
                <p>
                  Onze naam "Fadroei Poelekes" weerspiegelt onze playful en
                  vriendelijke houding. We nemen sport serieus, maar vergeten
                  nooit om plezier te hebben en respect te tonen voor onze
                  tegenstanders.
                </p>
              </div>
              <div className="history-image">
                <img src={teamPhoto} alt="Team Fadroei Poelekes" />
              </div>
            </div>
          </div>
        </section>

        <section className="team-members">
          <div className="container">
            <h2 className="section-title">Leer ons team kennen</h2>
            <div className="members-grid">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="member-card"
                  onClick={() => openPlayerModal(member)}
                >
                  <div className="member-photo-container">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="member-photo"
                    />
                    <div className="member-overlay">
                      <div className="member-number">#{member.number}</div>
                      <div className="member-info-overlay">
                        <h3 className="member-name">{member.lastName}</h3>
                        <span className="member-firstname">{member.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Player Modal */}
        {selectedPlayer && (
          <div className="player-modal-overlay" onClick={closePlayerModal}>
            <div className="player-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closePlayerModal}>
                ×
              </button>
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-photo-container">
                    <img
                      src={selectedPlayer.image}
                      alt={selectedPlayer.name}
                      className="modal-photo"
                    />
                  </div>
                  <div className="modal-info">
                    <div className="modal-number">#{selectedPlayer.number}</div>
                    <h3 className="modal-name">
                      {selectedPlayer.lastName}
                      <span className="modal-firstname">
                        {selectedPlayer.name}
                      </span>
                    </h3>
                    <span className="modal-position">
                      {selectedPlayer.position}
                    </span>
                    <div className="modal-transfer-value">
                      {selectedPlayer.transferValue}
                    </div>
                  </div>
                </div>
                <div className="modal-details">
                  <p className="modal-bio">{selectedPlayer.bio}</p>
                  <blockquote className="modal-quote">
                    "{selectedPlayer.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default About;
