import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/carrito">
         <ShoppingCartRoundedIcon />
         {cantidadEnCarrito() > 0 && (
           <span className="cart-counter">{cantidadEnCarrito()}</span>
         )}
      </Link>
    </div>
  );
};

export default CartWidget;
