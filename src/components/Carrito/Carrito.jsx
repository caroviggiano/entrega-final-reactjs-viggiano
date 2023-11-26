import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Checkout from '../../components/CheckOut/CheckOut';
import Swal from 'sweetalert2';

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const history = useHistory();

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
      history.push('/checkout');
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
        <div key={producto.id}>
          <br />
          <h3>{producto.name}</h3>
          <p>Precio unit: ${producto.precio}</p>
          <p>Precio total: ${producto.precio * producto.cantidad}</p>
          <p>Cant: {producto.cantidad}</p>
          <br />
        </div>
      ))}

      { carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
                <div className='lala'>
                    <Link className="menu-link" to="/checkout" onClick={handleFinalizarCompra}>Finalizar compra</Link>
                </div>
                
            </> :
            <h2>El carrito está vacío </h2>
        }
    </div>
  );
};

export default Carrito;
