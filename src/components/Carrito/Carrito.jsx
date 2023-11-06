import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

        {
            carrito.map((producto) => (
                <div key={producto.id}>
                    <br />
                    <h3>{producto.titulo}</h3>
                    <p>Precio unit: ${producto.precio}</p>
                    <p>Precio total: ${producto.precio * producto.cantidad}</p>
                    <p>Cant: {producto.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
                <div className='lala'>
                    <Link className="menu-link" to="/checkout">Finalizar compra</Link>
                </div>
                
            </> :
            <h2>El carrito está vacío </h2>
        }

    </div>
  )
}

export default Carrito