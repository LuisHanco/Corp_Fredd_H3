import React from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import './HeroCarousel.css';

export default function HeroCarousel({ slides, currentSlide, setCurrentSlide, navegarA }) {
  return (
    <section className="hero-carousel-section">
      <div className="carousel-wrapper">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`carousel-slide ${index === currentSlide ? 'slide-active' : 'slide-inactive'}`}
          >
            {/* Capa oscura de fondo para que resalten las letras blancas */}
            <div className="carousel-overlay" />
            
            {/* Imagen de fondo */}
            <img src={slide.img} alt={slide.titulo} className="carousel-bg-img" />
            
            {/* Contenido del texto */}
            <div className="carousel-content-layer">
              <div className="carousel-text-container">
                <span className="carousel-tag">Línea Oficial H3</span>
                <h1 className="carousel-title">{slide.titulo}</h1>
                <p className="carousel-description">{slide.subtitulo}</p>
                
                <div className="carousel-actions">
                  <button onClick={() => navegarA('productos')} className="btn-carousel-primary">
                    <span>Ver Catálogo H3</span>
                    <ArrowRight size={16} />
                  </button>
                  <button onClick={() => navegarA('contacto')} className="btn-carousel-transparent">
                    Solicitar Cotización
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas de navegación del carrusel */}
      <button 
        onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)} 
        className="carousel-arrow arrow-left"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)} 
        className="carousel-arrow arrow-right"
        aria-label="Siguiente"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}