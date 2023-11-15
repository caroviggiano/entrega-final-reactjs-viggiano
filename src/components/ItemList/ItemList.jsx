import React from "react";
import Producto from "./Item";
import { toCapital } from "../../helpers/toCapital";

const ProductoList = ({ productos, name }) => {
  return (
    <div className="container">
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
