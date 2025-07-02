import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./Tournaments.css";
import heroImg from "../../assets/Images/hero.jpg";
import zulteTifoImg from "../../assets/Images/zulte-waregem-tifo.webp";
import teamPhoto from "../../assets/Images/ploegfoto.jpg";

const Tournaments = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all"); // "all", "upcoming", "past"

  const upcomingTournaments = [
    {
      id: "zomer-2025",
      name: "Zomertoernooi 2025",
      date: "15-16 Juli 2025",
      location: "Sportpark Waregem",
      description:
        "Het jaarlijkse zomertoernooi met teams uit heel Vlaanderen. Een weekend vol voetbal, plezier en gezelligheid.",
      type: "Voetbal",
      teams: 16,
      status: "upcoming",
      prize: "€500 voor de winnaar",
      image: heroImg,
    },
    {
      id: "beach-soccer-2025",
      name: "Beach Soccer Festival",
      date: "5-6 Augustus 2025",
      location: "Blankenberge Beach",
      description:
        "Voetbal op het strand! Een unieke ervaring met kleinere teams en veel spektakel.",
      type: "Beach Soccer",
      teams: 12,
      status: "upcoming",
      prize: "Tropee + strandvakantie",
      image: zulteTifoImg,
    },
    {
      id: "herfst-2025",
      name: "Herfsttoernooi 2025",
      date: "12-13 Oktober 2025",
      location: "Voetbalcomplex Kortrijk",
      description:
        "Traditioneel herfsttoernooi waar we vorig jaar de finale hebben gehaald!",
      type: "Voetbal",
      teams: 20,
      status: "upcoming",
      prize: "€750 voor de winnaar",
      image: teamPhoto,
    },
  ];

  const pastTournaments = [
    {
      id: "zomer-2024",
      name: "Zomertoernooi 2024",
      date: "Juli 2024",
      location: "Sportpark Waregem",
      description:
        "Fantastisch toernooi waar we de halve finale hebben bereikt!",
      type: "Voetbal",
      result: "Halve Finale",
      status: "completed",
      highlights: "Beste verdediging van het toernooi",
      image: teamPhoto,
      galleryId: "zomer-2024",
    },
    {
      id: "lente-2024",
      name: "Lentetoernooi 2024",
      date: "April 2024",
      location: "Sportcomplex Deinze",
      description:
        "Geweldig seizoensopener met veel nieuwe gezichten in het team.",
      type: "Voetbal",
      result: "Kwartfinale",
      status: "completed",
      highlights: "3 clean sheets op rij",
      image: heroImg,
      galleryId: "lente-2024",
    },
    {
      id: "winter-2023",
      name: "Wintertoernooi 2023/24",
      date: "December 2023",
      location: "Indoor Sporthal Gent",
      description:
        "Indoor voetbal in de wintermaanden. Snelle wedstrijden en veel goals!",
      type: "Indoor Voetbal",
      result: "2de Plaats",
      status: "completed",
      highlights: "Topscorer Lars met 8 goals",
      image: zulteTifoImg,
      galleryId: "winter-2023",
    },
    {
      id: "herfst-2023",
      name: "Herfsttoernooi 2023",
      date: "Oktober 2023",
      location: "Voetbalcomplex Kortrijk",
      description:
        "Ons debuut in dit prestigieuze toernooi. Een ervaring om nooit te vergeten!",
      type: "Voetbal",
      result: "1ste Ronde",
      status: "completed",
      highlights: "Eerste officiële toernooi",
      image: teamPhoto,
      galleryId: "herfst-2023",
    },
  ];

  const allTournaments = [...upcomingTournaments, ...pastTournaments];

  const getFilteredTournaments = () => {
    switch (filter) {
      case "upcoming":
        return upcomingTournaments;
      case "past":
        return pastTournaments;
      default:
        return allTournaments;
    }
  };

  const handleTournamentClick = (tournament) => {
    if (tournament.status === "completed" && tournament.galleryId) {
      // Navigeer naar galerij met pre-selected toernooi
      navigate(`/gallery?tournament=${tournament.galleryId}`);
    }
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    };

    if (dateString.includes("-")) {
      return dateString; // Voor datum ranges zoals "15-16 Juli 2025"
    }

    try {
      return new Date(dateString).toLocaleDateString("nl-NL", options);
    } catch {
      return dateString;
    }
  };

  return (
    <DefaultLayout header={true} transparentHeader={true}>
      <div className="tournaments-page">
        <section className="tournaments-hero">
          <div className="hero-background">
            <img
              src={heroImg}
              alt="Tournaments Hero"
              className="hero-bg-image"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1>Toernooien</h1>
              <p className="hero-subtitle">
                Ontdek waar we aan meedoen en herleef onze beste prestaties
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">
                    {upcomingTournaments.length}
                  </span>
                  <span className="stat-label">Aankomende</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{pastTournaments.length}</span>
                  <span className="stat-label">Voltooid</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">7</span>
                  <span className="stat-label">Totaal Gespeeld</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tournaments-content">
          <div className="container">
            <div className="tournaments-filters">
              <h2>Onze Toernooien</h2>
              <p className="section-subtitle">
                {filter === "upcoming" && "Waar we binnenkort aan meedoen"}
                {filter === "past" &&
                  "Klik op een toernooi om foto's te bekijken"}
                {filter === "all" &&
                  "Alle toernooien waar Fadroei Poelekes aan meedoet"}
              </p>
              <div className="filter-buttons">
                <button
                  className={filter === "all" ? "active" : ""}
                  onClick={() => setFilter("all")}
                >
                  Alle Toernooien
                </button>
                <button
                  className={filter === "upcoming" ? "active" : ""}
                  onClick={() => setFilter("upcoming")}
                >
                  Aankomende ({upcomingTournaments.length})
                </button>
                <button
                  className={filter === "past" ? "active" : ""}
                  onClick={() => setFilter("past")}
                >
                  Afgelopen ({pastTournaments.length})
                </button>
              </div>
            </div>

            <div className="tournaments-grid">
              {getFilteredTournaments().map((tournament) => (
                <div
                  key={tournament.id}
                  className={`tournament-card ${tournament.status} ${
                    tournament.status === "completed" ? "clickable" : ""
                  }`}
                  onClick={() => handleTournamentClick(tournament)}
                >
                  <div className="tournament-image">
                    <img src={tournament.image} alt={tournament.name} />
                    <div className="tournament-type">{tournament.type}</div>

                    {tournament.status === "upcoming" && (
                      <div className="tournament-status upcoming-status">
                        Aankomend
                      </div>
                    )}

                    {tournament.status === "completed" && (
                      <>
                        <div className="tournament-result">
                          {tournament.result}
                        </div>
                        <div className="gallery-indicator">
                          <span className="icon">📸</span>
                          <span>Bekijk Foto's</span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="tournament-content">
                    <h3>{tournament.name}</h3>
                    <div className="tournament-details">
                      <div className="detail-item">
                        <span className="icon">📅</span>
                        <span>{tournament.date}</span>
                      </div>
                      <div className="detail-item">
                        <span className="icon">�</span>
                        <span>{tournament.location}</span>
                      </div>
                      {tournament.status === "upcoming" && (
                        <>
                          <div className="detail-item">
                            <span className="icon">�</span>
                            <span>{tournament.teams} teams</span>
                          </div>
                          <div className="detail-item">
                            <span className="icon">🏆</span>
                            <span>{tournament.prize}</span>
                          </div>
                        </>
                      )}
                      {tournament.status === "completed" && (
                        <div className="detail-item">
                          <span className="icon">⭐</span>
                          <span>{tournament.highlights}</span>
                        </div>
                      )}
                    </div>
                    <p className="tournament-description">
                      {tournament.description}
                    </p>
                    {tournament.status === "upcoming" && (
                      <div className="tournament-actions">
                        <button className="btn-primary">Meer Info</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {getFilteredTournaments().length === 0 && (
              <div className="no-tournaments">
                <p>Geen toernooien gevonden voor dit filter.</p>
              </div>
            )}
          </div>
        </section>

        <section className="tournament-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Wil je ons team in actie zien?</h2>
              <p>
                Kom naar een van onze aankomende toernooien en moedig ons aan!
              </p>
              <div className="cta-buttons">
                <button
                  className="btn-primary"
                  onClick={() => navigate("/contact")}
                >
                  Contact Opnemen
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => navigate("/gallery")}
                >
                  Bekijk Foto's
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Tournaments;
