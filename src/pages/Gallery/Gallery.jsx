import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./Gallery.css";
import teamPhoto from "../../assets/Images/ploegfoto.jpg";
import heroImg from "../../assets/Images/hero.jpg";
import zulteTifoImg from "../../assets/Images/zulte-waregem-tifo.webp";
import gillesImg from "../../assets/Images/Gilles.jpg";
import wannesImg from "../../assets/Images/Wannes.jpg";
import krijnImg from "../../assets/Images/Krijn.jpg";
import pieterJanImg from "../../assets/Images/Pieter-Jan.jpg";
import larsImg from "../../assets/Images/Lars.jpg";
import robinImg from "../../assets/Images/Robin.jpg";
import runeImg from "../../assets/Images/Rune.jpg";

const Gallery = () => {
  const [searchParams] = useSearchParams();
  const [selectedTournament, setSelectedTournament] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  // Check for tournament parameter in URL
  useEffect(() => {
    const tournamentParam = searchParams.get('tournament');
    if (tournamentParam) {
      setSelectedTournament(tournamentParam);
    }
  }, [searchParams]);

  const tournaments = [
    {
      id: "zomer-2024",
      name: "Zomertornooi 2024",
      location: "Sportpark Waregem",
      date: "Juli 2024",
      photos: [
        { src: teamPhoto, alt: "Team foto Zomertornooi 2024", caption: "Volledige team opstelling" },
        { src: zulteTifoImg, alt: "Sfeerbeeld Zomertornooi", caption: "Fantastische sfeer op de tribune" },
        { src: gillesImg, alt: "Gilles in actie", caption: "Gilles maakt een belangrijke save" },
        { src: wannesImg, alt: "Wannes verdedigt", caption: "Sterke verdediging van Wannes" }
      ]
    },
    {
      id: "lente-2024",
      name: "Lentetornooi 2024",
      location: "Sportcomplex Deinze",
      date: "April 2024",
      photos: [
        { src: krijnImg, alt: "Krijn in het middenveld", caption: "Krijn controleert het middenveld" },
        { src: pieterJanImg, alt: "Pieter-Jan tackelt", caption: "Perfecte sliding van PJ" },
        { src: robinImg, alt: "Robin dribbelt", caption: "Robin in volle actie op de flank" },
        { src: heroImg, alt: "Teamviering", caption: "Feest na een belangrijke overwinning" }
      ]
    },
    {
      id: "winter-2023",
      name: "Wintertornooi 2023/24",
      location: "Indoor Sporthal Gent",
      date: "December 2023",
      photos: [
        { src: larsImg, alt: "Lars scoort", caption: "Lars met een prachtige finish" },
        { src: runeImg, alt: "Rune in duel", caption: "Rune wint het middenveldduel" },
        { src: teamPhoto, alt: "Team huddle", caption: "Tactische bespreking tijdens de pauze" },
        { src: zulteTifoImg, alt: "Supporters", caption: "Onze trouwe supporters" }
      ]
    },
    {
      id: "herfst-2023",
      name: "Herfsttoernooi 2023",
      location: "Voetbalcomplex Kortrijk",
      date: "Oktober 2023",
      photos: [
        { src: gillesImg, alt: "Gilles dirigeert", caption: "Kapitein Gilles geeft instructies" },
        { src: heroImg, alt: "Warming-up", caption: "Warming-up voor de finale" },
        { src: wannesImg, alt: "Wannes kopt", caption: "Kopduel gewonnen door Wannes" },
        { src: krijnImg, alt: "Krijn passt", caption: "Prachtige pass van Krijn" }
      ]
    }
  ];

  const allPhotos = tournaments.flatMap(tournament => 
    tournament.photos.map(photo => ({
      ...photo,
      tournament: tournament.name
    }))
  );

  const filteredPhotos = selectedTournament === "all" 
    ? allPhotos 
    : tournaments.find(t => t.id === selectedTournament)?.photos || [];

  const currentTournament = tournaments.find(t => t.id === selectedTournament);

  const openModal = (photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <DefaultLayout>
      <div className="gallery-page">
        <section className="gallery-hero">
          <div className="hero-background">
            <img src={heroImg} alt="Gallery Hero" className="hero-bg-image" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1>Foto Galerij</h1>
              <p className="hero-subtitle">
                Onze mooiste momenten vastgelegd tijdens verschillende tornooien
              </p>
            </div>
          </div>
        </section>

        <section className="gallery-content">
          <div className="container">
            <div className="gallery-filters">
              <h2>Selecteer Tornooi</h2>
              <div className="filter-buttons">
                <button 
                  className={selectedTournament === "all" ? "active" : ""}
                  onClick={() => setSelectedTournament("all")}
                >
                  Alle Foto's
                </button>
                {tournaments.map(tournament => (
                  <button
                    key={tournament.id}
                    className={selectedTournament === tournament.id ? "active" : ""}
                    onClick={() => setSelectedTournament(tournament.id)}
                  >
                    {tournament.name}
                  </button>
                ))}
              </div>
            </div>

            {selectedTournament !== "all" && currentTournament && (
              <div className="tournament-info">
                <h3>{currentTournament.name}</h3>
                <div className="tournament-details">
                  <span className="location">📍 {currentTournament.location}</span>
                  <span className="date">📅 {currentTournament.date}</span>
                </div>
              </div>
            )}

            <div className="photo-grid">
              {filteredPhotos.map((photo, index) => (
                <div key={index} className="photo-item" onClick={() => openModal(photo)}>
                  <img src={photo.src} alt={photo.alt} />
                  <div className="photo-overlay">
                    <div className="photo-caption">
                      <h4>{photo.caption}</h4>
                      {selectedTournament === "all" && photo.tournament && (
                        <p className="photo-tournament">{photo.tournament}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPhotos.length === 0 && (
              <div className="no-photos">
                <p>Geen foto's gevonden voor dit tornooi.</p>
              </div>
            )}
          </div>
        </section>

        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>&times;</button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <div className="modal-caption">
                <h3>{selectedImage.caption}</h3>
                {selectedImage.tournament && (
                  <p className="modal-tournament">{selectedImage.tournament}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Gallery;
