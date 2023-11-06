import { Link } from "react-router-dom";
import { Menu, MenuProducto } from "@mui/material";
import { useState } from "react";
import "./NavBar.css";

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
          <MenuProducto onClick={handleMenuClose}>
            <Link to="/Category/Ropa">Ropa</Link>
          </MenuProducto>
          <MenuProducto onClick={handleMenuClose}>
            <Link to="/Category/Accesorio">Accesorios</Link>
          </MenuProducto>
          <MenuProducto onClick={handleMenuClose}>
            <Link to="/Category/Decoración">Decoración</Link>
          </MenuProducto>
        </Menu>
      </ul>
    </nav>
  );
};

export default NavBar;
