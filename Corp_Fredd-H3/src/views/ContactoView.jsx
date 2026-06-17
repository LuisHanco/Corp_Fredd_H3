import React from 'react';
import { Phone, Mail, Clock, CheckCircle, Send, Loader2 } from 'lucide-react';
import './ContactoView.css';

export default function ContactoView({ 
  contactoForm, 
  setContactoForm, 
  enviadoContactoExito, 
  submitContacto, 
  enviandoContacto 
}) {
  return (
    <div className="contacto-page">
      <div className="contacto-container">
        
        {/* Encabezado de página original con clases refinadas */}
        <div className="page-header">
          <span className="page-subtitle-tag">Canal de Atención Directa</span>
          <h1 className="page-title">Contáctanos</h1>
          <div className="title-divider"></div>
        </div>

        <div className="contacto-split-layout">
          
          {/* Bloque Izquierdo Canales */}
          <div className="channels-sidebar-card">
            <h3 className="sidebar-card-title">Canales Directos</h3>
            <div className="channels-rows-list">
              
              <div className="sidebar-contact-row">
                <div className="icon-wrapper-accent">
                  <Phone size={18} className="sidebar-icon-blue" />
                </div>
                <div>
                  <span className="row-label">Central de Ventas:</span>
                  <span className="row-value">+51 (01) 480-1234</span>
                </div>
              </div>

              <div className="sidebar-contact-row">
                <div className="icon-wrapper-accent">
                  <Mail size={18} className="sidebar-icon-blue" />
                </div>
                <div>
                  <span className="row-label">Correo Electrónico:</span>
                  <span className="row-value">ventas@industriasfredd.com</span>
                </div>
              </div>

              <div className="sidebar-contact-row">
                <div className="icon-wrapper-accent">
                  <Clock size={18} className="sidebar-icon-blue" />
                </div>
                <div>
                  <span className="row-label">Horario Operativo:</span>
                  <span className="row-value">Lun a Vie: 8:00 AM - 6:00 PM</span>
                </div>
              </div>

            </div>
          </div>

          {/* Bloque Derecho Formulario */}
          <div className="form-main-card">
            {enviadoContactoExito ? (
              <div className="alert-success-box">
                <CheckCircle className="success-check-icon" size={20} />
                <span>¡Mensaje Enviado con Éxito! Nos comunicaremos en breve.</span>
              </div>
            ) : (
              <form onSubmit={submitContacto} className="interactive-contact-form">
                
                <div className="form-group">
                  <label>Nombre Completo *</label>
                  <input 
                    type="text" 
                    placeholder="Ej: Juan Pérez" 
                    required 
                    className="form-ctrl" 
                    value={contactoForm.nombre} 
                    onChange={(e) => setContactoForm({ ...contactoForm, nombre: e.target.value })} 
                  />
                </div>

                <div className="form-group">
                  <label>Correo Electrónico *</label>
                  <input 
                    type="email" 
                    placeholder="juan@empresa.com" 
                    required 
                    className="form-ctrl" 
                    value={contactoForm.email} 
                    onChange={(e) => setContactoForm({ ...contactoForm, email: e.target.value })} 
                  />
                </div>

                <div className="form-group">
                  <label>Mensaje o Requerimiento Técnico *</label>
                  <textarea 
                    placeholder="Escribe aquí los materiales que necesitas..." 
                    required 
                    rows="4" 
                    className="form-ctrl text-area-ctrl" 
                    value={contactoForm.mensaje} 
                    onChange={(e) => setContactoForm({ ...contactoForm, mensaje: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" disabled={enviandoContacto} className="btn-submit-contact-form">
                  {enviandoContacto ? (
                    <Loader2 className="animate-spin" size={16} />
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}