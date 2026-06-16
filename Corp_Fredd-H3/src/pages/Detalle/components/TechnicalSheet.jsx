import React from 'react';
import './TechnicalSheet.css';

const TechnicalSheet = ({ arraySpecifications }) => {
  if (!arraySpecifications || arraySpecifications.length === 0) return null;

  // Extrae dinámicamente los encabezados basados en las propiedades del primer objeto
  const headers = Object.keys(arraySpecifications[0]);

  return (
    <div className="technical-sheet-wrapper">
      <h3 className="table-section-title">Variantes y Especificaciones de Control de Calidad</h3>
      <div className="table-scroll-container">
        <table className="dynamic-matrix-table">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header.replace(/_/g, ' ')}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {arraySpecifications.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header) => (
                  <td key={header} data-label={header}>
                    {row[header] || '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechnicalSheet;