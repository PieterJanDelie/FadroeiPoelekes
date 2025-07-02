import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./Contact.css";
import heroImg from "../../assets/Images/zulte-waregem-tifo.webp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(event.target);
    formData.append("access_key", "295314b2-1e7b-49d6-922c-2ffac04a7ae2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Web3Forms response:", data); 

      if (data.success) {
        setSubmitStatus("success");
        event.target.reset(); // Reset het formulier
        // Reset ook de state
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        console.log("Error", data);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <DefaultLayout>
      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="hero-background">
            <img src={heroImg} alt="Contact Hero" className="hero-bg-image" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1>Contact</h1>
              <p className="hero-subtitle">
                Heb je vragen of wil je meer weten over FadroeiPoelekes? Neem
                gerust contact met ons op!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="contact-content">
          <div className="container">
            <div className="contact-grid">
              {/* Instagram Promotion */}
              <div className="instagram-section">
                <div className="instagram-card">
                  <div className="instagram-header">
                    <div className="instagram-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <h2>Volg Ons Op Instagram!</h2>
                  </div>

                  <div className="instagram-content">
                    <p>
                      Blijf op de hoogte van al onze acties, tornooien en
                      behind-the-scenes momenten! Op onze Instagram vind je:
                    </p>

                    <ul className="instagram-features">
                      <li>📸 Exclusieve foto's van onze wedstrijden</li>
                      <li>🎥 Behind-the-scenes video's</li>
                      <li>🏆 Live updates van tornooien</li>
                      <li>👥 Team highlights en speler spotlights</li>
                      <li>🎉 Teambuilding activiteiten</li>
                      <li>📅 Aankondigingen van komende evenementen</li>
                    </ul>

                    <div className="instagram-cta">
                      <a
                        href="https://instagram.com/fadroeipoelekes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-button"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        @fadroeipoelekes volgen
                      </a>
                      <p className="instagram-handle">@fadroeipoelekes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-section">
                <div className="contact-form-card">
                  <h2>Stuur Ons Een Bericht</h2>
                  <p>
                    Heb je vragen, suggesties of wil je je aanmelden voor ons
                    team? Vul het formulier in en we nemen zo snel mogelijk
                    contact met je op!
                  </p>

                  {submitStatus === "success" && (
                    <div className="alert alert-success">
                      <strong>Bedankt!</strong> Je bericht is succesvol
                      verzonden. We nemen spoedig contact met je op.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="alert alert-error">
                      <strong>Oops!</strong> Er is iets misgegaan. Probeer het
                      later opnieuw.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Naam *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Jouw volledige naam"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">E-mail *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="jouw@email.com"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Telefoon</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+32 123 45 67 89"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">Onderwerp *</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Kies een onderwerp</option>
                          <option value="tornooi-info">
                            Tornooi informatie
                          </option>
                          <option value="partnership">
                            Partnership/Sponsoring
                          </option>
                          <option value="media">Media aanvragen</option>
                          <option value="algemeen">Algemene vraag</option>
                          <option value="anders">Anders</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Bericht *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        placeholder="Vertel ons meer over je vraag of opmerking..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="submit-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner"></span>
                          Verzenden...
                        </>
                      ) : (
                        "Bericht Verzenden"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Contact;
