import React from 'react';
import { Search, Menu, X, Phone, Mail } from 'lucide-react';
import logoImg from '../assets/logos/h3.png';
import './Header.css';

export default function Header({ currentPage, navegarA, searchQuery, setSearchQuery, handleSearch, mobileMenuOpen, setMobileMenuOpen }) {
  
  // Función auxiliar para navegar y cerrar el menú móvil al mismo tiempo
  const navegarDesdeMovil = (ruta) => {
    navegarA(ruta);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/* Barra superior informativa (Color Rojo HB) */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-contact">
            <span className="contact-item">
              <Phone size={14} className="icon-top" />
              <span>+51 950 013 772</span>
            </span>
            <span className="contact-item hide-mobile">
              <Mail size={14} className="icon-top" />
              <span>ventas@grupofredd.com</span>
              <span>info@grupofredd.com</span>
            </span>
          </div>
          <div className="top-bar-tagline">
            <span>Catálogo Oficial H3</span>
          </div>
        </div>
      </div>

      {/* Navegación Principal */}
      <div className="main-nav-container">
        {/* Bloque Logotipo e Identidad */}
        <div className="header-logo-block" onClick={() => navegarA('inicio')}>
          <img src={logoImg} alt="Logo Industrias Fredd" className="header-logo-img" />
          <div className="header-text-block">
            {/* <span className="brand-title">INDUSTRIAS FREDD S.A.C</span> */}
            <span className="brand-subtitle">Fábrica 100% peruana</span>
          </div>
        </div>

        {/* Buscador de escritorio */}
        <form onSubmit={handleSearch} className="header-search-form hide-mobile">
          <input 
            type="text" 
            placeholder="Buscar productos H3..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-submit-btn">
            <Search size={18} />
          </button>
        </form>

        {/* Menú de enlaces de escritorio */}
        <nav className="desktop-menu">
          <button onClick={() => navegarA('inicio')} className={`menu-link ${currentPage === 'inicio' ? 'active' : ''}`}>Inicio</button>
          <button onClick={() => navegarA('nosotros')} className={`menu-link ${currentPage === 'nosotros' ? 'active' : ''}`}>Nosotros</button>
          <button onClick={() => navegarA('productos')} className={`menu-link ${currentPage === 'productos' ? 'active' : ''}`}>Productos</button>
          <button onClick={() => navegarA('catalogos')} className={`menu-link ${currentPage === 'catalogos' ? 'active' : ''}`}>Catálogos</button>
          <button onClick={() => navegarA('contacto')} className="btn-contact-submit">Contáctanos</button>
        </nav>

        {/* Botón menú móvil */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-menu-toggle">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {mobileMenuOpen && (
        <div className="mobile-menu-dropdown">
          <button onClick={() => navegarDesdeMovil('inicio')} className="mobile-menu-link">Inicio</button>
          <button onClick={() => navegarDesdeMovil('nosotros')} className="mobile-menu-link">Nosotros</button>
          <button onClick={() => navegarDesdeMovil('productos')} className="mobile-menu-link">Productos</button>
          <button onClick={() => navegarDesdeMovil('catalogos')} className="mobile-menu-link">Catálogos</button>
          <button onClick={() => navegarDesdeMovil('contacto')} className="mobile-menu-btn-contact">Contáctanos</button>
        </div>
      )}
    </header>
  );
}