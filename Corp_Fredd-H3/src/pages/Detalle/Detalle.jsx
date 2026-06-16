import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTOS } from '../../data/products.js';
import TechnicalSheet from './components/TechnicalSheet.jsx';
import RelatedProducts from './components/RelatedProducts.jsx';
import './Detalle.css';

const Detalle = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = PRODUCTOS.find(p => p.id === id);
    setProduct(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="loading-state">Cargando datos maestros de producto...</div>;
  }

  return (
    <div className="product-view-layout">
      <div className="main-info-grid">
        {/* Galería de imágenes */}
        <div className="media-showcase">
          <div className="main-image-frame">
            <img src={product.imagenes[0]} alt={product.nombre} />
          </div>
        </div>

        {/* Detalles comerciales y de marca */}
        <div className="commercial-details">
          <span className="brand-pill">Línea {product.marca}</span>
          <h1 className="product-main-title">{product.nombre}</h1>
          <p className="base-code-label">Código de fábrica: <strong>{product.codigoBase}</strong></p>
          
          <p className="product-narrative-desc">{product.descripcion}</p>

          <div className="features-bullet-box">
            <h3>Características Clave</h3>
            <ul>
              {product.caracteristicas.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </div>

          <button className="cta-adviser-btn" onClick={() => window.open('https://wa.me/tu_numero', '_blank')}>
            Solicitar Cotización Mayorista
          </button>
        </div>
      </div>

      {/* Tabla Técnica Dinámica */}
      <TechnicalSheet arraySpecifications={product.especificaciones} />

      <hr className="layout-divider" />

      {/* Relacionados */}
      <RelatedProducts category={product.categoria} currentId={product.id} />
    </div>
  );
};

export default Detalle;