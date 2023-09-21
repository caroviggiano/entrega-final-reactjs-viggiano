import React from 'react'
import "./NavBar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CartWidget from "../CartWidget/CartWidget"

 const NavBar = () => {
  return (
    <nav> 
    <ul>
        <li>Home</li>
        <li>Contacto</li>
        <li>About</li>
        <li> <CartWidget/> </li>
    </ul>
    </nav>
  )
}

export default NavBar
