import { Link } from "react-router-dom";
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Home
        </Link>
        <Link className="li" to="/About">
          About
        </Link>
        <Link className="li" to="/Contact">
          Contact
        </Link>
        <Link className="li" to="/Category/Accesorio">
       {/*  <CartWidget/> */}
       Accesorio
        </Link>
        <Link className="li" to="/Category/Decoración">
       {/*  <CartWidget/> */}
       Decoración
        </Link>

      </ul>
    </nav>
  );
};

export default NavBar;