import React from 'react';
// Importamos su propio CSS tradicional
import './MetricSection.css';

export default function MetricSection() {
  return (
    <section className="metrics-banner">
      <div className="metrics-banner-container">
        
        <div className="metric-box">
          <span className="metric-number color-red">+5</span>
          <h4 className="metric-label">Certificaciones de Calidad</h4>
          <p className="metric-sub">Garantizamos conformidad con estándares internacionales ANSI, ISO y DIN.</p>
        </div>

        <div className="metric-box border-sides">
          <span className="metric-number color-blue">+101</span>
          <h4 className="metric-label">Productos Disponibles</h4>
          <p className="metric-sub">Contamos con un amplio portafolio de accesorios y conexiones con stock real.</p>
        </div>

        <div className="metric-box">
          <span className="metric-number color-orange">+52</span>
          <h4 className="metric-label">Años de Exp. Combinada</h4>
          <p className="metric-sub">Experiencia de nuestro equipo directivo liderando proyectos industriales.</p>
        </div>

      </div>
    </section>
  );
}