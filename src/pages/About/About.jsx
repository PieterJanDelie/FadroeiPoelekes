import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./About.css";
import teamPhoto from "../../assets/Images/ploegfoto.jpg";

const About = () => {
  const teamMembers = [
    { name: "Krijn", position: "Keeper", bio: "De stabiele kracht tussen de palen", quote: "Een clean sheet is beter dan een goal!" },
    { name: "Robin", position: "Verdediger", bio: "Onze muur in de verdediging", quote: "Ze passeren niet!" },
    { name: "Lars", position: "Middenvelder", bio: "De verbindingsman van het team", quote: "Het spel draait om passing" },
    { name: "Pieter-Jan", position: "Aanvaller", bio: "Scherp voor goal en vol creativiteit", quote: "Goals maken teams gelukkig" },
    { name: "Rune", position: "Verdediger", bio: "Snelheid en precisie in de verdediging", quote: "Verdedigen is een kunst" },
    { name: "Wannes", position: "Middenvelder", bio: "De motor van het middenveld", quote: "Hard werken betaalt zich uit" },
    { name: "Gilles", position: "Aanvaller", bio: "Gevaarlijk in de zestien", quote: "Elk schot is een kans" }
  ];

  return (
    <DefaultLayout>
      <div className="about-page">
        <section className="about-hero">
          <div className="container">
            <h1>Over Fadroei Poelekes</h1>
            <p className="hero-subtitle">
              Zeven vrienden, één droom: samen sporten en plezier hebben
            </p>
          </div>
        </section>

        <section className="team-history">
          <div className="container">
            <div className="history-grid">
              <div className="history-content">
                <h2>Onze Geschiedenis</h2>
                <p>
                  Het begon allemaal in 2020 toen zeven vrienden besloten om hun liefde 
                  voor sport serieuzer aan te pakken. Wat begon als casual weekend voetbal 
                  groeide uit tot deelname aan lokale tornooien.
                </p>
                <p>
                  In 2021 ontwierpen we ons eigen logo en lieten we professionele jerseys maken. 
                  Sindsdien hebben we deelgenomen aan meer dan 15 verschillende sporttornooien, 
                  waarbij we niet alleen voetbal spelen, maar ook volleybal, basketball en andere sporten.
                </p>
                <p>
                  Onze naam "Fadroei Poelekes" weerspiegelt onze playful en vriendelijke houding. 
                  We nemen sport serieus, maar vergeten nooit om plezier te hebben en respect 
                  te tonen voor onze tegenstanders.
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
                <div key={index} className="member-card">
                  <div className="member-avatar">
                    <span className="avatar-text">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="member-name">{member.name}</h3>
                  <span className="member-position">{member.position}</span>
                  <p className="member-bio">{member.bio}</p>
                  <blockquote className="member-quote">"{member.quote}"</blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="team-values-detailed">
          <div className="container">
            <h2 className="section-title">Onze Waarden</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Vriendschap</h3>
                <p>
                  We zijn eerst vrienden, dan teamgenoten. Onze band gaat verder 
                  dan het sportveld en dat maakt ons sterk.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">⚽</div>
                <h3>Passie</h3>
                <p>
                  Sport is onze passie. We trainen hard, spelen met hart en 
                  geven altijd 100% van onszelf.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🏆</div>
                <h3>Respect</h3>
                <p>
                  Respect voor tegenstanders, scheidsrechters en het spel zelf 
                  staat centraal in alles wat we doen.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Verbetering</h3>
                <p>
                  We streven er altijd naar om beter te worden, zowel individueel 
                  als team. Elke wedstrijd is een leermoment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default About;
