//index ao anaty exmeples/tables/salesTABLE/index.js

// SalesTable.js
import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import SalesTableCell from './SalesTableCell';

const SalesTable = ({ title, rows }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Catégorie</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => (
            <tr key={item.id}>
              <SalesTableCell title="Catégorie" content={item.categorie} />
              <SalesTableCell title="Nombre" content={item.nombre} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Add PropTypes validation for 'title'
SalesTable.propTypes = {
  title: PropTypes.string.isRequired,  // Add this line
  rows: PropTypes.array.isRequired,
};

export default SalesTable;
