import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Masonry from "react-masonry-css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
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
import consobe from "../../assets/Images/Consobe.png";
import buyckVisuals from "../../assets/Images/BuyckVisuals.png";
import sportkafe from "../../assets/Images/sportkafe.avif";

const PhotoGallery = () => {
  const [searchParams] = useSearchParams();
  const [selectedTournament, setSelectedTournament] = useState("all");
  const [showGallery, setShowGallery] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // Check for tournament parameter in URL
  useEffect(() => {
    const tournamentParam = searchParams.get("tournament");
    if (tournamentParam) {
      setSelectedTournament(tournamentParam);
    }
  }, [searchParams]);

  const partners = [
    {
      name: "Consobe",
      logo: consobe,
      url: null,
      type: "partner",
    },
    {
      name: "Buyck Visuals",
      logo: buyckVisuals,
      url: null,
      type: "partner",
    },
    {
      name: "Sportkafé Desselgem",
      logo: sportkafe,
      url: "https://sportkaffeedesselgem.be/",
      type: "partner",
    },
  ];

  const tournaments = [
    {
      id: "zomer-2024",
      name: "Zomertornooi 2024",
      location: "Sportpark Waregem",
      date: "Juli 2024",
      photos: [
        { src: teamPhoto, alt: "Team foto Zomertornooi 2024", type: "photo" },
        { src: zulteTifoImg, alt: "Sfeerbeeld Zomertornooi", type: "photo" },
        { src: gillesImg, alt: "Gilles in actie", type: "photo" },
        { src: wannesImg, alt: "Wannes verdedigt", type: "photo" },
      ],
    },
    {
      id: "lente-2024",
      name: "Lentetornooi 2024",
      location: "Sportcomplex Deinze",
      date: "April 2024",
      photos: [
        { src: krijnImg, alt: "Krijn in het middenveld", type: "photo" },
        { src: pieterJanImg, alt: "Pieter-Jan tackelt", type: "photo" },
        { src: robinImg, alt: "Robin dribbelt", type: "photo" },
        { src: heroImg, alt: "Teamviering", type: "photo" },
      ],
    },
    {
      id: "winter-2023",
      name: "Wintertornooi 2023/24",
      location: "Indoor Sporthal Gent",
      date: "December 2023",
      photos: [
        { src: larsImg, alt: "Lars scoort", type: "photo" },
        { src: runeImg, alt: "Rune in duel", type: "photo" },
        { src: teamPhoto, alt: "Team huddle", type: "photo" },
        { src: zulteTifoImg, alt: "Supporters", type: "photo" },
      ],
    },
    {
      id: "herfst-2023",
      name: "Herfsttoernooi 2023",
      location: "Voetbalcomplex Kortrijk",
      date: "Oktober 2023",
      photos: [
        { src: gillesImg, alt: "Gilles dirigeert", type: "photo" },
        { src: heroImg, alt: "Warming-up", type: "photo" },
        { src: wannesImg, alt: "Wannes kopt", type: "photo" },
        { src: krijnImg, alt: "Krijn passt", type: "photo" },
      ],
    },
  ];

  const allPhotos = tournaments.flatMap((tournament) =>
    tournament.photos.map((photo) => ({
      ...photo,
      tournament: tournament.name,
    }))
  );

  const filteredPhotos =
    selectedTournament === "all"
      ? allPhotos
      : tournaments.find((t) => t.id === selectedTournament)?.photos || [];

  // Mix partners randomly between photos
  const mixPhotosWithPartners = (photos) => {
    if (photos.length === 0) return [];

    const mixed = [...photos];
    const partnersToInsert = [...partners];

    // Insert partners at random positions (but not at the very beginning)
    partnersToInsert.forEach((partner, index) => {
      const minPosition = Math.max(2, index * 3);
      const maxPosition = Math.min(mixed.length, minPosition + 4);
      const randomPosition =
        Math.floor(Math.random() * (maxPosition - minPosition)) + minPosition;
      mixed.splice(randomPosition, 0, partner);
    });

    return mixed;
  };

  const mixedContent = mixPhotosWithPartners(filteredPhotos);

  // Convert to react-image-gallery format (only photos for the lightbox)
  const galleryImages = filteredPhotos.map((photo) => ({
    original: photo.src,
    thumbnail: photo.src,
  }));

  const currentTournament = tournaments.find(
    (t) => t.id === selectedTournament
  );

  const handleItemClick = (item, index) => {
    if (item.type === "photo") {
      // Find the photo index in the filtered photos array (excluding partners)
      const photoIndex = filteredPhotos.findIndex(
        (photo) => photo.src === item.src
      );
      setStartIndex(photoIndex);
      setShowGallery(true);
    } else if (item.type === "partner") {
      if (item.url) {
        window.open(item.url, "_blank");
      }
    }
  };

  // Masonry breakpoints
  const breakpointColumns = {
    default: 4,
    1200: 3,
    768: 2,
    480: 1,
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
                {tournaments.map((tournament) => (
                  <button
                    key={tournament.id}
                    className={
                      selectedTournament === tournament.id ? "active" : ""
                    }
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
                  <span className="location">
                    📍 {currentTournament.location}
                  </span>
                  <span className="date">📅 {currentTournament.date}</span>
                </div>
              </div>
            )}

            <div className="masonry-gallery-container">
              {mixedContent.length > 0 ? (
                <Masonry
                  breakpointCols={breakpointColumns}
                  className="masonry-grid"
                  columnClassName="masonry-grid-column"
                >
                  {mixedContent.map((item, index) => (
                    <div
                      key={`${item.type}-${index}`}
                      className={`masonry-item ${
                        item.type === "partner" ? "partner-item" : "photo-item"
                      }`}
                      onClick={() => handleItemClick(item, index)}
                    >
                      <img
                        src={item.type === "photo" ? item.src : item.logo}
                        alt={item.type === "photo" ? item.alt : item.name}
                        loading="lazy"
                      />
                      {item.type === "partner" && (
                        <div className="partner-overlay">
                          <span className="partner-text">Partner</span>
                        </div>
                      )}
                    </div>
                  ))}
                </Masonry>
              ) : (
                <div className="no-photos">
                  <p>Geen foto's gevonden voor dit tornooi.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {showGallery && (
          <div className="lightbox-overlay">
            <div className="lightbox-container">
              <button
                className="lightbox-close"
                onClick={() => setShowGallery(false)}
              >
                &times;
              </button>
              <ImageGallery
                items={galleryImages}
                startIndex={startIndex}
                showThumbnails={true}
                showPlayButton={false}
                showFullscreenButton={true}
                showNav={true}
                onScreenChange={() => {}}
                onSlide={(index) => setStartIndex(index)}
              />
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default PhotoGallery;
