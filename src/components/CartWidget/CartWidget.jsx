import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const CartWidget = () => {

  return (
    <div>
      <Link className="menu-link" to="/carrito">
         <ShoppingCartRoundedIcon />
      </Link>
    </div>
  );
};

export default CartWidget;
