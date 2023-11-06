import { toCapital } from "../../helpers/toCapital";
import ProductoCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";



const ProductoDetail = ( {Producto} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < Producto.stock && setCantidad(cantidad + 1)
    }

  return (
    <div className="container">
        <div className="producto-detalle">
            <img src={Producto.imagen} alt={Producto.titulo} />
            <div>
                <h3 className="titulo">{Producto.titulo}</h3>
                <p className="descripcion">{Producto.descripcion}</p>
                <p className="categoria">Categoría: {toCapital(Producto.categoria)}</p>
                <p className="precio">${Producto.precio}</p>
                <ProductoCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(Producto, cantidad) }}
                />
            </div>
        </div>
    </div>
  )
}
export default ProductoDetail