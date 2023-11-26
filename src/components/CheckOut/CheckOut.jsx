
import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase/firebaseConfig';
import { CartContext } from '../../context/CartContext';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const realizarCompra = async (data) => {
    try {
      const pedido = {
        cliente: data,
        productos: carrito,
        total: precioTotal(),
      };

      const pedidosRef = collection(db, "pedidos");
      const docRef = await addDoc(pedidosRef, pedido);

      setPedidoId(docRef.id);
      vaciarCarrito();

      // Agregar alerta de compra exitosa
      Swal.fire({
        icon: 'success',
        title: '¡Compra exitosa!',
        text: 'Gracias por tu compra. Tu pedido ha sido procesado con éxito.',
      });
    } catch (error) {
      console.error("Error al realizar la compra:", error);
   
      Swal.fire({
        icon: 'error',
        title: 'Error en la compra',
        text: 'Hubo un problema al procesar tu compra. Por favor, inténtalo nuevamente.',
      });
    }
  };

  useEffect(() => {
    if (pedidoId) {
      
      history.push(`/gracias/${pedidoId}`);
    }
  }, [pedidoId, history]);

  return (
    <div className="container">
      {pedidoId ? (
        <div>
          <h1 className="main-title">¡Muchas gracias por tu compra!</h1>
          <p>Tu número de pedido es: {pedidoId}</p>
        </div>
      ) : (
        <div className="container">
          <h1 className="main-title">Finalizar compra</h1>
          <form className="formulario" onSubmit={handleSubmit(realizarCompra)}>
            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre", { required: true })} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email", { required: true })} />
            <input type="tel" placeholder="Ingresá tu teléfono" {...register("telefono", { required: true })} />
            <button className="enviar" type="submit">
              Comprar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
