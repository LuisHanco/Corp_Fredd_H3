import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, Ruler, ShieldAlert, ArrowRight, FileText, X } from 'lucide-react';
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

  if (!selectedProduct) return null;

  // Filtro de sugerencias (misma categoría, excluye el actual)
  const productosSimilares = PRODUCTOS.filter(
    (p) => p.categoria === selectedProduct.categoria && p.id !== selectedProduct.id
  ).slice(0, 4);

  // Función auxiliar para formatear la categoría (de 'agua-caliente' a 'AGUA CALIENTE')
  const formatoCategoria = (catText) => {
    return catText ? catText.replace(/-/g, ' ').toUpperCase() : '';
  };

  // Función inteligente para abrir la Ficha Técnica (Local o Drive)
  const abrirFichaTecnica = () => {
    // Si el producto tiene ficha propia se usa, sino, usa el Catálogo General H3
    let url = selectedProduct.fichaTecnica || (CATALOGOS && CATALOGOS.length > 0 ? CATALOGOS[0].enlacePdf : '');
    
    if (!url) return;

    // Si el enlace es de Google Drive, lo forzamos a modo 'preview'
    if (url.includes('drive.google.com')) {
      url = url.replace(/\/view\?usp=sharing|\/edit\?usp=sharing|\/view|\/edit/g, '/preview');
    }
    
    setUrlFichaActiva(url);
  };

  return (
    <div className="detail-page">
      <div className="detail-container">
        
        {/* ==========================================
            Migas de Pan (Navegación UX)
            ========================================== */}
        <nav className="breadcrumbs-nav">
          <button onClick={() => navegarA('inicio')} className="breadcrumb-link">Inicio</button>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <button onClick={() => navegarA('productos')} className="breadcrumb-link">Catálogo H3</button>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span className="breadcrumb-current">{formatoCategoria(selectedProduct.categoria)}</span>
        </nav>

        {/* ==========================================
            Tarjeta Principal del Producto
            ========================================== */}
        <div className="main-product-card">
          
          {/* Lado Izquierdo: Galería de Imágenes */}
          <div className="product-gallery-side">
            <div className="main-image-viewport">
              <img 
                src={selectedProduct.imagenes && selectedProduct.imagenes[activeImgIndex]} 
                alt={selectedProduct.nombre} 
                className="full-product-img" 
              />
              {/* Etiqueta de Marca incrustada en la imagen */}
              <span className="product-brand-floating-tag">{selectedProduct.marca}</span>
            </div>
            
            {/* Tira de Miniaturas (Responsiva con Scroll en móviles) */}
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

          {/* Lado Derecho: Información Comercial */}
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

            {/* BOTONES DE ACCIÓN (Lado a lado en PC, Apilados en Móvil) */}
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

        {/* ==========================================
            Panel Inferior: Pestañas y Tablas Técnicas
            ========================================== */}
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
              
              /* CONTENEDOR RESPONSIVE PARA LA TABLA DINÁMICA */
              <div className="table-responsive-wrapper">
                <table className="technical-spec-table">
                  <thead>
                    <tr>
                      {selectedProduct.especificaciones && selectedProduct.especificaciones.length > 0 && 
                        Object.keys(selectedProduct.especificaciones[0])
                          .filter(llave => llave !== 'stock')
                          .map((llave, index) => (
                            <th key={index}>{llave}</th>
                          ))
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
                            <td 
                              key={idx} 
                              className={idx === 0 ? "font-bold-cell" : (llave.toLowerCase().includes('código') ? "font-mono-cell" : "")}
                            >
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
                <p>
                  Todos nuestros accesorios cumplen rigurosamente con los estándares internacionales aplicables para sistemas de presión. Se recomienda realizar las uniones a la temperatura indicada por la normativa del fabricante para garantizar una estanqueidad del 100% en el sistema H3.
                </p>
                <p>
                  Para proyectos industriales complejos o domiciliarios de gran escala, solicite asistencia técnica directa a nuestro equipo de ingeniería durante la etapa de diseño o dimensionamiento.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ==========================================
            PRODUCTOS SIMILARES (Sugerencias H3)
            ========================================== */}
        {productosSimilares.length > 0 && (
          <section className="similares-section">
            <div className="similares-header">
              <span className="similares-tagline">Línea H3 Sugerida</span>
              <h3 className="similares-title">Productos Similares</h3>
              <div className="similares-divider"></div>
            </div>

            <div className="similares-responsive-track">
              {productosSimilares.map((simProd) => (
                <div 
                  key={simProd.id} 
                  className="similar-card-premium"
                  onClick={() => {
                    setActiveImgIndex(0); 
                    navegarA('producto-detalle', simProd);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="similar-card-img-container">
                    <img 
                      src={simProd.imagenes && simProd.imagenes[0]} 
                      alt={simProd.nombre} 
                      className="similar-stage-img"
                    />
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
          </section>
        )}

      </div>

      {/* ==========================================
          MODAL: VISOR DE FICHA TÉCNICA
          ========================================== */}
      {urlFichaActiva && (
        <div className="ficha-modal-overlay" onClick={() => setUrlFichaActiva(null)}>
          <div className="ficha-modal-content" onClick={(e) => e.stopPropagation()}>
            
            <div className="ficha-modal-header">
              <span className="ficha-doc-indicator">
                Ficha Técnica: <span style={{color: '#111827'}}>{selectedProduct.nombre}</span>
              </span>
              <button className="btn-close-ficha" onClick={() => setUrlFichaActiva(null)}>
                <X size={16} />
                <span>Cerrar</span>
              </button>
            </div>
            
            <div className="ficha-iframe-container">
              <iframe 
                src={urlFichaActiva} 
                title="Visor de Ficha Técnica" 
                allow="autoplay" 
                frameBorder="0"
              ></iframe>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}