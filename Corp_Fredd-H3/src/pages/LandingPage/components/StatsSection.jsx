import React from 'react';
import { FaCalendarAlt, FaWarehouse, FaShieldAlt, FaFlag } from 'react-icons/fa';
import './StatsSection.css';

const StatsSection = () => {
  return (
    <section className="enterprise-stats-ribbon">
      <div className="stats-horizontal-container">
        
        {/* INDICADOR 1: TRAYECTORIA CORPORATIVA */}
        <div className="horizontal-stat-card card-aura-dark">
          <div className="stat-icon-aura icon-slate">
            <FaCalendarAlt />
          </div>
          <div className="stat-info-pane">
            <div className="stat-huge-number">32 Años</div>
            <h4 className="stat-card-title">Trayectoria Industrial [cite: 26, 27]</h4>
            <p className="stat-card-text">Liderando la fabricación y distribución del sector desde 1994 hasta el 2026[cite: 28].</p>
          </div>
        </div>

        {/* INDICADOR 2: ORIGEN Y PLANTA */}
        <div className="horizontal-stat-card card-aura-red">
          <div className="stat-icon-aura icon-crimson">
            <FaFlag />
          </div>
          <div className="stat-info-pane">
            <div className="stat-huge-number">100%</div>
            <h4 className="stat-card-title">Fábrica Peruana [cite: 31]</h4>
            <p className="stat-card-text">Ingeniería centralizada operada localmente por Industrias Fredd S.A.C[cite: 30, 31].</p>
          </div>
        </div>

        {/* INDICADOR 3: CAPACIDAD DE ALMACÉN */}
        <div className="horizontal-stat-card card-aura-dark">
          <div className="stat-icon-aura icon-slate">
            <FaWarehouse />
          </div>
          <div className="stat-info-pane">
            <div className="stat-huge-number">Inmediato</div>
            <h4 className="stat-card-title">Stock Permanente [cite: 21]</h4>
            <p className="stat-card-text">Abastecimiento de una amplia variedad de productos sanitarios y conexiones[cite: 21].</p>
          </div>
        </div>

        {/* INDICADOR 4: COBERTURA POST-VENTA */}
        <div className="horizontal-stat-card card-aura-red">
          <div className="stat-icon-aura icon-crimson">
            <FaShieldAlt />
          </div>
          <div className="stat-info-pane">
            <div className="stat-huge-number">1 Año</div>
            <h4 className="stat-card-title">Garantía de Fábrica [cite: 24]</h4>
            <p className="stat-card-text">Garantía total post-venta para el respaldo y seguridad en todos tus proyectos[cite: 24].</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;