import React from 'react'

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
      <p className="padd">Alba surgio...... tatatatatatatata </p>
  </div>
)
}


export default AboutPage