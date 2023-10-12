import { Link } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import "./NavBar.css";
/* import CartWidget from "../CartWidget/CartWidget"; */

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
          Contacto
        </Link>
        <div className="li" onClick={handleMenuClick}>
          Categorías
        </div>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link to="/Category/Ropa">Ropa</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/Category/Accesorio">Accesorios</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/Category/Decoración">Decoración</Link>
          </MenuItem>
        </Menu>
      </ul>
    </nav>
  );
};

export default NavBar;
