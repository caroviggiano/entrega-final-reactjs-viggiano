import React from 'react';
import './ItemCount.css';

const ProductoCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
  return (
    <div>
      <div className="Producto-count">
        <button onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}>+</button>
      </div>
      <button className="agregar-al-carrito" onClick={handleAgregar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductoCount;
