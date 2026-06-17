import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
// 1. Modificamos la ruta al nuevo archivo Logo2.png
import logoImg from '../assets/logos/Logo2.png';
import './Footer.css';

export default function Footer({ navegarA, setActiveCategoryFilter }) {
  return (
    <footer className="main-industrial-footer">
      
      {/* Franja de Confianza */}
      <div className="footer-top-trustbar">
        <div className="trustbar-container">
          <div className="trust-item">
            <ShieldCheck size={20} className="trust-icon" />
            <span>Garantía de Suministro Técnico de Fábrica</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="trust-highlight">Atención Nacional:</span>
            <span>Envíos rápidos a todo el Perú</span>
          </div>
        </div>
      </div>

      {/* Cuerpo Principal del Footer */}
      <div className="footer-main-content">
        <div className="footer-grid-wrapper">
          
          {/* Columna 1: Identidad Corporativa (Optimizada para Responsive) */}
          <div className="footer-brand-column">
            <div className="footer-logo-container">
              {/* Añadimos una clase específica para controlar el nuevo logo */}
              <img src={logoImg} alt="Logo Industrias Fredd" className="footer-brand-logo-v2" />
              {/* <div className="brand-text-wrapper">
                <span className="brand-name">INDUSTRIAS FREDD</span>
                <span className="brand-legal">S.A.C.</span>
              </div> */}
            </div>
            <p className="brand-brief">
              Fábrica 100% peruana especializada en el suministro, importación y distribución de conexiones industriales de alta resistencia y soluciones termoplásticas de alta performance.
            </p>
          </div>

          {/* Columna 2: Líneas de Catálogo */}
          <div className="footer-links-column">
            <h4 className="footer-col-title">Nuestras Líneas</h4>
            <ul className="footer-navigation-list">
              <li>
                <button onClick={() => { setActiveCategoryFilter('accesorios-pph'); navegarA('productos'); }} className="footer-nav-btn">
                  <ArrowRight size={10} className="arrow-link-icon" />
                  <span>HB - Accesorios PPH</span>
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveCategoryFilter('termoplasticos'); navegarA('productos'); }} className="footer-nav-btn">
                  <ArrowRight size={10} className="arrow-link-icon" />
                  <span>STORICK - Termoplásticos</span>
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveCategoryFilter('conexiones'); navegarA('productos'); }} className="footer-nav-btn">
                  <ArrowRight size={10} className="arrow-link-icon" />
                  <span>HINOX - Conexiones Inox</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Enlaces Corporativos */}
          <div className="footer-links-column">
            <h4 className="footer-col-title">Corporativo</h4>
            <ul className="footer-navigation-list">
              <li>
                <button onClick={() => navegarA('nosotros')} className="footer-nav-btn">
                  <ArrowRight size={10} className="arrow-link-icon" />
                  <span>Acerca de Nosotros</span>
                </button>
              </li>
              <li>
                <button onClick={() => navegarA('catalogos')} className="footer-nav-btn">
                  <ArrowRight size={10} className="arrow-link-icon" />
                  <span>Catálogos Técnicos PDF</span>
                </button>
              </li>
              <li>
                <button onClick={() => navegarA('contacto')} className="footer-nav-btn">
                  <ArrowRight size={10} className="arrow-link-icon" />
                  <span>Formulario de Contacto</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 4: Planta y Ventas */}
          <div className="footer-contact-column">
            <h4 className="footer-col-title">Planta y Ventas</h4>
            <div className="footer-contact-card">
              <div className="contact-card-row">
                <MapPin size={16} className="card-icon-orange" />
                <span className="contact-card-text">Jr. Cahuide N° 656, Juliaca - Perú</span>
              </div>
              <div className="contact-card-row">
                <Phone size={16} className="card-icon-orange" />
                <span className="contact-card-text">+51 (01) 480-1234</span>
              </div>
              <div className="contact-card-row">
                <Mail size={16} className="card-icon-orange" />
                <span className="contact-card-text">ventas@industriasfredd.com</span>
              </div>
              <div className="contact-card-row">
                <Clock size={16} className="card-icon-orange" />
                <span className="contact-card-text">Lun a Vie: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Franja de Derechos */}
      <div className="footer-bottom-copyright-bar">
        <div className="copyright-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} <span className="copyright-bold">INDUSTRIAS FREDD S.A.C.</span> Todos los derechos reservados.
          </p>
          <div className="copyright-legal-links">
            <span className="legal-link">Garantía de Calidad</span>
            <span className="legal-divider">|</span>
            <span className="legal-link">Términos Técnicos</span>
          </div>
        </div>
      </div>

    </footer>
  );
}