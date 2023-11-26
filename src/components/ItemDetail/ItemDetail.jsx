import { toCapital } from "../../helpers/toCapital";
import ProductoCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2"; 

const ProductoDetail = ({ Producto }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    setCantidad((prevCantidad) => Math.max(1, prevCantidad - 1));
  };

  const handleSumar = () => {
    setCantidad((prevCantidad) => {
      const newCantidad = prevCantidad + 1;
      return Producto.stock ? Math.min(Producto.stock, newCantidad) : newCantidad;
    });
  };

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(Producto, cantidad);

    Swal.fire({
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500, 
    });
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={Producto.img} alt={Producto.name} />
        <div>
          <h3 className="name">{Producto.name}</h3>
          <p className="descripcion">{Producto.description}</p>
          <p className="categoria">Categoría: {toCapital(Producto.category)}</p>
          <p className="precio">${Producto.precio}</p>
          <ProductoCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={handleAgregarAlCarrito}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductoDetail;

