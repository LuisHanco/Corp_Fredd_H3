import React from 'react';
import { FaCheckCircle, FaAward, FaTools } from 'react-icons/fa';
import './GovernanceSection.css';

const GovernanceSection = () => {
  return (
    <section className="premium-showcase-governance">
      <div className="governance-max-viewport">
        
        {/* PARTE 1: ENCABEZADO ASIMÉTRICO EDITORIAL */}
        <div className="gov-showcase-header">
          <div className="gov-title-wrapper">
            <h2>¡Cuando eres bueno <br /><span className="text-highlight-blue">SE NOTA!</span></h2>
          </div>
          <div className="gov-desc-wrapper">
            <p>
              En Industrias Fredd S.A.C. fabricamos tuberías y conexiones con materia prima 100% virgen, priorizando procesos eficientes que minimizan mermas y descartan el uso de reutilizados. Gracias a nuestra tecnología y eficiencia industrial, reducimos costos operativos sin comprometer la alta calidad estructural de cada componente.
            </p>
          </div>
        </div>

        {/* PARTE 2: PANEL MULTIMEDIA CON ANIMACIÓN DE PULSO DE PLAY */}
        <div className="gov-multimedia-container">
          <div className="media-image-shading"></div>
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80" 
            alt="Infraestructura Fabril de Alta Calidad" 
            className="media-master-img"
          />
          {/* Botón de reproducción interactivo con ondas de pulsación */}
          <button className="video-trigger-fab" aria-label="Ver Video Institucional">
            <div className="fab-pulse-ring-1"></div>
            <div className="fab-pulse-ring-2"></div>
            <div className="fab-triangle-core"></div>
          </button>
        </div>

        {/* PARTE 3: PILARES OUTLINE DE CONTROL */}
        <div className="gov-pillars-outline-grid">
          <div className="pillar-outline-card">
            <div className="pillar-icon-anchor"><FaCheckCircle /></div>
            <p>Somos uno de los fabricantes de sistemas de conducción hidráulica y sanitaria más importantes a nivel nacional.</p>
          </div>
          
          <div className="pillar-outline-card">
            <div className="pillar-icon-anchor"><FaAward /></div>
            <p>Aplicamos lo último en automatización y tecnología para el desarrollo, abastecimiento y progreso de la industria peruana.</p>
          </div>
          
          <div className="pillar-outline-card">
            <div className="pillar-icon-anchor"><FaTools /></div>
            <p>Contamos con la mejor presentación, acabado interno rectificado y matriz de calibración para todos nuestros accesorios.</p>
          </div>
        </div>

        {/* PARTE 4: BLOQUES DE MÉTRICAS MASIVAS DE COLOR SÓLIDO */}
        <div className="gov-metrics-solid-deck">
          <div className="metric-blue-block block-dark-variant">
            <div className="metric-number-string">+15</div>
            <div className="metric-label-string">Distribuidores Estratégicos a Nivel Nacional</div>
          </div>
          
          <div className="metric-blue-block block-bright-variant">
            <div className="metric-number-string">+1000</div>
            <div className="metric-label-string">Especialistas e Instaladores Capacitados</div>
          </div>
          
          <div className="metric-blue-block block-dark-variant">
            <div className="metric-number-string">32 Años</div>
            <div className="metric-label-string">De Trayectoria Industrial Ininterrumpida</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GovernanceSection;