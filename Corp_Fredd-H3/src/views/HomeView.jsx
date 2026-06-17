import React from 'react';
import { Award, ShieldCheck, ArrowRight } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import MetricSection from '../components/MetricSection';
// Importamos tus arreglos maestros de datos e itinerario de enlaces
import { CATEGORIAS, PRODUCTOS, ENLACES_LINEAS } from '../data/products';
import './HomeView.css';

export default function HomeView({ slides, currentSlide, setCurrentSlide, navegarA, setActiveCategoryFilter }) {
  return (
    <div className="home-view">
      
      {/* 1. Carrusel Principal de Banners */}
      <HeroCarousel 
        slides={slides} 
        currentSlide={currentSlide} 
        setCurrentSlide={setCurrentSlide} 
        navegarA={navegarA} 
      />

      {/* =========================================================
          2. Sección de Líneas de Productos (Studio Ambient Design - Refinado)
          ========================================================= */}
      <section className="lines-section">
        <div className="section-header">
          <span className="section-tagline">Nuestras Líneas</span>
          <h2 className="section-title">Líneas de Productos Especializadas</h2>
          <div className="title-divider"></div>
          <span className="mobile-swipe-hint">Desliza hacia los lados para explorar las líneas ➔</span>
        </div>

        {/* Contenedor responsivo calibrado: 4 Columnas simétricas en PC[cite: 15] */}
        <div className="lines-responsive-track">
          {CATEGORIAS.slice(0, 4).map((cat) => (
            <div 
              key={cat.id} 
              className="line-studio-exhibition-card"
              onClick={() => {
                // Redirección dinámica basada en tu archivo de configuración centralizado
                const urlDestino = ENLACES_LINEAS[cat.id] || '#';
                window.open(urlDestino, '_blank', 'noopener,noreferrer');
              }}
            >
              {/* Nicho de iluminación industrial para el Logotipo */}
              <div className="line-studio-stage">
                <div className="studio-ambient-glow"></div>
                <img src={cat.imagen} alt={cat.nombre} className="line-studio-logo-img" />
              </div>
              
              {/* Botón integrado orgánicamente en el chasis continuo */}
              <div className="line-studio-action-belt">
                <span className="btn-studio-luxury-trigger">
                  <span>Explorar Línea</span>
                  <ArrowRight size={13} className="arrow-studio-motion" />
                </span>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. Sección de Valor Agregado / Garantía */}
      <section className="guarantee-section">
        <div className="guarantee-container">
          
          <div className="guarantee-image-block">
            <img 
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600" 
              alt="Trabajo Industrial de Alta Calidad" 
              className="guarantee-img" 
            />
            <div className="experience-badge">
              <span className="exp-number">32+</span>
              <span className="exp-text">Años de Trayectoria</span>
            </div>
          </div>

          <div className="guarantee-text-block">
            <div className="text-header">
              <span className="text-tagline">Compromiso y Garantía</span>
              <h2 className="main-heading">¡Cuando la calidad se nota!</h2>
              <div className="heading-divider"></div>
            </div>
            <p className="paragraph">
              Nuestra empresa se fundó con la visión de proveer la línea de accesorios más robusta y confiable para la industria nacional. Importamos directamente de fabricantes certificados con estándares internacionales de excelencia, garantizando la seguridad en cada conexión.
            </p>
            <p className="paragraph">
              Asesoramos a su equipo de ingenieros para asegurar la selección correcta del material según el flujo de fluidos, presiones y temperatura de trabajo requeridos en sus instalaciones.
            </p>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon-box">
                  <Award size={18} />
                </div>
                <div className="feature-text">
                  <h4>Certificación ISO</h4>
                  <p>Garantía total de origen.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon-box">
                  <ShieldCheck size={18} />
                </div>
                <div className="feature-text">
                  <h4>Asistencia Especializada</h4>
                  <p>Equipo técnico a su disposición.</p>
                </div>
              </div>
            </div>

            <div className="action-row">
              <button onClick={() => navegarA('nosotros')} className="btn-primary-large">
                Conocer Más de Nosotros
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Sección de Métricas Estadísticas */}
      <MetricSection />

      {/* 5. Sección de Productos Destacados */}
      <section className="featured-section">
        <div className="section-header">
          <span className="section-tagline">Portafolio</span>
          <h2 className="section-title">Productos Destacados</h2>
          <div className="title-divider"></div>
          <span className="mobile-swipe-hint">Desliza hacia los lados para ver más productos ➔</span>
        </div>

        <div className="featured-responsive-track">
          {PRODUCTOS.slice(0, 4).map((prod) => (
            <div 
              key={prod.id} 
              className="product-exhibition-card"
              onClick={() => {
                navegarA('producto-detalle', prod);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="product-img-stage">
                <img src={prod.imagenes && prod.imagenes[0]} alt={prod.nombre} className="product-stage-img" />
                <span className="product-brand-floating-badge">{prod.marca}</span>
              </div>

              <div className="product-details-chassis">
                <div className="product-card-meta-row">
                  <span className="product-category-tag">{prod.categoria.replace('-', ' ')}</span>
                </div>

                <h4 className="product-title-luxury">{prod.nombre}</h4>
                <p className="product-desc-luxury">{prod.descripcion}</p>

                <div className="product-action-belt">
                  <span className="btn-product-luxury">
                    <span>Ver Ficha Técnica</span>
                    <ArrowRight size={13} className="arrow-product-motion" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="see-more-action-container">
          <button 
            onClick={() => {
              setActiveCategoryFilter('todas');
              navegarA('productos');
            }} 
            className="btn-see-more-featured"
          >
            <span>Ver todo el catálogo</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* 6. Bloque Pre-Footer Informativo */}
      <section className="pre-footer-banner">
        <div className="banner-content">
          <h3>¿Deseas conocer más sobre nuestros productos?</h3>
          <p>
            Déjanos tus consultas y nos comunicaremos contigo de inmediato para asesorarte y brindarte la mejor cotización.
          </p>
          <button onClick={() => navegarA('contacto')} className="btn-banner-action">
            Contáctanos
          </button>
        </div>
      </section>

    </div>
  );
}