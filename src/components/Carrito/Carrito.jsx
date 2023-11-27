import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';
import './Carrito.css';

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const navigate = useNavigate();

  const handleVaciar = () => {
    if (carrito.length > 0) {
      vaciarCarrito();
      Swal.fire({
        icon: 'success',
        title: 'Carrito vaciado',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: 'info',
        title: 'El carrito ya está vacío',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleFinalizarCompra = () => {
    if (carrito.length > 0) {
      navigate('/checkout');
    } else {
      Swal.fire({
        icon: 'info',
        title: 'El carrito está vacío',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {carrito.map((producto) => (
        <div className="producto" key={producto.id}>
          <h3>{producto.name}</h3>
          <p>Precio unit: ${producto.precio}</p>
          <p>Precio total: ${producto.precio * producto.cantidad}</p>
          <p>Cant: {producto.cantidad}</p>
        </div>
      ))}

      {carrito.length > 0 ? (
        <>
          <h2 className="precio-total">Precio total: ${precioTotal()}</h2>
          <div className="botones-carrito">
            <button
              className="vaciar-carrito"
              onClick={handleVaciar}
            >
              Vaciar
            </button>
            <Link
              className="finalizar-compra"
              to="/checkout"
              onClick={handleFinalizarCompra}
            >
              Finalizar compra
            </Link>
          </div>
        </>
      ) : (
        <h2>El carrito está vacío </h2>
      )}
    </div>
  );
};

export default Carrito;