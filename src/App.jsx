import React, {useState} from "react"
import './App.css'
import Header from './components/Header/Header'
import CardUser from "./components/CardUser/CardUser"

const App = () => {

  const [number, setNumber] = useState(1)
  return(
    <div>
    <div>
      <Header 
            title="Alba Crochet" 
            subtitle="Prendas tejidas a crochet, a mano y con amor" />
      </div>

    <div className="UserSection">
      <CardUser
      name= "Carolina Viggiano"
      date= "Se unio en 2005"
      description="tatatatta"
      img="url"
      />
    </div>
    </div>
  
  )
}
export default App