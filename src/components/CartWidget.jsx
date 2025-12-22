import { IoCartOutline } from "react-icons/io5";
import Badge from 'react-bootstrap/Badge';


const CartWidget = () => {
  return (
    <div className="cart-widget">
        <IoCartOutline className="cart-icon" aria-label="carrito de compras" />
        <Badge bg="danger">2</Badge>
    </div>
        
  )
};

export default CartWidget;