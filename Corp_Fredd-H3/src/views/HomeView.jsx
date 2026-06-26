import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  ThermometerSun, 
  Droplets, 
  Database, 
  Zap, 
  Play,
  Lightbulb, // 💡 Nuevo icono para Luz Eléctrica
  Wrench,    // 🔧 Nuevo icono para Tubo
  Boxes      // 📦 Nuevo icono para Accesorios PVC
} from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import MetricSection from '../components/MetricSection';
import { PRODUCTOS, CATEGORIAS } from '../data/products';
import './HomeView.css';

export default function HomeView({ slides, currentSlide, setCurrentSlide, navegarA, setActiveCategoryFilter }) {
  
  // Estado para el control del video
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // 🛠️ MAPEADO DE ÍCONOS EXTENDIDO Y CALIBRADO
  const obtenerIconoCategoria = (id) => {
    switch(id) {
      case 'agua-caliente': 
        return <ThermometerSun size={24} strokeWidth={2} />;
      case 'agua-fria': 
        return <Droplets size={24} strokeWidth={2} />;
      case 'tanques': 
        return <Database size={24} strokeWidth={2} />;
      case 'electrobombas': 
        return <Zap size={24} strokeWidth={2} />;
      case 'luz-Electrica': 
        return <Lightbulb size={24} strokeWidth={2} />;
      case 'tubo-pvc': 
        return <Wrench size={24} strokeWidth={2} />;
      case 'pvc': 
        return <Boxes size={24} strokeWidth={2} />;
      default: 
        return <ArrowRight size={24} strokeWidth={2} />;
    }
  };

  const irACategoria = (catId) => {
    setActiveCategoryFilter(catId);
    navegarA('productos');
  };

  return (
    <div className="home-view">
      
      {/* 1. Carrusel Principal */}
      <HeroCarousel 
        slides={slides} 
        currentSlide={currentSlide} 
        setCurrentSlide={setCurrentSlide} 
        navegarA={navegarA} 
      />

{/* 2. SECCIÓN: Accesos Rápidos a Categorías H3 (Estética Cinética de Vanguardia) */}
<section className="quick-categories-section animate-fade-up" aria-label="Líneas de Ingeniería H3">
  <div className="categories-window-mask">
    <div className="categories-ticker-track">
      
      {/* Bloque Maestro */}
      {CATEGORIAS.map((cat) => (
        <div 
          key={`ticker-1-${cat.id}`} 
          className="category-subtle-card"
          onClick={() => irACategoria(cat.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') irACategoria(cat.id); }}
        >
          <div className="cat-subtle-icon">
            {obtenerIconoCategoria(cat.id)}
          </div>
          <div className="cat-subtle-info">
            <h3>{cat.nombre.split(' (')[0]}</h3>
            <span className="cat-subtle-action">
              Ver línea <ArrowRight size={12} className="arrow-motion" />
            </span>
          </div>
        </div>
      ))}

      {/* Bloque Espejo (Optimiza el bucle infinito en Desktop) */}
      {CATEGORIAS.map((cat) => (
        <div 
          key={`ticker-2-${cat.id}`} 
          className="category-subtle-card clone-card"
          onClick={() => irACategoria(cat.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') irACategoria(cat.id); }}
        >
          <div className="cat-subtle-icon">
            {obtenerIconoCategoria(cat.id)}
          </div>
          <div className="cat-subtle-info">
            <h3>{cat.nombre.split(' (')[0]}</h3>
            <span className="cat-subtle-action">
              Ver línea <ArrowRight size={12} className="arrow-motion" />
            </span>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>
      {/* 3. Sección de Valor Agregado / Garantía H3 */}
      <section className="guarantee-section animate-fade-up delay-100">
        <div className="guarantee-container">
          
          <div className="guarantee-image-block">
            <img 
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800" 
              alt="Trabajo Industrial de Alta Calidad" 
              className="guarantee-img"
              loading="lazy" 
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
              Nuestra empresa se fundó con la visión de proveer la línea de accesorios más robusta y confiable para la industria nacional. Nuestra línea oficial <strong>H3</strong> y <strong>HB Max</strong> son fabricadas con estándares internacionales de excelencia, garantizando seguridad en cada conexión.
            </p>
            <p className="paragraph">
              Asesoramos a su equipo de ingenieros para asegurar la selección correcta del material según el flujo de fluidos, presiones y temperatura requeridos en sus instalaciones.
            </p>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon-box">
                  <Award size={24} strokeWidth={2} />
                </div>
                <div className="feature-text">
                  <h4>Certificación ISO</h4>
                  <p>Garantía total de origen.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon-box">
                  <ShieldCheck size={24} strokeWidth={2} />
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

      {/* 4. SECCIÓN: Video Promocional Interactivo */}
      <section className="video-promo-section animate-fade-up delay-100">
        <div className="section-header">
          <span className="section-tagline">Conoce Nuestra Fábrica</span>
          <h2 className="section-title">Innovación y Tecnología H3</h2>
          <div className="title-divider"></div>
        </div>
        
        <div className="video-container">
          <div className="video-wrapper">
            {!isVideoPlaying ? (
              <div className="video-thumbnail-overlay" onClick={() => setIsVideoPlaying(true)}>
                <img 
                  src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=1200" 
                  alt="Pre-visualización del video" 
                  className="video-cover-img" 
                />
                <button className="pulsing-play-btn" aria-label="Reproducir Video">
                  <Play size={32} fill="currentColor" className="play-icon-svg" />
                </button>
              </div>
            ) : (
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&controls=1&showinfo=0&autoplay=1" 
                title="Video Promocional Industrias Fredd" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </section>

      {/* 5. Sección de Métricas Estadísticas */}
      <MetricSection />

      {/* 6. Sección de Productos Destacados H3 */}
      <section className="featured-section animate-fade-up delay-200">
        <div className="section-header">
          <span className="section-tagline">Catálogo Oficial H3</span>
          <h2 className="section-title">Productos Destacados</h2>
          <div className="title-divider"></div>
          <span className="mobile-swipe-hint">Desliza hacia los lados para ver más ➔</span>
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
                <img src={prod.imagenes && prod.imagenes[0]} alt={prod.nombre} className="product-stage-img" loading="lazy" />
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

      {/* 7. NUEVA SECCIÓN: Galería Corporativa Tipo Masonry */}
      <section className="gallery-section animate-fade-up delay-200">
        <div className="section-header">
          <span className="section-tagline">Nuestras Instalaciones</span>
          <h2 className="section-title">Galería Corporativa</h2>
          <div className="title-divider"></div>
        </div>
        
        <div className="gallery-grid">
          <div className="gallery-item large">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" alt="Planta de producción 1" loading="lazy" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500" alt="Operarios en fábrica" loading="lazy" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500" alt="Control de calidad" loading="lazy" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500" alt="Almacenamiento" loading="lazy" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500" alt="Distribución" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 8. Bloque Pre-Footer Informativo H3 */}
      <section className="pre-footer-banner">
        <div className="banner-content">
          <h3>¿Deseas conocer más sobre la línea H3 o H3 Max?</h3>
          <p>
            Déjanos tus consultas y nos comunicaremos contigo de inmediato para asesorarte y brindarte la mejor cotización.
          </p>
          <button onClick={() => navegarA('contacto')} className="btn-banner-action">
            Contactar a Ventas
          </button>
        </div>
      </section>

    </div>
  );
}