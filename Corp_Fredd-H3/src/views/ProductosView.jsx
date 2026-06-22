import React, { useState, useEffect } from 'react';
import { Info, ChevronLeft, ChevronRight, ArrowRight, Search } from 'lucide-react';
import { CATEGORIAS } from '../data/products';
import './ProductosView.css';

export default function ProductosView({ 
  productosFiltrados, 
  activeCategoryFilter, 
  setActiveCategoryFilter, 
  navegarA, 
  resetFiltros, 
  searchQuery, 
  setSearchQuery 
}) {
  
  const [orden, setOrden] = useState('alfabetico');
  const [paginaActual, setPaginaActual] = useState(1);
  
  // 6 productos es la cantidad perfecta para mantener una navegación relajada y ligera[cite: 11]
  const PRODUCTOS_POR_PAGINA = 6; 

  // Regresar automáticamente a la página 1 ante cualquier filtro o búsqueda[cite: 11]
  useEffect(() => {
    setPaginaActual(1);
  }, [activeCategoryFilter, searchQuery, productosFiltrados.length]);

  // 1. Ordenamiento de ítems[cite: 11]
  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (orden === 'alfabetico') return a.nombre.localeCompare(b.nombre);
    if (orden === 'reverso') return b.nombre.localeCompare(a.nombre);
    return 0;
  });

  // 2. Segmentación Matemática para la Numeración (Paginación)[cite: 11]
  const indexUltimoProducto = paginaActual * PRODUCTOS_POR_PAGINA;
  const indexPrimerProducto = indexUltimoProducto - PRODUCTOS_POR_PAGINA;
  const productosPaginados = productosOrdenados.slice(indexPrimerProducto, indexUltimoProducto);
  const totalPaginas = Math.ceil(productosOrdenados.length / PRODUCTOS_POR_PAGINA);

  return (
    <div className="productos-page">
      <div className="productos-container">
        
        {/* Encabezado Principal */}
        <div className="page-header">
          <span className="page-subtitle-calm">Línea Oficial H3</span>
          <h1 className="page-title">Catálogo de Productos</h1>
          <div className="title-divider"></div>
        </div>

        {/* ==========================================
            Panel Superior de Control (Diseño Limpio)
            ========================================== */}
        <div className="catalog-toolbar">
          
          {/* Caja de Búsqueda Minimalista */}
          <div className="catalog-internal-search-box">
            <Search size={18} className="catalog-search-icon" />
            <input 
              type="text"
              placeholder="Buscar tuberías, válvulas, electrobombas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="catalog-search-input-field"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="catalog-clear-search-btn" title="Limpiar búsqueda">
                ×
              </button>
            )}
          </div>
          
          {/* Selector Deslizable de Categorías */}
          <div className="categories-filter-wrapper">
            <div className="categories-filter-bar">
              <button 
                onClick={() => setActiveCategoryFilter('todas')}
                className={`filter-btn ${activeCategoryFilter === 'todas' ? 'active' : ''}`}
              >
                Todos los productos
              </button>
              {CATEGORIAS.map((cat) => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveCategoryFilter(cat.id)}
                  className={`filter-btn ${activeCategoryFilter === cat.id ? 'active' : ''}`}
                >
                  {cat.nombre}
                </button>
              ))}
            </div>
          </div>

          {/* Información de estado y ordenamiento */}
          <div className="toolbar-controls">
            <span className="results-counter">
              Mostrando del <strong>{productosFiltrados.length === 0 ? 0 : indexPrimerProducto + 1}</strong> al <strong>{Math.min(indexUltimoProducto, productosFiltrados.length)}</strong> de <strong>{productosFiltrados.length}</strong> artículos
            </span>
            <div className="sort-control">
              <select value={orden} onChange={(e) => setOrden(e.target.value)} className="sort-select">
                <option value="alfabetico">Filtrar: A - Z</option>
                <option value="reverso">Filtrar: Z - A</option>
              </select>
            </div>
          </div>
        </div>

        {/* ==========================================
            Grilla Exclusiva de Tarjetas Sincronizadas
            ========================================== */}
        {productosFiltrados.length > 0 ? (
          <>
            <div className="products-catalog-grid">
              {productosPaginados.map((prod) => (
                <div key={prod.id} className="catalog-product-card">
                  
                  {/* Vitrina de Exhibición con tamaño idéntico unificado */}
                  <div className="card-image-wrapper">
                    <img 
                      src={prod.imagenes && prod.imagenes[0]} 
                      alt={prod.nombre} 
                      className="catalog-product-img" 
                    />
                    {/* <span className="catalog-brand-badge">{prod.marca}</span> */}
                  </div>

                  {/* Bloque Descriptivo con Flex-Grow de balance simétrico */}
                  <div className="catalog-card-content">
                    <div className="catalog-card-meta">
                      <span className="catalog-category-tag">{prod.categoria.replace('-', ' ').toUpperCase()}</span>
                      <h4 className="catalog-product-title" title={prod.nombre}>{prod.nombre}</h4>
                      <p className="catalog-product-desc">{prod.descripcion}</p>
                    </div>

                    <button onClick={() => navegarA('producto-detalle', prod)} className="btn-view-details">
                      <span>Ver Ficha Técnica</span>
                      <ArrowRight size={14} className="arrow-details-motion" />
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* ==========================================
                Numeración de Páginas (Paginación Premium)
                ========================================== */}
            {totalPaginas > 1 && (
              <div className="pagination-container">
                <button 
                  onClick={() => setPaginaActual(prev => Math.max(prev - 1, 1))}
                  disabled={paginaActual === 1}
                  className="page-nav-btn"
                  aria-label="Página anterior"
                >
                  <ChevronLeft size={16} />
                  <span className="hide-on-mobile">Anterior</span>
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
                  aria-label="Siguiente página"
                >
                  <span className="hide-on-mobile">Siguiente</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-results-box">
            <Info size={40} className="no-results-icon" />
            <h3 className="no-results-title">Búsqueda sin coincidencias</h3>
            <p>No pudimos encontrar el artículo solicitado en la línea H3.</p>
            <button onClick={resetFiltros} className="btn-reset-filters">
              Restablecer Filtros
            </button>
          </div>
        )}

      </div>
    </div>
  );
}