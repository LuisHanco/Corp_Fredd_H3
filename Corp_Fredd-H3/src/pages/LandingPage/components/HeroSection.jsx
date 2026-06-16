import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesData = [
    {
      id: 1,
      badge: "LÍNEA HB — CONDUCCIÓN HIDRÁULICA EN EDIFICACIONES",
      title: "Conexiones en Polipropileno para Agua Caliente",
      desc: "Accesorios de PPH diseñados con roscas BSPT de alta precisión de 1/2\" a 2\". Ofrecen máxima resistencia química, aislamiento acústico total y protección absoluta contra corrientes galvánicas.",
      btnText: "Ver Accesorios PPH",
      imgBack: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      badge: "LÍNEA HB — INFRAESTRUCTURA SANITARIA PREDIAL",
      title: "Sistemas de Desagüe en PVC-U de Alta Resistencia",
      desc: "Componentes estructurales con acabado semibrillante que optimiza el flujo interno de residuos. Su acople por cementación asegura una unión monolítica libre de filtraciones y fugas.",
      btnText: "Ver Accesorios PVC",
      imgBack: "https://images.unsplash.com/photo-1542013936693-8848e5742383?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      badge: "LÍNEA HB MAX — INGENIERÍA DE FLUIDOS Y EQUIPOS",
      title: "Tecnología Avanzada en Electrobombas Hidráulicas",
      desc: "Sistemas periféricos, centrífugos y sumergibles tipo lápiz de 0.5 HP a 1 HP desarrollados con ingeniería coreana avanzada. Operación continua con bobinado de cobre 100% puro.",
      btnText: "Ver Equipos de Bombeo",
      imgBack: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      handleNextSlide();
    }, 6000);
    return () => clearInterval(autoPlayInterval);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  return (
    <section className="enterprise-minimal-hero">
      <div className="blueprint-grid-overlay"></div>
      
      <div className="slider-viewport">
        {slidesData.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide-node ${index === currentSlide ? 'active-state' : 'hidden-state'}`}
            style={{ backgroundImage: `url(${slide.imgBack})` }}
          >
            {/* Máscara oscura para garantizar contraste del texto */}
            <div className="slide-dark-overlay"></div>

            <div className="hero-content-constrained">
              <div className="badge-corporate-tag">
                <FaBuilding className="badge-lead-icon" /> 
                <span>FÁBRICA PERUANA — 32 AÑOS DE TRAYECTORIA (1994 - 2026)</span>
              </div>
              
              <span className="slide-meta-label">{slide.badge}</span>

              <h1 className="hero-main-title">{slide.title}</h1>
              
              <p className="hero-synopsis-text">{slide.desc}</p>
              
              <div className="hero-action-row">
                <Link to="/productos" className="btn-executive-solid">
                  <span>{slide.btnText}</span>
                  <FaArrowRight className="btn-slide-arrow" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de Dirección */}
      <button className="carousel-arrow-btn prev-btn" onClick={handlePrevSlide} aria-label="Slide Anterior">
        <FaChevronLeft />
      </button>
      <button className="carousel-arrow-btn next-btn" onClick={handleNextSlide} aria-label="Siguiente Slide">
        <FaChevronRight />
      </button>

      {/* Puntos de Precisión */}
      <div className="carousel-dots-indicator">
        {slidesData.map((_, index) => (
          <button
            key={index}
            className={`dot-indicator-item ${index === currentSlide ? 'dot-active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSection;