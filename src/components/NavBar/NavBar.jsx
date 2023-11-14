import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Button } from '@mui/material';
import "./Navbar.css";


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar">
    <Link to="/" className="logo">
        <h1>Alba Crochet</h1>
    </Link>
    <ul className="menu">
        <li>
            <Link className="menu-link" to="/">
                Home
            </Link>
        </li>
        <li>
            <Link className="menu-link" to="/About">
                About
            </Link>
        </li>
        <li>
            <Link className="menu-link" to="/Contact">
                Contacto
            </Link>
        </li>
        <li>
            <Button className="menu-link" onClick={handleClick}>
                Productos
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem>
                    <Link to="/Category/Ropa" className="submenu-link">
                        Ropa
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/Category/Accesorio" className="submenu-link">
                        Accesorios
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/Category/Decoración" className="submenu-link">
                        Decoración
                    </Link>
                </MenuItem>
            </Menu>
        </li>
    </ul>
</nav>

  );
};

export default Navbar;