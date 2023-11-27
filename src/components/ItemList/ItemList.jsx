import React from "react";
import Producto from "./Item";
import { toCapital } from "../../helpers/toCapital";
import "./ItemList.css"; 

const ProductoList = ({ productos, name }) => {
  return (
    <div className="producto-list-container">
      <h2 className="main-title">{toCapital(name)}</h2>

      <div className="productos">
        {productos.map((producto) => (
          <Producto producto={producto} key={producto.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductoList;
