import React, { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {

      const clickear = () => {
        console.log("Click");
      }
  
      window.addEventListener("click", clickear)
  
      return () => {
        window.removeEventListener("click", clickear)
      }
  
    }, [])
return (
  <div className="container">
    <h1 className="main-title">¿Cómo surgió Alba?</h1>
      <hr />
      <p className="padd">
<br /> Hola, soy Alba Crochet, y quiero compartir mi historia contigo. Soy el fruto del amor y la dedicación de Brenda, una emprendedora apasionada que decidió honrar la memoria de su amada abuela, Alba, a través de las delicadas puntadas del crochet. <br />
<br />Todo comenzó cuando Brenda encontró un pañuelo de crochet que su abuela Alba había tejido especialmente para ella. Fue como un tesoro que desató una chispa en el corazón de Brenda. En ese momento, nació la idea de dar vida a un proyecto que llevaría el nombre de Alba Crochet, en honor a esa mujer extraordinaria que tejía con amor.<br />
<br />Desde entonces, Alba Crochet se convirtió en un rincón donde las prendas se tejen con más que solo lana y aguja. Cada bufanda, gorro, manta y sweater que creamos lleva consigo la esencia de la paciencia y el cariño que Alba plasma en sus propias creaciones. Pero no nos quedamos solo en la tradición; mi misión es llevar esa conexión especial a cada persona a través de prendas personalizadas.<br />
<br /> La gente de toda la Argentina aprecia la autenticidad y la calidad que ofrecemos. Cada prenda no es solo un objeto, sino una historia que se teje con hilos de nostalgia y amor. A través de Brenda y su empeño, logramos compartir el legado de Alba, celebrando su vida en cada creación.<br />
<br />Hoy en día, Alba Crochet es más que un emprendimiento; somos un recordatorio tangible de la conexión entre generaciones, del arte del crochet y del amor por la creación artesanal. Cada nudo que tejemos es una expresión de nuestra pasión, y cada prenda que creamos es un pedacito de historia que lleva consigo el sello distintivo de Alba Crochet. <br />
 </p>
  </div>
)
}


export default AboutPage