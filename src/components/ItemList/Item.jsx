import React from 'react';
import { Link } from 'react-router-dom';
import { toCapital } from '../../helpers/toCapital'

const Producto = ( {producto} ) => {
    return (
      <div className="producto">
          <img src={producto.img} alt={producto.name} />
          <div>
              <h4>{producto.name}</h4>
              <hr />
              <p>Precio: ${producto.precio}</p>
              <p>Categoría: {toCapital(producto.category)}</p>
              <Link className="ver-mas" to={`/Producto/${producto.id}`}>Ver más </Link>
          </div>
      </div>
    )
  }
  
  export default Producto