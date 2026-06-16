import React from 'react';
import { Link } from 'react-router-dom';
import { FaWater, FaTools, FaCogs } from 'react-icons/fa';
import './MatrixSection.css';

const MatrixSection = () => {
  return (
    <section className="matrix-section">
      <div className="matrix-container">
        <div className="matrix-header">
          <span className="subtitle-accent">Divisiones Especializadas</span>
          <h2>Líneas de Producción HB & HB MAX</h2>
          <p>Sistemas acoplables de alto rendimiento diseñados para optimizar el transporte y almacenamiento seguro de agua.</p>
        </div>
        <div className="matrix-cards-grid">
          <div className="matrix-card">
            <div className="matrix-media">
              <img src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80" alt="Agua Caliente" />
              <div className="matrix-icon"><FaWater /></div>
            </div>
            <div className="matrix-body">
              <span className="matrix-tag">Línea HB — Conducción</span>
              <h3>Accesorios para Agua Caliente PPH</h3>
              <p>Variedad de codos, tees y uniones en polipropileno de alta densidad con rosca BSPT. Baja conductividad térmica y resistencia absoluta a corrientes parásitas y galvánicas.</p>
              <Link to="/productos" className="matrix-link">Especificaciones de Conducción →</Link>
            </div>
          </div>
          <div className="matrix-card">
            <div className="matrix-media">
              <img src="https://images.unsplash.com/photo-1542013936693-8848e5742383?auto=format&fit=crop&w=600&q=80" alt="Desagüe" />
              <div className="matrix-icon"><FaTools /></div>
            </div>
            <div className="matrix-body">
              <span className="matrix-tag">Línea HB — Saneamiento</span>
              <h3>Accesorios para Desagüe PVC</h3>
              <p>Componentes de PVC-U predial desagüe con acabado semibrillante que optimiza el flujo interno. Instalación rápida por cementación para uniones 100% libres de fugas.</p>
              <Link to="/productos" className="matrix-link">Especificaciones de Saneamiento →</Link>
            </div>
          </div>
          <div className="matrix-card">
            <div className="matrix-media">
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80" alt="Bombeo" />
              <div className="matrix-icon"><FaCogs /></div>
            </div>
            <div className="matrix-body">
              <span className="matrix-tag">Línea HB MAX — Bombeo</span>
              <h3>Electrobombas y Presurización</h3>
              <p>Sistemas periféricos, centrífugos y sumergibles tipo lápiz con tecnología coreana avanzada. Motores de alta durabilidad con bobinado 100% de cobre puro.</p>
              <Link to="/productos" className="matrix-link">Especificaciones de Bombeo →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatrixSection;