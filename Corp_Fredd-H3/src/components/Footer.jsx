import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logos/logoh3max.png';
import './Footer.css';

export default function Footer({ navegarA, setActiveCategoryFilter }) {
  return (
    <footer className="main-industrial-footer">
      
      {/* Franja de Confianza */}
      <div className="footer-top-trustbar">
        <div className="trustbar-container">
          <div className="trust-item">
            <ShieldCheck size={20} className="trust-icon" />
            <span>Garantía de Suministro Técnico H3</span>
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
          
          {/* Columna 1: Identidad Corporativa */}
          <div className="footer-brand-column">
            <div className="footer-logo-container">
              <img src={logoImg} alt="Logo Industrias Fredd" className="footer-brand-logo-v2" />
            </div>
            <p className="brand-brief">
              Fábrica 100% peruana especializada en la línea oficial H3 y H3 Max Soluciones en conexiones.
            </p>
          </div>

          {/* Columna 2: Líneas de Catálogo H3 */}
          <div className="footer-links-column">
            <h4 className="footer-col-title">Catálogo H3</h4>
            <ul className="footer-navigation-list">
              <li>
                <button onClick={() => { setActiveCategoryFilter('agua-caliente'); navegarA('productos'); }} className="footer-nav-btn">
                  <ArrowRight size={12} className="arrow-link-icon" />
                  <span>Agua Caliente (PPH)</span>
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveCategoryFilter('agua-fria'); navegarA('productos'); }} className="footer-nav-btn">
                  <ArrowRight size={12} className="arrow-link-icon" />
                  <span>Agua Fría y Desagüe</span>
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveCategoryFilter('tanques'); navegarA('productos'); }} className="footer-nav-btn">
                  <ArrowRight size={12} className="arrow-link-icon" />
                  <span>Tanques y Biodigestores</span>
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveCategoryFilter('electrobombas'); navegarA('productos'); }} className="footer-nav-btn">
                  <ArrowRight size={12} className="arrow-link-icon" />
                  <span>Electrobombas</span>
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
                  <ArrowRight size={12} className="arrow-link-icon" />
                  <span>Acerca de la Fábrica</span>
                </button>
              </li>
              <li>
                <button onClick={() => navegarA('catalogos')} className="footer-nav-btn">
                  <ArrowRight size={12} className="arrow-link-icon" />
                  <span>Catálogos Técnicos PDF</span>
                </button>
              </li>
              <li>
                <button onClick={() => navegarA('contacto')} className="footer-nav-btn">
                  <ArrowRight size={12} className="arrow-link-icon" />
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
                <MapPin size={16} className="card-icon-red" />
                <span className="contact-card-text">Av. Lima N° 120 - Mariano Melgar Arequipa - Arequipa</span>
                <span className="contact-card-text">Av. Circunvalacion Mza 1 Lote 15 Urb. Apiraj - San Roman - Juliaca - Puno</span>
              </div>
              <div className="contact-card-row">
                <Phone size={16} className="card-icon-red" />
                <span className="contact-card-text">+51 950 013 772</span>
              </div>
              <div className="contact-card-row">
                <Mail size={16} className="card-icon-red" />
                <span className="contact-card-text">ventas@grupofredd.com</span>
                <span className="contact-card-text">info@grupofredd.com</span>
              </div>
              <div className="contact-card-row">
                <Clock size={16} className="card-icon-red" />
                <span className="contact-card-text">Lun a Dom: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Franja de Derechos */}
      <div className="footer-bottom-copyright-bar">
        <div className="copyright-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} <span className="copyright-bold">H3MAX</span> Todos los derechos reservados.
          </p>
          <div className="copyright-legal-links">
            <span className="legal-link">Garantía H3</span>
            <span className="legal-divider">|</span>
            <span className="legal-link">Términos Técnicos</span>
          </div>
        </div>
      </div>

    </footer>
  );
}