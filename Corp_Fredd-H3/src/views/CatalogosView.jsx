import React, { useState, useEffect } from 'react';
import { Search, X, FileText, Calendar, HardDrive, Eye, Layers, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import './CatalogosView.css';

export default function CatalogosView({ CATALOGOS }) {
  // --- Estados ---
  const [activeFilter, setActiveFilter] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const [urlModal, setUrlModal] = useState(null);

  const ITEMS_POR_PAGINA = 9;

  // Resetea paginación al filtrar
  useEffect(() => { setPaginaActual(1); }, [activeFilter, searchQuery]);

  // Filtros dinámicos (Píldoras)
  const filters = [
    { id: 'todos', label: 'Todos los Archivos' },
    { id: 'catalogo', label: 'Catálogos' },
    { id: 'ficha', label: 'Fichas Técnicas' },
    { id: 'manual', label: 'Instalación' }
  ];

  // Lógica de Filtrado
  const documentosFiltrados = CATALOGOS.filter((doc) => {
    const matchFiltro = activeFilter === 'todos' || doc.titulo.toLowerCase().includes(activeFilter);
    const matchBusqueda = doc.titulo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFiltro && matchBusqueda;
  });

  // Paginación
  const indexUltimoItem = paginaActual * ITEMS_POR_PAGINA;
  const indexPrimerItem = indexUltimoItem - ITEMS_POR_PAGINA;
  const documentosPaginados = documentosFiltrados.slice(indexPrimerItem, indexUltimoItem);
  const totalPaginas = Math.ceil(documentosFiltrados.length / ITEMS_POR_PAGINA);

  // Helper de Paginación
  const getPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPaginas; i++) {
      pages.push(i);
    }
    return pages;
  };

  // Visor Seguro
  const abrirPDF = (url) => {
    if (!url) return;
    let safeUrl = url.includes('drive.google.com') 
      ? url.replace(/\/view\?usp=sharing|\/edit\?usp=sharing|\/view|\/edit/g, '/preview') 
      : url;
    setUrlModal(safeUrl);
  };

  return (
    <div className="resource-center-page">
      
      {/* 1. HEADER HERO */}
      <header className="rc-header">
        <div className="rc-header-content">
          <span className="rc-badge">
            <BookOpen size={14} /> Centro de Recursos
          </span>
          <h1 className="rc-title">Documentación Técnica</h1>
          <p className="rc-subtitle">
            Base de datos oficial de Industrias Fredd S.A.C. Encuentra manuales, especificaciones y certificaciones de nuestra línea H3 y HB Max.
          </p>
        </div>
      </header>

      {/* 2. BARRA DE BÚSQUEDA FLOTANTE */}
      <div className="rc-search-wrapper">
        <div className="rc-search-box">
          <Search size={20} className="rc-search-icon" />
          <input 
            type="text" 
            placeholder="Buscar documento por título o código..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rc-search-input"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="rc-search-clear">
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* 3. CONTENIDO PRINCIPAL */}
      <main className="rc-main">
        
        {/* Chips de Filtrado Horizontal */}
        <div className="rc-filters">
          {filters.map((f) => (
            <button 
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`rc-filter-chip ${activeFilter === f.id ? 'active' : ''}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grilla de Resultados */}
        {documentosFiltrados.length > 0 ? (
          <>
            <div className="rc-grid">
              {documentosPaginados.map(doc => (
                <div key={doc.id} className="rc-card">
                  
                  <div className="rc-card-header">
                    <div className="rc-card-icon">
                      <FileText size={24} />
                    </div>
                    <div className="rc-card-meta">
                      <span className="rc-card-tag">{doc.categoria || 'PDF Oficial'}</span>
                      <h3 className="rc-card-title">{doc.titulo}</h3>
                    </div>
                  </div>

                  <div className="rc-card-details">
                    <div className="rc-detail-item">
                      <HardDrive size={14} /> {doc.tamano || 'N/A'}
                    </div>
                    <div className="rc-detail-item">
                      <Calendar size={14} /> {doc.fecha || 'Vigente'}
                    </div>
                  </div>

                  <div className="rc-card-actions">
                    <button onClick={() => abrirPDF(doc.enlacePdf || doc.enlaceDrive)} className="rc-btn-view">
                      <Eye size={16} /> Ver Documento
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Controles de Paginación */}
            {totalPaginas > 1 && (
              <div className="rc-pagination">
                <button 
                  className="rc-page-btn" 
                  disabled={paginaActual === 1}
                  onClick={() => setPaginaActual(p => p - 1)}
                >
                  <ChevronLeft size={18} />
                </button>

                {getPageNumbers().map(num => (
                  <button 
                    key={num}
                    className={`rc-page-btn ${paginaActual === num ? 'active' : ''}`}
                    onClick={() => setPaginaActual(num)}
                  >
                    {num}
                  </button>
                ))}

                <button 
                  className="rc-page-btn" 
                  disabled={paginaActual === totalPaginas}
                  onClick={() => setPaginaActual(p => p + 1)}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </>
        ) : (
          /* Estado Vacío */
          <div className="rc-empty-state">
            <Layers size={64} className="rc-empty-icon" strokeWidth={1} />
            <h3 className="rc-empty-title">Sin resultados</h3>
            <p className="rc-empty-text">No pudimos encontrar documentos para "{searchQuery}".</p>
            <button onClick={() => { setSearchQuery(''); setActiveFilter('todos'); }} className="rc-btn-reset">
              Ver todo el catálogo
            </button>
          </div>
        )}
      </main>

      {/* 4. MODAL VISOR DE DOCUMENTO */}
      {urlModal && (
        <div className="rc-modal-overlay" onClick={() => setUrlModal(null)}>
          <div className="rc-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="rc-modal-header">
              <h4 className="rc-modal-title">Visor Técnico</h4>
              <button className="rc-btn-close" onClick={() => setUrlModal(null)}>
                <X size={18} />
              </button>
            </div>
            <div className="rc-modal-body">
              <iframe src={urlModal} title="Visor PDF" allow="autoplay" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}