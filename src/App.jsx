import React, {useState} from "react"
import './App.css'
import Header from './components/Header/Header'
import CardUser from "./components/CardUser/CardUser"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

const App = () => {

  const [number, setNumber] = useState(1)
  return(
    <div>
    <div>
      <Header 
            title="Alba Crochet" 
            subtitle="Prendas tejidas a crochet, a mano y con amor" />
    </div>

    <NavBar/>
    <ItemListContainer/>
    <div className="UserSection">
      <CardUser
      name= "Ramo de flores"
      date= "Especial por el dia de la primavera!"
      description=" Incluye: 1 girasol, 3 tulipanes y 2 chocolates."
      img= './src/components/img/ramo-girasoles.jpg'
      />
       <CardUser
      name= "Gorrito"
      date= "Ideal para el invierno!"
      description="Pedilo en el color que quieras"
      img= "./src/components/img/gorritos.jpg"
      />
       <CardUser
      name= "Mini Bag"
      date= "Arma tu look ideal!"
      description=" Pedilo en el color que quieras."
      img= "./src/components/img/mini-bags.jpg"
      />
    </div>

    <div className="CounterSection">
      <p>{number}</p>
    </div>

    </div>
  
  )
}
export default App