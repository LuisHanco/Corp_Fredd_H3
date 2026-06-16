import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTOS } from '../../data/products.js';
import { FaSearch, FaChevronDown, FaChevronLeft, FaChevronRight, FaFilePdf } from 'react-icons/fa';
import './ProductsPage.css';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navbarQuery = searchParams.get('search') || ''; 

  // ESTADOS DE CONTROL
  const [localSearch, setLocalSearch] = useState('');
  const [activeBrand, setActiveBrand] = useState('TODOS');
  const [sortBy, setSortBy] = useState('A-Z');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Al ser filas compactas, podemos mostrar 10 por página limpiamente

  const marcasPills = ["TODOS", "H3", "HB MAX", "DUROXA", "STORCK", "HINOX", "DIAMOND"];

  useEffect(() => {
    if (navbarQuery) {
      setLocalSearch(navbarQuery);
      setActiveBrand('TODOS');
      setCurrentPage(1);
    }
  }, [navbarQuery]);

  const handleLocalSearchChange = (e) => {
    setLocalSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleBrandChange = (brand) => {
    setActiveBrand(brand);
    setCurrentPage(1);
    if (navbarQuery) setSearchParams({});
  };

  const productosFiltrados = PRODUCTOS.filter(producto => {
    const nombre = producto.nombre.toUpperCase();
    const matchesSearch = nombre.includes(localSearch.toUpperCase());
    
    let matchesBrand = true;
    if (activeBrand !== 'TODOS') {
      matchesBrand = producto.categoria === activeBrand || nombre.includes(activeBrand);
    }
    return matchesSearch && matchesBrand;
  });

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    return sortBy === 'A-Z' ? a.nombre.localeCompare(b.nombre) : b.nombre.localeCompare(a.nombre);
  });

  const totalItems = productosOrdenados.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const itemsActuales = productosOrdenados.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="premium-row-catalog">
      <div className="catalog-ledger-viewport">
        
        {/* ENCABEZADO */}
        <header className="ledger-catalog-header">
          <span className="ledger-meta-sub">SUMINISTROS CERTIFICADOS // EDICIÓN CORPORATIVA</span>
          <h1>Catálogo de Componentes</h1>
          <div className="brand-orange-line"></div>
        </header>

        {/* CONSOLA DE BÚSQUEDA */}
        <div className="ledger-search-console">
          <div className="console-search-field">
            <FaSearch className="console-search-icon" />
            <input 
              type="text" 
              placeholder="Buscar por código, pieza o especificación técnica..." 
              value={localSearch}
              onChange={handleLocalSearchChange}
            />
          </div>
          <div className="console-brands-row">
            {marcasPills.map(brand => (
              <button
                key={brand}
                className={`brand-pill-btn ${activeBrand === brand ? 'brand-pill-active' : ''}`}
                onClick={() => handleBrandChange(brand)}
              >
                {brand === "TODOS" ? "Todos los productos" : brand}
              </button>
            ))}
          </div>
        </div>

        {/* METADATOS BAR */}
        <div className="ledger-metadata-bar">
          <div className="metadata-counter-string">
            Registro <strong>{totalItems === 0 ? 0 : indexOfFirstItem + 1}</strong> al <strong>{Math.min(indexOfLastItem, totalItems)}</strong> de <strong>{totalItems}</strong> componentes analizados
          </div>
          <div className="metadata-sort-dropdown">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="ledger-select-element">
              <option value="A-Z">Ordenar: A-Z</option>
              <option value="Z-A">Ordenar: Z-A</option>
            </select>
            <FaChevronDown className="dropdown-arrow-icon" />
          </div>
        </div>

        {/* CONTENEDOR DE FILAS HORIZONTALES (LEDGER GRID) */}
        <div className="ledger-rows-stack">
          {itemsActuales.map(producto => (
            <div key={producto.id} className="catalog-horizontal-row">
              
              {/* Bloque 1: Imagen única estandarizada con fondo blanco pulido */}
              <div className="row-asset-box">
                <img src={producto.imagen || producto.img} alt={producto.nombre} className="row-master-img" />
              </div>

              {/* Bloque 2: Información de ingeniería alineada horizontalmente */}
              <div className="row-intellectual-data">
                <span className="row-brand-badge">H3</span>
                <div className="row-title-alignment">
                  <h3 className="row-product-title">{producto.nombre}</h3>
                  <span className="row-spec-badge">Clase 10 / Conducción</span>
                </div>
              </div>

              {/* Bloque 3: Acción de descarga técnica a la derecha */}
              <div className="row-action-area">
                <button className="row-ficha-btn">
                  <span>FICHA TÉCNICA</span>
                  <FaFilePdf className="row-pdf-icon" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* PAGINACIÓN */}
        {totalPages > 1 && (
          <div className="ledger-pagination-deck">
            <button 
              className={`pagination-arrow-btn ${currentPage === 1 ? 'disabled-btn' : ''}`}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <FaChevronLeft /> <span>ANTERIOR</span>
            </button>
            <div className="pagination-numbers-cluster">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                <button
                  key={num}
                  className={`pagination-number-item ${currentPage === num ? 'number-item-active' : ''}`}
                  onClick={() => setCurrentPage(num)}
                >
                  {num}
                </button>
              ))}
            </div>
            <button 
              className={`pagination-arrow-btn ${currentPage === totalPages ? 'disabled-btn' : ''}`}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <span>SIGUIENTE</span> <FaChevronRight />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductsPage;