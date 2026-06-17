import React, { useState, useEffect } from 'react';
import { FileText, Eye, X, Search, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { CATEGORIAS } from '../data/products';
import './CatalogosView.css';

export default function CatalogosView({ CATALOGOS }) {
  // --- ESTADOS DE CONTROL ---
  const [activeCategory, setActiveCategory] = useState('todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const [urlCatalogoActivo, setUrlCatalogoActivo] = useState(null);

  const ITEMS_POR_PAGINA = 6;

  // Reiniciar a la página 1 automáticamente al cambiar filtros o escribir
  useEffect(() => {
    setPaginaActual(1);
  }, [activeCategory, searchQuery]);

  // 🔍 FILTRADO INTELIGENTE ESCALABLE
  const catalogosFiltrados = CATALOGOS.filter((cat) => {
    const matchesCategory = activeCategory === 'todas' || cat.categoria === activeCategory;
    const matchesSearch = cat.titulo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 📑 SEGMENTACIÓN MATEMÁTICA DE LA PAGINACIÓN
  const indexUltimoItem = paginaActual * ITEMS_POR_PAGINA;
  const indexPrimerItem = indexUltimoItem - ITEMS_POR_PAGINA;
  const catalogosPaginados = catalogosFiltrados.slice(indexPrimerItem, indexUltimoItem);
  const totalPaginas = Math.ceil(catalogosFiltrados.length / ITEMS_POR_PAGINA);

  // 🛠️ DETECTOR INTELIGENTE DE FUENTE PDF
  const obtenerEnlaceIncrustable = (url) => {
    if (!url) return '';
    
    // Si el enlace pertenece a Google Drive, convertimos la ruta de edición en vista previa
    if (url.includes('drive.google.com')) {
      return url.replace(/\/view\?usp=sharing|\/edit\?usp=sharing|\/view|\/edit/g, '/preview');
    }
    
    // Si es un enlace directo de tu hosting (ej. https://corpfredd.com/pdfs/archivo.pdf), se pasa directo
    return url;
  };

  return (
    <div className="catalogos-page">
      <div className="catalogos-container">
        
        {/* Encabezado Principal */}
        <div className="catalogos-header">
          <span className="catalogos-tagline">Centro de Documentación</span>
          <h1 className="catalogos-title">Fichas y Catálogos Técnicos</h1>
          <div className="catalogos-divider"></div>
          <p className="catalogos-subtitle">
            Consulte especificaciones de componentes, normativas y manuales de instalación en tiempo real desde nuestro visor integrado.
          </p>
        </div>

        {/* Panel de Control General (Buscador + Filtros de Línea) */}
        <div className="catalog-toolbar">
          <div className="catalog-internal-search-box">
            <Search size={18} className="catalog-search-icon" />
            <input 
              type="text"
              placeholder="Buscar catálogo por palabra clave (Ej. PAVCO, BOSCH...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="catalog-search-input-field"
            />
          </div>
          
          <div className="categories-filter-wrapper">
            <div className="categories-filter-bar">
              <button 
                onClick={() => setActiveCategory('todas')}
                className={`filter-btn ${activeCategory === 'todas' ? 'active' : ''}`}
              >
                Todos los Catálogos
              </button>
              {CATEGORIAS.map((cat) => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                >
                  {cat.nombre}
                </button>
              ))}
            </div>
          </div>

          <div className="toolbar-controls">
            <span className="results-counter">
              Resultados encontrados: <strong>{catalogosFiltrados.length}</strong> documentos técnicos
            </span>
          </div>
        </div>

        {/* Grilla de Catálogos */}
        {catalogosFiltrados.length > 0 ? (
          <>
            <div className="catalogos-cards-grid">
              {catalogosPaginados.map((cat) => (
                <div key={cat.id} className="pdf-document-card-clean">
                  
                  <div className="pdf-card-main-content">
                    <div className="pdf-icon-frame-large">
                      <FileText size={32} />
                    </div>
                    
                    <div className="pdf-text-details">
                      <span className="pdf-year-meta-tag">{cat.fecha || 'VIGENTE'}</span>
                      <h4 className="pdf-title-clean">{cat.titulo}</h4>
                      <p className="pdf-size-meta">Tamaño del archivo: <strong>{cat.tamano}</strong></p>
                    </div>
                  </div>

                  {/* Bloque de Acción Flexible */}
                  <div className="pdf-card-footer-action">
                    <button 
                      onClick={() => setUrlCatalogoActivo(obtenerEnlaceIncrustable(cat.enlacePdf || cat.enlaceDrive))} 
                      className="btn-view-pdf-premium"
                    >
                      <Eye size={14} />
                      <span>Visualizar Documento</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* Paginación Digital */}
            {totalPaginas > 1 && (
              <div className="pagination-container">
                <button 
                  onClick={() => setPaginaActual(prev => Math.max(prev - 1, 1))}
                  disabled={paginaActual === 1}
                  className="page-nav-btn"
                >
                  <ChevronLeft size={16} />
                  <span>Anterior</span>
                </button>
                <div className="page-numbers-group">
                  {[...Array(totalPaginas)].map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setPaginaActual(i + 1)}
                      className={`page-number-btn ${paginaActual === i + 1 ? 'active' : ''}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setPaginaActual(prev => Math.min(prev + 1, totalPaginas))}
                  disabled={paginaActual === totalPaginas}
                  className="page-nav-btn"
                >
                  <span>Siguiente</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-results-box-catalogos">
            <Layers size={36} className="no-results-icon-decor" />
            <h4>Sin documentos disponibles</h4>
            <p>No se encontraron catálogos vigentes que coincidan con los criterios de búsqueda aplicados.</p>
          </div>
        )}

      </div>

      {/* Visor Modal de Misma Pestaña */}
      {urlCatalogoActivo && (
        <div className="catalogos-modal-overlay" onClick={() => setUrlCatalogoActivo(null)}>
          <div className="catalogos-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-control-bar">
              <span className="modal-doc-indicator">Visor Técnico Certificado</span>
              <button className="btn-close-modal" onClick={() => setUrlCatalogoActivo(null)}>
                <X size={16} />
                <span>Cerrar Visor</span>
              </button>
            </div>
            <div className="modal-iframe-container">
              <iframe src={urlCatalogoActivo} title="Visor de Catálogos" allow="autoplay" frameBorder="0"></iframe>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}