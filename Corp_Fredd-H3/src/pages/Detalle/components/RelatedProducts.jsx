import React from 'react';
import { PRODUCTOS } from '../../../data/products.js';
import ProductCard from '../../../components/ui/ProductCard.jsx';
import './RelatedProducts.css';

const RelatedProducts = ({ category, currentId }) => {
  // Filtra los que pertenecen a la misma línea pero excluye al producto actual (máximo 4)
  const items = PRODUCTOS
    .filter(p => p.categoria === category && p.id !== currentId)
    .slice(0, 4);

  if (items.length === 0) return null;

  return (
    <div className="related-outer-box">
      <h3 className="related-title-heading">Otros productos de esta misma línea</h3>
      <div className="related-items-flexgrid">
        {items.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;