import React from 'react';
import { X, Loader2, CheckCircle } from 'lucide-react';
import './CotizacionModal.css';

export default function CotizacionModal({ 
  cotizacionModalOpen, setCotizacionModalOpen, cotizadorForm, setCotizadorForm, 
  enviadoCotizacionExito, submitCotizacion, enviandoCotizacion 
}) {
  if (!cotizacionModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-window-card">
        
        <button onClick={() => setCotizacionModalOpen(false)} className="modal-close-round-btn">
          <X size={18} />
        </button>

        <h3 className="modal-window-title">Cotización Oficial H3</h3>

        {enviadoCotizacionExito ? (
          <div className="modal-success-screen">
            <CheckCircle className="success-huge-icon" size={56} />
            <h4 className="success-msg-title">¡Solicitud Procesada!</h4>
            <p className="success-msg-text">
              Tu requerimiento ha sido derivado a nuestro especialista de la línea H3. Recibirás tu propuesta formal en PDF a tu correo.
            </p>
          </div>
        ) : (
          <form onSubmit={submitCotizacion} className="modal-form-body">
            
            <div className="modal-form-row">
              <div className="modal-input-group">
                <label>Producto H3</label>
                <input type="text" readOnly value={cotizadorForm.producto} className="modal-ctrl disabled-ctrl" />
              </div>
              <div className="modal-input-group">
                <label>Medida Técnica *</label>
                <input type="text" required value={cotizadorForm.medida} onChange={(e) => setCotizadorForm({ ...cotizadorForm, medida: e.target.value })} className="modal-ctrl" placeholder="Ej: 1/2&quot;, 3/4&quot;" />
              </div>
            </div>

            <div className="modal-form-row">
              <div className="modal-input-group">
                <label>Cantidad Solicitada *</label>
                <input type="number" required min="1" value={cotizadorForm.cantidad} onChange={(e) => setCotizadorForm({ ...cotizadorForm, cantidad: e.target.value })} className="modal-ctrl" />
              </div>
              <div className="modal-input-group">
                <label>WhatsApp Directo *</label>
                <input type="tel" required value={cotizadorForm.telefono} onChange={(e) => setCotizadorForm({ ...cotizadorForm, telefono: e.target.value })} className="modal-ctrl" placeholder="987654321" />
              </div>
            </div>

            <div className="modal-input-group">
              <label>Nombre del Solicitante *</label>
              <input type="text" required value={cotizadorForm.nombre} onChange={(e) => setCotizadorForm({ ...cotizadorForm, nombre: e.target.value })} className="modal-ctrl full-width-ctrl" placeholder="Tu nombre completo o Razón Social" />
            </div>

            <div className="modal-input-group">
              <label>Correo de Respuesta *</label>
              <input type="email" required value={cotizadorForm.correo} onChange={(e) => setCotizadorForm({ ...cotizadorForm, correo: e.target.value })} className="modal-ctrl full-width-ctrl" placeholder="solicitante@empresa.com" />
            </div>

            <div className="modal-action-footer">
              <button type="submit" disabled={enviandoCotizacion} className="btn-modal-submit-action">
                {enviandoCotizacion ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Generando Cotización...</span>
                  </>
                ) : (
                  <span>Enviar Solicitud de Precios</span>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}