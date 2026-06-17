import React, { useState } from 'react';
import { FileText, Eye, X, ShieldCheck, Download } from 'lucide-react';
import './CatalogosView.css';

export default function CatalogosView({ CATALOGOS }) {
  const [urlCatalogoActivo, setUrlCatalogoActivo] = useState(null);

  // Al ser un portal exclusivo, tomamos directamente el documento oficial H3 (el primero del array CATALOGOS)
  const catalogoOficial = CATALOGOS && CATALOGOS.length > 0 ? CATALOGOS[0] : null;

  // Detector inteligente para enlaces (Google Drive / Directo)
  const abrirVisor = () => {
    if (!catalogoOficial) return;
    let url = catalogoOficial.enlacePdf || catalogoOficial.enlaceDrive || '';
    
    // Si el enlace pertenece a Google Drive, convertimos la ruta de edición en vista previa
    if (url.includes('drive.google.com')) {
      url = url.replace(/\/view\?usp=sharing|\/edit\?usp=sharing|\/view|\/edit/g, '/preview');
    }
    setUrlCatalogoActivo(url);
  };

  return (
    <div className="catalogos-page">
      <div className="catalogos-container">
        
        <div className="single-catalog-card">
          {/* Lado Visual */}
          <div className="catalog-visual-side">
            <div className="catalog-icon-huge">
              <FileText size={80} strokeWidth={1.5} />
            </div>
          </div>

          {/* Lado de Información */}
          <div className="catalog-info-side">
            <span className="catalog-tagline">Edición Oficial 2026</span>
            <h1 className="catalog-title">Catálogo de Productos H3</h1>
            
            <p className="catalog-description">
              Consulte todas nuestras especificaciones técnicas, normativas de instalación y portafolio completo de accesorios para agua caliente, desagüe, tanques y electrobombas HB Max. Documentación certificada por Industrias Fredd S.A.C.
            </p>

            <div className="catalog-features">
              <div className="feature-pill">
                <ShieldCheck size={20} className="feature-icon" />
                <span>Normativas ISO & DIN</span>
              </div>
              <div className="feature-pill">
                <Download size={20} className="feature-icon" />
                <span>Visualización en PDF</span>
              </div>
            </div>

            <div className="catalog-actions">
              <button onClick={abrirVisor} className="btn-open-viewer" disabled={!catalogoOficial}>
                <Eye size={18} />
                <span>Abrir Visor PDF</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Visor Modal de Pantalla Completa */}
      {urlCatalogoActivo && (
        <div className="catalogos-modal-overlay" onClick={() => setUrlCatalogoActivo(null)}>
          <div className="catalogos-modal-content" onClick={(e) => e.stopPropagation()}>
            
            <div className="modal-control-bar">
              <span className="modal-doc-indicator">Visor Técnico: Catálogo H3 2026</span>
              <button className="btn-close-modal" onClick={() => setUrlCatalogoActivo(null)}>
                <X size={16} />
                <span>Cerrar Visor</span>
              </button>
            </div>
            
            <div className="modal-iframe-container">
              <iframe 
                src={urlCatalogoActivo} 
                title="Visor de Catálogo Oficial H3" 
                allow="autoplay" 
                frameBorder="0"
              ></iframe>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}