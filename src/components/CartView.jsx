import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../css/CartView.css";

const CartView = () => {
  const { cart, removeItem, clearCart, totalPrice, totalIva, totalQuantity, addItem, decreaseItem } = useContext(CartContext);

  const formatCLP = (value) =>
    new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(
      Number(value || 0)
    );

  if (!cart?.length) {
    return (
      <div className="cart-view">
        <h2>Tu carrito</h2>
        <p>Tu carrito está vacío.</p>
      </div>
    );
  }


return (
  <div className="container my-4">
    <div className="row g-4">
      {/* IZQUIERDA: Carrito */}
      <div className="col-12 col-lg-8">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="m-0">Carro ({totalQuantity()} productos)</h2>

          <button className="btn btn-danger" onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>

        <div className="cart-list">
          {cart.map((compra) => {
            const subtotal = (compra.price || 0) * (compra.quantity || 0);

            return (
              <div key={compra.id} className="card mb-3">
                <div className="card-body d-flex gap-3 align-items-center">
                  {/* Imagen */}
                  <img
                    className="cart-thumb"
                    src={compra.imageUrl}
                    alt={compra.name}
                  />

                  {/* Info (centro) */}
                  <div className="flex-grow-1">
                    <div className="fw-semibold">{compra.name}</div>

                    {compra.selectedSize && (
                      <div className="text-muted small">Talla: {compra.selectedSize}</div>
                    )}

                    <div className="text-muted small">
                      Precio: {formatCLP(compra.price)}
                    </div>
                  </div>

                  {/* Qty (derecha del item) */}
                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      aria-label="Restar"
                      onClick={() => decreaseItem(compra.id)}
                    >
                      −
                    </button>

                    <span className="fw-semibold cart-qty-value">
                      {compra.quantity}
                    </span>

                    <button
                      className="btn btn-outline-secondary btn-sm"
                      aria-label="Sumar"
                      onClick={() => addItem({ ...compra }, 1)}
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal + quitar */}
                  <div className="text-end cart-item-right">
                    <div className="text-muted small">Subtotal</div>
                    <div className="fw-semibold">{formatCLP(subtotal)}</div>

                    <button
                      className="btn btn-link text-danger p-0 small"
                      onClick={() => removeItem(compra.id)}
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* card de derecha */}
      <div className="col-12 col-lg-4">
        <div className="card cart-summary">
          <div className="card-body">
            <h5 className="mb-3">Resumen de la compra</h5>

            <div className="d-flex justify-content-between mb-2">
              <span>Productos ({totalQuantity()})</span>
              <span>{formatCLP(totalPrice())}</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>IVA (19%)</span>
              <span>{formatCLP(totalIva())}</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between align-items-center mb-3">
              <strong>Total</strong>
              <strong>{formatCLP(totalPrice() + totalIva())}</strong>
            </div>

            <Link className="btn btn-dark w-100" to='/checkout'>
              Terminar Compra
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

};

export default CartView;
