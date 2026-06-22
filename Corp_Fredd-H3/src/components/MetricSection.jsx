import React from 'react';
import './MetricSection.css';

export default function MetricSection() {
  return (
    <section className="metrics-banner">
      <div className="metrics-banner-container">
        
        <div className="metric-box">
          <span className="metric-number">32</span>
          <h4 className="metric-label">Años de Trayectoria</h4>
          <p className="metric-sub">Fábrica 100% peruana operando desde 1994 hasta 2026.</p>
        </div>

        <div className="metric-box border-sides">
          <span className="metric-number">+100</span>
          <h4 className="metric-label">Stock Permanente</h4>
          <p className="metric-sub">Amplia variedad de productos y accesorios con entrega inmediata.</p>
        </div>

        <div className="metric-box">
          <span className="metric-number">1</span>
          <h4 className="metric-label">Año de Garantía</h4>
          <p className="metric-sub">Excelente relación calidad-precio y garantía de 1 año post-venta.</p>
        </div>

      </div>
    </section>
  );
}