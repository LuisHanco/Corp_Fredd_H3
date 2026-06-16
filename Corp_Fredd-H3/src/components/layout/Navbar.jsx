import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'; // Importamos useNavigate
import { FaPhoneAlt, FaEnvelope, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import logoImg from '../../assets/logos/h3.png';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Inicializamos el enrutador dinámico

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    // Validamos que no envíe espacios vacíos
    if (searchQuery.trim()) {
      // Redirige a la página de productos con el parámetro en la URL
      navigate(`/productos?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(''); // Limpia el input después de buscar
      setIsOpen(false);   // Cierra el menú móvil si estaba abierto
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="master-header-navigation">
      {/* 1. FAJA SUPERIOR DE CONTACTO B2B */}
      <div className="top-contact-bar">
        <div className="top-bar-container">
          <div className="contact-meta-links">
            <a href="tel:+51950013772" className="top-meta-item">
              <FaPhoneAlt className="meta-icon-spacing" />
              <span>+51 950 013 772</span>
            </a>
            <a href="mailto:ventas@industriasfredd.com" className="top-meta-item">
              <FaEnvelope className="meta-icon-spacing" />
              <span>ventas@industriasfredd.com</span>
            </a>
          </div>
          <div className="location-announcement">
            <span>Aquí estamos</span>
          </div>
        </div>
      </div>

      {/* 2. BARRA DE NAVEGACIÓN PRINCIPAL */}
      <nav className="main-navbar-white">
        <div className="navbar-action-container">
          
          <Link to="/" className="brand-identity-block" onClick={closeMenu}>
            <img src={logoImg} alt="Logo Industrias Fredd" className="factory-brand-icon" />
            <div className="brand-text-pane">
              <span className="corporate-title-name">INDUSTRIAS FREDD S.A.C.</span>
              <span className="corporate-subtitle-tag">Fábrica 100% peruana</span>
            </div>
          </Link>

          <button className="mobile-hamburger-btn" onClick={toggleMenu} aria-label="Abrir menú">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`navbar-collapsible-group ${isOpen ? 'menu-state-open' : ''}`}>
            
            {/* El formulario ahora ejecuta la función de redirección real */}
            <form onSubmit={handleSearchSubmit} className="navbar-search-form">
              <input 
                type="text" 
                placeholder="Buscar productos..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-field"
              />
              <button type="submit" className="search-submit-btn" aria-label="Buscar">
                <FaSearch />
              </button>
            </form>

            <div className="navbar-editorial-links">
              <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link-node node-active" : "nav-link-node"}>
                Inicio
              </NavLink>
              <NavLink to="/nosotros" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link-node node-active" : "nav-link-node"}>
                Nosotros
              </NavLink>
              <NavLink to="/productos" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link-node node-active" : "nav-link-node"}>
                Productos
              </NavLink>
              <NavLink to="/catalogos" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link-node node-active" : "nav-link-node"}>
                Catálogos
              </NavLink>
            </div>

            <div className="navbar-cta-wrapper" onClick={closeMenu}>
              <Link to="/contacto" className="btn-cta-orange">
                CONTÁCTANOS
              </Link>
            </div>

          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;