import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ContactPage = () => {
    const { register, handleSubmit } = useForm();

    const enviar = (data) => {

        console.log(data);

        Swal.fire({
            icon: 'success',
            title: 'Formulario enviado con éxito',
            text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
        });
    };

    return (
        <div className="container">
            <h1 className="main-title">Contacto</h1>
            <hr />
            <p className="padd">Si tienes alguna duda, no dudes en consultarnos</p>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder="Ingresa tu nombre" {...register('nombre')} />
                <input type="email" placeholder="Ingresa tu e-mail" {...register('email')} />
                <input type="tel" placeholder="Ingresa tu teléfono" {...register('telefono')} />
                <button className="enviar" type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default ContactPage;
