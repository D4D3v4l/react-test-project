import React, { useState, useEffect } from "react";
import "./style.css"; // o tu archivo de estilos globales

// Si usas i18n (traducciones):
// import { useTranslation } from "react-i18next";

function ContentSection() {
  // const { t } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);

  const concerts = [
    {
      name: "Maldito Antisocial",
      date: "17 de Octubre 2025",
      venue: "Explanada Agua Dulce",
      image: "https://cdn.myportfolio.com/652b25c3-c66e-4abb-a7c1-36ca2ad2ad92/e4dc6579-20de-40ed-88c0-9816e26304df_rw_1920.jpg?h=29697d3c2c0b321ee7007ceae245effd"
    },
    {
      name: "Big Time Rush",
      date: "27 de Febrero 2026",
      venue: "Costa 21",
      image: "https://www.sportovnihalafortuna.cz/data/a/a/btr-1920x600-002-.jpg"
    },
    {
      name: "Cometa a la deriva",
      date: "11 de Octubre 2025",
      venue: "Parque Washington",
      image: "https://tercerparlante.com/wp-content/uploads/2025/01/Cometa-a-la-Deriva-Peru-2025-0001.jpg"
    },
    {
      name: "Dua Lipa",
      date: "25 de Noviembre 2025",
      venue: "Estadio San Marcos",
      image: "https://images.hdqwalls.com/wallpapers/2019-dua-lipa-c0.jpg"
    },
    {
      name: "Bad Bunny",
      date: "30 de Enero 2025",
      venue: "Estadio Nacional",
      image: "https://media.pitchfork.com/photos/682b43f9d6a2575d172e91a4/16:9/w_1280,c_limit/Bad-Bunny-Debi-Tirar-Mas-Fotos.jpeg"
    },
    {
      name: "Doja Cat",
      date: "13 de Febrero 2026",
      venue: "Arena 1",
      image: "https://4kwallpapers.com/images/wallpapers/doja-cat-american-3840x2160-9919.jpg"
    }
  ];

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % concerts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [concerts.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {/* === HERO CAROUSEL === */}
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {concerts.map((concert, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                currentSlide === index ? "active" : ""
              }`}
            >
              <img
                src={concert.image}
                alt={concert.name}
                className="carousel-image"
              />
              <div className="carousel-info">
                <h3>{"Hero Title" /* t('heroTitle') */}</h3>
                <p>{"Hero Subtitle" /* t('heroSubtitle') */}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {concerts.map((_, index) => (
            <span
              key={`dot-${index}`}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* === DIVIDER === */}
      <div className="section-divider">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>

      <div className="section-title">{"Conoce" /* t('conoce') */}</div>

      {/* === CONCERT CARDS === */}
      <div className="concerts">
        {concerts.map((concert, index) => (
          <div className="concert-card" key={index}>
            <img src={concert.image} alt={concert.name} />
            <div>
              <strong>{concert.name}</strong>
              <br />
              {concert.date}, {concert.venue}
            </div>
          </div>
        ))}
      </div>

      {/* === DIVIDER === */}
      <div className="section-divider">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>

      <div className="testimonial-title">{"Testimonios" /* t('Testimonios') */}</div>

      {/* === TESTIMONIALS === */}
      <div className="testimonials-container">
        <div className="testimonial-card">
          <img
            src="https://raw.githubusercontent.com/The-Rumbling-AW/LandingV2/refs/heads/main/stay.jpg"
            alt="Fan de Stray Kids"
          />
          <p>
            {"Texto test 1"} <br />
            <br />
            {"Por alguien"}
          </p>
        </div>

        <div className="testimonial-card highlighted">
          <img
            src="https://raw.githubusercontent.com/The-Rumbling-AW/LandingV2/refs/heads/main/harry.jpg"
            alt="Fan de Harry Styles"
          />
          <p>
            {"Texto test 2"} <br />
            <br />
            {"Por alguien"}
          </p>
        </div>

        <div className="testimonial-card">
          <img
            src="https://raw.githubusercontent.com/The-Rumbling-AW/LandingV2/refs/heads/main/louis.jpg"
            alt="Fan de Louis Tomlinson"
          />
          <p>
            {"Texto test 3"} <br />
            <br />
            {"Por alguien"}
          </p>
        </div>
      </div>

      {/* === VIDEO SECTIONS === */}
      <div className="section-divider">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>

      <div className="testimonial-title">{"Sobre el equipo" /* t('abouttheteam') */}</div>
      <div className="video-section video-left">
        <div className="video-media">
          <iframe
            src="https://www.youtube.com/embed/Fa3EgjYHyow"
            title="About The Team"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-content">
          <p>{"Descripción del equipo" /* t('abouttheteamdesc') */}</p>
        </div>
      </div>

      <div className="section-divider">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>

      <div className="testimonial-title">{"Sobre el producto" /* t('abouttheproduct') */}</div>
      <div className="video-section video-right">
        <div className="video-content">
          <p>{"Descripción del producto" /* t('abouttheproductdesc') */}</p>
        </div>
        <div className="video-media">
          <iframe
            src="https://www.youtube.com/embed/Fa3EgjYHyow"
            title="About The Product"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* === EMAIL SIGNUP === */}
      <div className="email-signup-section">
        <div className="signup-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
        </div>
        <div className="email-signup-content">
          <h2>{"Suscríbete" /* t('footer') */}</h2>
          <p>{"Recibe novedades" /* t('footerdos') */}</p>
          <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder={"Tu correo"} required />
            <button type="submit">{"Enviar" /* t('footerboton') */}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
