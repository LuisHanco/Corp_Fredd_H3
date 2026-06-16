import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/productos/${product.id}`} className="corporate-product-card">
      <div className="card-image-wrapper">
        <img src={product.imagenes[0]} alt={product.nombre} className="product-thumb" />
        <span className="badge-brand-tag">{product.marca}</span>
      </div>
      <div className="card-content-wrapper">
        <span className="sku-text-code">SKU base: {product.codigoBase}</span>
        <h3>{product.nombre}</h3>
        <span className="card-action-anchor">Ver Especificaciones Técnicas →</span>
      </div>
    </Link>
  );
};

export default ProductCard;