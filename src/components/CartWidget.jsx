import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { IoCartOutline } from "react-icons/io5";
import Badge from 'react-bootstrap/Badge';


const CartWidget = () => {

  const { cart } = useContext(CartContext);

  // la cantidad de productos que me apareceran en el icono con esta funcion y metodo "reduce"
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget">
        <IoCartOutline className="cart-icon" aria-label="carrito de compras" />
        <Badge bg="danger">{totalQuantity}</Badge>
    </div>
        
  )
};

export default CartWidget;