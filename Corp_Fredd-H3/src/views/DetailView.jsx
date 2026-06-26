import React, { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2, Ruler, ShieldAlert, ArrowRight, FileText, X } from 'lucide-react';
// Importamos la base de datos para sugerencias y el Catálogo como Ficha Técnica por defecto
import { PRODUCTOS, CATALOGOS } from '../data/products';
import './DetailView.css';

export default function DetailView({ 
  selectedProduct, 
  activeImgIndex, 
  setActiveImgIndex, 
  activeTabDetalle, 
  setActiveTabDetalle, 
  setCotizadorForm, 
  setCotizacionModalOpen, 
  navegarA 
}) {
  
  // Estado para controlar el modal de la Ficha Técnica
  const [urlFichaActiva, setUrlFichaActiva] = useState(null);
  
  // Referencia para el contenedor de productos similares (Scroll manual por flechas)
  const sliderRef = useRef(null);

  if (!selectedProduct) return null;

  // Filtramos productos de la misma categoría para sugerencias
  const productosSimilares = PRODUCTOS.filter(
    (p) => p.categoria === selectedProduct.categoria && p.id !== selectedProduct.id
  );

  // Funciones para desplazar el carrusel mediante las flechas
  const scrollSlider = (direccion) => {
    if (sliderRef.current) {
      const scrollAmount = 300; // Distancia de desplazamiento por clic
      sliderRef.current.scrollBy({
        left: direccion === 'izquierda' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Función auxiliar para formatear la categoría
  const formatoCategoria = (catText) => {
    return catText ? catText.replace(/-/g, ' ').toUpperCase() : '';
  };

  // Función inteligente para abrir la Ficha Técnica (Local o Drive)
  const abrirFichaTecnica = () => {
    let url = selectedProduct.fichaTecnica || (CATALOGOS && CATALOGOS.length > 0 ? CATALOGOS[0].enlacePdf : '');
    
    if (!url) return;

    if (url.includes('drive.google.com')) {
      url = url.replace(/\/view\?usp=sharing|\/edit\?usp=sharing|\/view|\/edit/g, '/preview');
    }
    
    setUrlFichaActiva(url);
  };

  return (
    <div className="detail-page">
      <div className="detail-container">
        
        {/* Migas de Pan */}
        <nav className="breadcrumbs-nav">
          <button onClick={() => navegarA('inicio')} className="breadcrumb-link">Inicio</button>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <button onClick={() => navegarA('productos')} className="breadcrumb-link">Catálogo H3</button>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span className="breadcrumb-current">{formatoCategoria(selectedProduct.categoria)}</span>
        </nav>

        {/* Tarjeta Principal del Producto */}
        <div className="main-product-card">
          <div className="product-gallery-side">
            <div className="main-image-viewport">
              <img 
                src={selectedProduct.imagenes && selectedProduct.imagenes[activeImgIndex]} 
                alt={selectedProduct.nombre} 
                className="full-product-img" 
              />
            </div>
            
            {selectedProduct.imagenes && selectedProduct.imagenes.length > 1 && (
              <div className="thumbnails-strip">
                {selectedProduct.imagenes.map((img, i) => (
                  <img 
                    key={i} 
                    src={img} 
                    alt={`Vista ${i + 1}`} 
                    className={`thumb-img ${i === activeImgIndex ? 'selected' : ''}`} 
                    onClick={() => setActiveImgIndex(i)} 
                  />
                ))}
              </div>
            )}
          </div>

          <div className="product-info-side">
            <div className="info-header">
              <span className="technical-badge">Línea Oficial H3</span>
              <h1 className="product-main-title">{selectedProduct.nombre}</h1>
              <div className="product-base-code">
                Código Base: <strong>{selectedProduct.codigoBase || 'N/A'}</strong>
              </div>
            </div>

            <p className="product-large-desc">{selectedProduct.descripcion}</p>

            <div className="key-bullet-points">
              <h4 className="bullet-points-title">Ventajas Competitivas</h4>
              <ul className="bullet-points-list">
                {selectedProduct.caracteristicas?.map((char, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={18} className="bullet-icon-red" />
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-actions-row">
              <button 
                onClick={() => {
                  setCotizadorForm(prev => ({ ...prev, producto: selectedProduct.nombre, medida: '' }));
                  setCotizacionModalOpen(true);
                }}
                className="btn-trigger-quote-main"
              >
                Solicitar Cotización
              </button>
              
              <button onClick={abrirFichaTecnica} className="btn-view-tech-sheet">
                <FileText size={18} />
                <span>Ver Ficha Técnica</span>
              </button>
            </div>
          </div>
        </div>

        {/* Panel Inferior: Pestañas */}
        <div className="specs-tabs-card">
          <div className="tabs-navigation-header">
            <button 
              onClick={() => setActiveTabDetalle('especificaciones')} 
              className={`tab-nav-btn ${activeTabDetalle === 'especificaciones' ? 'active' : ''}`}
            >
              <Ruler size={18} />
              <span>Tabla de Medidas</span>
            </button>
            <button 
              onClick={() => setActiveTabDetalle('descripcion')} 
              className={`tab-nav-btn ${activeTabDetalle === 'descripcion' ? 'active' : ''}`}
            >
              <ShieldAlert size={18} />
              <span>Normativas e Instalación</span>
            </button>
          </div>

          <div className="tabs-dynamic-content">
            {activeTabDetalle === 'especificaciones' ? (
              <div className="table-responsive-wrapper">
                <table className="technical-spec-table">
                  <thead>
                    <tr>
                      {selectedProduct.especificaciones && selectedProduct.especificaciones.length > 0 && 
                        Object.keys(selectedProduct.especificaciones[0])
                          .filter(llave => llave !== 'stock')
                          .map((llave, index) => <th key={index}>{llave}</th>)
                      }
                      <th>Disponibilidad</th>
                      <th className="text-center">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProduct.especificaciones?.map((spec, i) => {
                      const llavesDinamicas = Object.keys(spec).filter(llave => llave !== 'stock');
                      return (
                        <tr key={i}>
                          {llavesDinamicas.map((llave, idx) => (
                            <td key={idx} className={idx === 0 ? "font-bold-cell" : (llave.toLowerCase().includes('código') ? "font-mono-cell" : "")}>
                              {spec[llave]}
                            </td>
                          ))}
                          <td>
                            <span className={`stock-status ${spec.stock === 'Inmediato' || spec.stock === 'Disponible' ? 'status-green' : 'status-orange'}`}>
                              {spec.stock}
                            </span>
                          </td>
                          <td className="text-center">
                            <button 
                              onClick={() => {
                                setCotizadorForm({ 
                                  producto: selectedProduct.nombre, 
                                  medida: spec[llavesDinamicas[0]], 
                                  cantidad: '10', 
                                  nombre: '', correo: '', telefono: '' 
                                });
                                setCotizacionModalOpen(true);
                              }}
                              className="btn-table-row-quote"
                            >
                              Cotizar
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="additional-info-text">
                <h4 className="additional-info-title">Consideraciones para la Instalación</h4>
                <p>Todos nuestros accesorios cumplen rigurosamente con los estándares internacionales aplicables para sistemas de presión.</p>
              </div>
            )}
          </div>
        </div>

        {/* Productos Similares con Carrusel */}
        {productosSimilares.length > 0 && (
          <section className="similares-section">
            <div className="similares-header-container">
              <div className="similares-header">
                <span className="similares-tagline">Línea H3 Sugerida</span>
                <h3 className="similares-title">Productos Similares</h3>
                <div className="similares-divider"></div>
              </div>
              
              <div className="slider-arrow-controls">
                <button className="arrow-btn" onClick={() => scrollSlider('izquierda')} aria-label="Anterior">
                  <ChevronLeft size={20} />
                </button>
                <button className="arrow-btn" onClick={() => scrollSlider('derecha')} aria-label="Siguiente">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="similares-slider-wrapper">
              <div className="similares-responsive-track carousel-mode" ref={sliderRef}>
                {productosSimilares.map((simProd) => (
                  <div 
                    key={simProd.id} 
                    className="similar-card-premium"
                    onClick={() => {
                      setActiveImgIndex(0); 
                      navegarA('producto-detalle', simProd);
                    }}
                  >
                    <div className="similar-card-img-container">
                      <img src={simProd.imagenes && simProd.imagenes[0]} alt={simProd.nombre} className="similar-stage-img" />
                    </div>
                    <div className="similar-card-info">
                      <span className="similar-card-cat">{formatoCategoria(simProd.categoria)}</span>
                      <h4 className="similar-product-title-clean" title={simProd.nombre}>{simProd.nombre}</h4>
                      <p className="similar-product-desc-clean">{simProd.descripcion}</p>
                      <button className="btn-similar-view">
                        <span>Ver Detalles</span>
                        <ArrowRight size={14} className="arrow-similar-motion" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Modal Ficha Técnica */}
      {urlFichaActiva && (
        <div className="ficha-modal-overlay" onClick={() => setUrlFichaActiva(null)}>
          <div className="ficha-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="ficha-modal-header">
              <span className="ficha-doc-indicator">Ficha Técnica: {selectedProduct.nombre}</span>
              <button className="btn-close-ficha" onClick={() => setUrlFichaActiva(null)}><X size={16} /> Cerrar</button>
            </div>
            <div className="ficha-iframe-container">
              <iframe src={urlFichaActiva} title="Visor de Ficha Técnica" allow="autoplay" frameBorder="0"></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}