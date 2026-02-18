import React from "react";
import { Link } from "react-router-dom";
import '../css/EmptyCart.css'

const EmptyCart = () => {
  return (
    <div className="cart-empty-container">
      <img
        src="../empty_cart.png"
        alt="Carrito vacío"
        className="cart-empty-img"
      />

      <h2 className="mt-3">Tu Carro está vacío</h2>
      <p className="text-muted">
        Te invitamos a ver nuestro catálogo de productos.
      </p>

      <Link to="/" className="btn-primary-custom mt-3">
        Ir a Home
      </Link>
    </div>
  );
};

export default EmptyCart;
