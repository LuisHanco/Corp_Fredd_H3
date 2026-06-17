import React, { useState, useEffect } from 'react';
import { FileText, Eye, X, Search, ChevronLeft, ChevronRight, Layers, FileDown, HardDrive, Calendar } from 'lucide-react';
import './CatalogosView.css';

export default function CatalogosView({ CATALOGOS }) {
  // --- ESTADOS DE CONTROL ---
  const [activeTab, setActiveTab] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const [urlCatalogoActivo, setUrlCatalogoActivo] = useState(null);

  const ITEMS_POR_PAGINA = 9; // Grid de 3x3 en PC

  // Reset de página si el usuario busca o filtra
  useEffect(() => {
    setPaginaActual(1);
  }, [activeTab, searchQuery]);

  // CATEGORÍAS FIJAS PARA EL SIDEBAR (Para simular escalabilidad futura)
  const tabsDocumentos = [
    { id: 'todos', nombre: 'Todos los Documentos' },
    { id: 'catalogo', nombre: 'Catálogos Oficiales' },
    { id: 'ficha', nombre: 'Fichas Técnicas' },
    { id: 'manual', nombre: 'Manuales de Instalación' },
    { id: 'certificado', nombre: 'Certificados ISO' },
  ];

  // 🔍 FILTRADO INTELIGENTE
  const catalogosFiltrados = CATALOGOS.filter((doc) => {
    // 1. Filtro por Pestaña (Si tuviéramos un campo 'tipo' en el objeto PDF en el futuro)
    // Por ahora, asumiremos que todos caen en 'todos' o simularemos el filtro por la palabra clave en el título
    const coincideTab = activeTab === 'todos' || doc.titulo.toLowerCase().includes(activeTab);
    
    // 2. Filtro por Búsqueda de Usuario
    const coincideBusqueda = doc.titulo.toLowerCase().includes(searchQuery.toLowerCase());
    
    return coincideTab && coincideBusqueda;
  });

  // 📑 SEGMENTACIÓN (Paginación)
  const indexUltimoItem = paginaActual * ITEMS_POR_PAGINA;
  const indexPrimerItem = indexUltimoItem - ITEMS_POR_PAGINA;
  const documentosPaginados = catalogosFiltrados.slice(indexPrimerItem, indexUltimoItem);
  const totalPaginas = Math.ceil(catalogosFiltrados.length / ITEMS_POR_PAGINA);

  // 🛠️ DETECTOR INTELIGENTE DE FUENTE PDF
  const abrirVisor = (urlPdf) => {
    if (!urlPdf) return;
    let url = urlPdf;
    if (url.includes('drive.google.com')) {
      url = url.replace(/\/view\?usp=sharing|\/edit\?usp=sharing|\/view|\/edit/g, '/preview');
    }
    setUrlCatalogoActivo(url);
  };

  return (
    <div className="catalogos-page">
      <div className="catalogos-container">
        
        {/* Encabezado */}
        <div className="catalogos-header">
          <span className="catalogos-tagline">Centro de Documentación</span>
          <h1 className="catalogos-title">Biblioteca Técnica H3</h1>
          <div className="catalogos-divider"></div>
          <p className="catalogos-subtitle">
            Accede a nuestra base de datos centralizada. Consulta fichas técnicas, manuales de instalación y certificaciones de toda la línea industrial H3 y HB Max.
          </p>
        </div>

        {/* LAYOUT PRINCIPAL: SIDEBAR + RESULTADOS */}
        <div className="library-layout">
          
          {/* PANEL IZQUIERDO (SIDEBAR) */}
          <aside className="library-sidebar">
            <h3 className="sidebar-title">Buscador Rápido</h3>
            
            <div className="sidebar-search-box">
              <Search size={16} className="search-icon-lib" />
              <input 
                type="text"
                placeholder="Ej. Codo 90, Tanque..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-lib"
              />
            </div>

            <h3 className="sidebar-title" style={{marginTop: '32px'}}>Clasificación</h3>
            <div className="doc-categories-list">
              {tabsDocumentos.map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`doc-cat-btn ${activeTab === tab.id ? 'active' : ''}`}
                >
                  <span>{tab.nombre}</span>
                  {/* Simulamos un contador dinámico. En la realidad sería: catalogosTotales.filter(...).length */}
                  <span className="doc-count-badge">
                    {tab.id === 'todos' ? CATALOGOS.length : (tab.id === 'catalogo' ? CATALOGOS.length : 0)}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          {/* PANEL DERECHO (GRILLA DE RESULTADOS) */}
          <main className="library-results-area">
            
            <div className="results-top-bar">
              <span className="results-count">
                Mostrando <strong>{documentosPaginados.length}</strong> de <strong>{catalogosFiltrados.length}</strong> documentos
              </span>
            </div>

            {catalogosFiltrados.length > 0 ? (
              <>
                <div className="docs-grid">
                  {documentosPaginados.map((doc) => (
                    <div key={doc.id} className="doc-card">
                      
                      <div className="doc-card-header">
                        <div className="doc-icon-box">
                          <FileText size={24} strokeWidth={2} />
                        </div>
                        <div className="doc-info">
                          <span className="doc-format-tag">Documento PDF</span>
                          <h4 className="doc-title" title={doc.titulo}>{doc.titulo}</h4>
                        </div>
                      </div>

                      <div className="doc-metadata">
                        <div className="meta-item">
                          <HardDrive size={14} />
                          <span>{doc.tamano || 'Desconocido'}</span>
                        </div>
                        <div className="meta-item">
                          <Calendar size={14} />
                          <span>Edición {doc.fecha || 'Actual'}</span>
                        </div>
                      </div>

                      <button 
                        onClick={() => abrirVisor(doc.enlacePdf || doc.enlaceDrive)} 
                        className="btn-open-doc"
                      >
                        <Eye size={16} />
                        <span>Abrir Visor</span>
                      </button>

                    </div>
                  ))}
                </div>

                {/* PAGINACIÓN */}
                {totalPaginas > 1 && (
                  <div className="pagination-controls">
                    <button 
                      onClick={() => setPaginaActual(prev => Math.max(prev - 1, 1))}
                      disabled={paginaActual === 1}
                      className="page-nav-btn"
                    >
                      <ChevronLeft size={16} />
                      <span>Anterior</span>
                    </button>
                    
                    <span className="page-indicator">
                      Página <span>{paginaActual}</span> de <span>{totalPaginas}</span>
                    </span>

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
              /* ESTADO VACÍO */
              <div className="no-docs-box">
                <Layers size={48} className="no-docs-icon" />
                <h4 className="no-docs-title">No hay documentos disponibles</h4>
                <p className="no-docs-text">Prueba ajustando el filtro lateral o cambiando el término de búsqueda.</p>
              </div>
            )}

          </main>

        </div>
      </div>

      {/* MODAL VISOR A PANTALLA COMPLETA */}
      {urlCatalogoActivo && (
        <div className="catalogos-modal-overlay" onClick={() => setUrlCatalogoActivo(null)}>
          <div className="catalogos-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-control-bar">
              <span className="modal-doc-indicator">
                Visor de Documentos <span style={{color: '#111827'}}>— Industrias Fredd</span>
              </span>
              <button className="btn-close-modal" onClick={() => setUrlCatalogoActivo(null)}>
                <X size={16} />
                <span>Cerrar</span>
              </button>
            </div>
            <div className="modal-iframe-container">
              <iframe 
                src={urlCatalogoActivo} 
                title="Visor de PDF H3" 
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