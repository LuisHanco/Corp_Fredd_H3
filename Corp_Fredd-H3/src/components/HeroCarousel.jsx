import React, { useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, FileText } from 'lucide-react';
// Importamos el logo oficial desde tu carpeta de assets
import logoH3 from '../assets/logos/h3.png';
import './HeroCarousel.css';

export default function HeroCarousel({ slides, currentSlide, setCurrentSlide, navegarA }) {
  
  // Función para avanzar al siguiente slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length, setCurrentSlide]);

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Autoplay inteligente: Avanza cada 6 segundos
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 6000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="hero-carousel-section">
      <div className="carousel-wrapper">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`carousel-slide ${index === currentSlide ? 'slide-active' : 'slide-inactive'}`}
          >
            
            {/* 1. LADO DEL PRODUCTO (Derecha en PC, Arriba en Móvil) */}
            <div className="carousel-image-layer">
              <img 
                src={slide.img} 
                alt={slide.titulo} 
                className="carousel-bg-img" 
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
            
            {/* 2. LADO DEL TEXTO (Izquierda en PC, Abajo en Móvil) */}
            <div className="carousel-content-layer">
              <div className="carousel-text-container">
                
                {/* LOGO FLOTANTE: Sobresale y se centra en móvil */}
                <div className="carousel-logo-wrapper">
                  <div className="logo-bg-box">
                    <img 
                      src={logoH3} 
                      alt="Línea Oficial H3" 
                      className="carousel-brand-logo" 
                    />
                  </div>
                </div>
                
                <h1 className="carousel-title">{slide.titulo}</h1>
                <p className="carousel-description">{slide.subtitulo}</p>
                
                <div className="carousel-actions">
                  <button onClick={() => navegarA('productos')} className="btn-carousel-primary">
                    <span>Ver Catálogo</span>
                    <ArrowRight size={18} />
                  </button>
                  <button onClick={() => navegarA('catalogos')} className="btn-carousel-transparent">
                    <FileText size={18} />
                    <span>Fichas Técnicas</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Controles de Navegación */}
      <button 
        onClick={prevSlide} 
        className="carousel-arrow arrow-left"
        aria-label="Diapositiva Anterior"
      >
        <ChevronLeft size={28} />
      </button>
      
      <button 
        onClick={nextSlide} 
        className="carousel-arrow arrow-right"
        aria-label="Siguiente Diapositiva"
      >
        <ChevronRight size={28} />
      </button>
      
    </section>
  );
}