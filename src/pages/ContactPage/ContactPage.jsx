import { useForm } from "react";

const ContactPage = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (

    <div className="container">
        <h1 className="main-title">Contacto</h1>
        <hr />
        <p className="padd">Si tenes alguna duda no dudes en consultarnos</p>
        <form className="formulario" onSubmit={handleSubmit(enviar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Enviar</button>

        </form>
    </div>

  )
}
export default ContactPage