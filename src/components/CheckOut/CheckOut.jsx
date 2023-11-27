import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase/firebaseConfig';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './CheckOut.css';

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };

    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido)
      .then((doc) => {
        setPedidoId(doc.id);
        vaciarCarrito();

        Swal.fire({
          icon: 'success',
          title: '¡Compra exitosa!',
          text: 'Gracias por tu compra. Tu pedido ha sido procesado con éxito.',
        });
      });
  };

  if (pedidoId) {
    return (
      <div className="container">
        <h1 className="main-title">Muchas gracias por tu compra!</h1>
        <p>Tu número de pedido es: {pedidoId}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="main-title">Finalizar compra</h1>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
        <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
        <input type="tel" placeholder="Ingresá tu teléfono" {...register("telefono")} />
        <button className="enviar" type="submit">Comprar</button>
      </form>
    </div>
  );
};

export default Checkout;