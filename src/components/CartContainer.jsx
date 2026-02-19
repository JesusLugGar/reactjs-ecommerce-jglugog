import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartView from "./CartView";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
  const { cart } = useContext(CartContext);

  return <>{cart.length ? <CartView /> : <EmptyCart />}</>;
};

export default CartContainer;
