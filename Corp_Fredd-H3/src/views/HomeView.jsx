import React from 'react';
import { Award, ShieldCheck, ArrowRight } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import MetricSection from '../components/MetricSection';
// Importamos únicamente PRODUCTOS ya que el catálogo ahora es 100% H3
import { PRODUCTOS } from '../data/products';
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

      {/* 2. Sección de Valor Agregado / Garantía H3 */}
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
              <span className="text-tagline">Industrias Fredd S.A.C</span>
              <h2 className="main-heading">¡Cuando la calidad se nota!</h2>
              <div className="heading-divider"></div>
            </div>
            <p className="paragraph">
              Nuestra empresa se fundó con la visión de proveer la línea de accesorios más robusta y confiable para la industria nacional. Nuestra línea oficial <strong>H3</strong> y <strong>HB Max</strong> son fabricadas con estándares internacionales de excelencia, garantizando la seguridad en cada conexión.
            </p>
            <p className="paragraph">
              Asesoramos a su equipo de ingenieros para asegurar la selección correcta del material según el flujo de fluidos, presiones y temperatura de trabajo requeridos en sus instalaciones de agua fría o caliente.
            </p>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon-box">
                  <Award size={20} />
                </div>
                <div className="feature-text">
                  <h4>Certificación ISO</h4>
                  <p>Garantía total de origen.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon-box">
                  <ShieldCheck size={20} />
                </div>
                <div className="feature-text">
                  <h4>Asistencia Especializada</h4>
                  <p>Equipo técnico a su disposición.</p>
                </div>
              </div>
            </div>

            <div className="action-row">
              <button onClick={() => navegarA('nosotros')} className="btn-primary-large">
                Conocer Más de la Fábrica
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Sección de Métricas Estadísticas */}
      <MetricSection />

      {/* 4. Sección de Productos Destacados H3 */}
      <section className="featured-section">
        <div className="section-header">
          <span className="section-tagline">Catálogo Oficial H3</span>
          <h2 className="section-title">Productos Destacados</h2>
          <div className="title-divider"></div>
          <span className="mobile-swipe-hint">Desliza hacia los lados para ver más productos ➔</span>
        </div>

        <div className="featured-responsive-track">
          {/* Mostramos los 4 primeros productos de la data (que ahora serán solo H3) */}
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
                  <span className="product-category-tag">Línea H3</span>
                </div>

                <h4 className="product-title-luxury">{prod.nombre}</h4>
                <p className="product-desc-luxury">{prod.descripcion}</p>

                <div className="product-action-belt">
                  <span className="btn-product-luxury">
                    <span>Ver Ficha Técnica</span>
                    <ArrowRight size={14} className="arrow-product-motion" />
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
            <span>Ver todo el catálogo H3</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* 5. Bloque Pre-Footer Informativo H3 */}
      <section className="pre-footer-banner">
        <div className="banner-content">
          <h3>¿Deseas conocer más sobre la línea H3 o HB Max?</h3>
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