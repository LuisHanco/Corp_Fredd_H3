import React from 'react';
import { FaFilePdf, FaCheckCircle, FaDownload } from 'react-icons/fa';
import './DownloadSection.css';

const DownloadSection = () => {
  return (
    <section id="descargas" className="download-section">
      <div className="download-container">
        <div className="download-panel">
          <div className="download-text">
            <div className="pdf-badge"><FaFilePdf /> DOCUMENTACIÓN TÉCNICA OFICIAL</div>
            <h2>Fichas Técnicas y Catálogo General 2026</h2>
            <p>Descargue el documento técnico de control de calidad unificado. Incluye matrices de tolerancia de presión, diámetros de succión/descarga y guías de instalación rápida en obra.</p>
            <div className="param-list">
              <div className="param-item"><FaCheckCircle className="param-icon" /> Stock Permanente Declarado</div>
              <div className="param-item"><FaCheckCircle className="param-icon" /> Certificación de Presión 16 Bar</div>
            </div>
          </div>
          <div className="download-action">
            <a href="#" className="download-btn">
              <FaDownload className="dl-bit-icon" />
              <div className="dl-btn-text">
                <span>Descargar Catálogo Completo</span>
                <small>Formato PDF Industrial — Edición Oficial 2026</small>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;