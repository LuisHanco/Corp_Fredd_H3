import React from 'react';
import { ChevronRight, CheckCircle2, Ruler, ShieldAlert, ArrowRight } from 'lucide-react';
// Importamos la base de datos global para las sugerencias automáticas
import { PRODUCTOS } from '../data/products';
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
  
  if (!selectedProduct) return null;

  // 🛡️ Filtro inteligente: busca productos de la misma categoría, excluye el actual y limita a un máximo de 4
  const productosSimilares = PRODUCTOS.filter(
    (p) => p.categoria === selectedProduct.categoria && p.id !== selectedProduct.id
  ).slice(0, 4);

  return (
    <div className="detail-page">
      <div className="detail-container">
        
        {/* ==========================================
            Migas de Pan (Navegación UX)
            ========================================== */}
        <nav className="breadcrumbs-nav">
          <button onClick={() => navegarA('inicio')} className="breadcrumb-link">Inicio</button>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <button onClick={() => navegarA('productos')} className="breadcrumb-link">Catálogo</button>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span className="breadcrumb-current">{selectedProduct.categoria.replace('-', ' ')}</span>
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
              <span className="product-brand-floating-tag">{selectedProduct.marca}</span>
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

          {/* Lado Derecho: Información Comercial */}
          <div className="product-info-side">
            <div className="info-header">
              <span className="technical-badge">Línea de Alta Performance</span>
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
                    <CheckCircle2 size={16} className="bullet-icon-blue" />
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
                Solicitar Cotización por Lote
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
              <Ruler size={16} />
              <span>Tabla de Medidas</span>
            </button>
            <button 
              onClick={() => setActiveTabDetalle('descripcion')} 
              className={`tab-nav-btn ${activeTabDetalle === 'descripcion' ? 'active' : ''}`}
            >
              <ShieldAlert size={16} />
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
                  Todos nuestros accesorios cumplen rigurosamente con los estándares internacionales aplicables para sistemas de alta presión. Se recomienda realizar las uniones mediante termofusión a la temperatura indicada por la normativa del fabricante para garantizar una estanqueidad del 100% en el sistema.
                </p>
                <p>
                  Para proyectos industriales complejos, solicite asistencia técnica directa a nuestro equipo de ingeniería durante la etapa de diseño de sus isométricos.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ==========================================
            NUEVA SECCIÓN: PRODUCTOS SIMILARES (ARQUITECTURA VITRINA)
            ========================================== */}
        {productosSimilares.length > 0 && (
          <section className="similares-section">
            <div className="similares-header">
              <span className="similares-tagline">Sugerencias de la línea</span>
              <h3 className="similares-title">Productos Similares</h3>
              <div className="similares-divider"></div>
              <span className="similares-hint">Desliza para ver más alternativas ➔</span>
            </div>

            <div className="similares-responsive-track">
              {productosSimilares.map((simProd) => (
                <div 
                  key={simProd.id} 
                  className="similar-card-premium"
                  onClick={() => {
                    // 🚀 MEJORA CRÍTICA DE FLUJO: Resetea el índice antes de cambiar de producto
                    setActiveImgIndex(0); 
                    navegarA('producto-detalle', simProd);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {/* Vitrina Estabilizadora Blanca Fija */}
                  <div className="similar-card-img-container">
                    <img 
                      src={simProd.imagenes && simProd.imagenes[0]} 
                      alt={simProd.nombre} 
                      className="similar-stage-img"
                    />
                    <span className="similar-card-brand">{simProd.marca}</span>
                  </div>

                  {/* Chasis de Información con Alineación Simétrica */}
                  <div className="similar-card-info">
                    <span className="similar-card-cat">{simProd.categoria.replace('-', ' ')}</span>
                    <h4 className="similar-product-title-clean" title={simProd.nombre}>{simProd.nombre}</h4>
                    <p className="similar-product-desc-clean">{simProd.descripcion}</p>
                    
                    <div className="similar-card-action-belt">
                      <span className="btn-similar-view">
                        <span>Ver Especificaciones</span>
                        <ArrowRight size={13} className="arrow-similar-motion" />
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}