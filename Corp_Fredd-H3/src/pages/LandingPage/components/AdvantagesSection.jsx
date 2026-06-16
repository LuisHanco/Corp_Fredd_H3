import React from 'react';
import { FaWarehouse, FaAward, FaUserCheck, FaShieldAlt, FaTruck, FaCheckCircle } from 'react-icons/fa';
import './AdvantagesSection.css';

const AdvantagesSection = () => {
  return (
    <section className="enterprise-advantages-area">
      <div className="advantages-split-grid">
        
        {/* BLOQUE IZQUIERDO: COLUMNA EDITORIAL FIJA */}
        <div className="advantages-sticky-editorial">
          <div className="advantages-corporate-badge">
            <FaCheckCircle className="badge-check-lead" />
            <span>VENTAJA OPERATIVA B2B</span>
          </div>
          <h2>¿Por Qué Elegirnos como Socio Técnico?</h2>
          <p>
            Garantizamos la continuidad y el suministro de tus obras e inventarios mediante procesos de control rígidos, acompañamiento de ingeniería en campo y una infraestructura de distribución ágil a nivel nacional.
          </p>
          <div className="industrial-accent-line"></div>
        </div>

        {/* BLOQUE DERECHO: REJILLA DE VALOR ESCALONADA */}
        <div className="advantages-nodes-column">
          
          {/* NODO 1: STOCK PERMANENTE */}
          <div className="advantage-executive-card">
            <div className="advantage-icon-frame icon-slate-glow">
              <FaWarehouse />
            </div>
            <div className="advantage-text-pane">
              <h4>Variedad y Stock Permanente</h4>
              <p>Contamos con una amplia variedad de productos con stock permanente en nuestros almacenes principales para atención inmediata[cite: 1].</p>
            </div>
          </div>

          {/* NODO 2: CALIDAD PRECIO */}
          <div className="advantage-executive-card">
            <div className="advantage-icon-frame icon-crimson-glow">
              <FaAward />
            </div>
            <div className="advantage-text-pane">
              <h4>Excelente Relación Calidad - Precio</h4>
              <p>Optimizamos costes de manufactura directa para ofrecer un equilibrio financiero altamente competitivo en tus presupuestos[cite: 1].</p>
            </div>
          </div>

          {/* NODO 3: ASESORES */}
          <div className="advantage-executive-card">
            <div className="advantage-icon-frame icon-slate-glow">
              <FaUserCheck />
            </div>
            <div className="advantage-text-pane">
              <h4>Presencia Directa de Asesores</h4>
              <p>Brindamos la presencia directa de nuestros asesores comerciales para soporte técnico, cubicación y atención personalizada en obra[cite: 1].</p>
            </div>
          </div>

          {/* NODO 4: GARANTÍA */}
          <div className="advantage-executive-card">
            <div className="advantage-icon-frame icon-crimson-glow">
              <FaShieldAlt />
            </div>
            <div className="advantage-text-pane">
              <h4>Garantía de 1 Año Post-Venta</h4>
              <p>Respaldamos la calidad de todos nuestros componentes mecánicos y equipos con una cobertura total de 1 año post-venta[cite: 1].</p>
            </div>
          </div>

          {/* NODO 5: LOGÍSTICA VELOZ */}
          <div className="advantage-executive-card">
            <div className="advantage-icon-frame icon-slate-glow">
              <FaTruck />
            </div>
            <div className="advantage-text-pane">
              <h4>Entrega más Rápida del Mercado</h4>
              <p>Operamos con un sistema de despacho automatizado y prioritario para asegurar la entrega más rápida del mercado de suministros[cite: 1].</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AdvantagesSection;