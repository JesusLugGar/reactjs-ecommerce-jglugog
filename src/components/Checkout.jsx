import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import EmptyCart from "./EmptyCart";

const Checkout = () => {
  const [buyer, setBuyer] = useState({});

  const [validMail, setValidMail] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [process, setProcess] = useState(false);
  const [error, setError] = useState(null);

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const formatCLP = (value) =>
    new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  const buyerdata = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();

    const requiredFields = [
      { key: "name", label: "Nombre" },
      { key: "lastname", label: "Apellido" },
      { key: "email", label: "Correo electrónico" },
      { key: "telefono", label: "Teléfono" },
      { key: "numero_documento", label: "Número de documento" },
      { key: "pais", label: "País" },
      { key: "ciudad", label: "Ciudad" },
      { key: "municipio", label: "Municipio" },
      { key: "calle", label: "Calle o Avenida" },
      { key: "edificio", label: "Edificio o Casa" },
    ];

    const missing = requiredFields.filter((f) => !buyer[f.key]);
    if (!validMail)
      missing.push({
        key: "confirmar_email",
        label: "Confirmar correo electrónico",
      });

    if (missing.length > 0) {
      setError("Falta completar: " + missing.map((f) => f.label).join(", "));
      return;
    }

    if (buyer.email !== validMail) {
      setError("Los correos electrónicos no coinciden");
      return;
    }

    setProcess(true);
    setError(null);
    let orden = {
      comprador: buyer,
      items: cart,
      total: totalPrice(),
      date: serverTimestamp(),
    };

    const ventas = collection(db, "orders");
    addDoc(ventas, orden)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((error) => console.error("Error al crear la orden:", error))
      .finally(() => setProcess(false));
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  return (
    <>
      {orderId ? (
        <div className="container text-center py-5">
          <h2 className="mb-4 fs-3">¡Gracias por tu compra!</h2>
          <h4 className="mb-4">
            Tu número de orden es: <strong>{orderId}</strong>
          </h4>
          <Link className="btn btn-dark" to="/">
            Volver al inicio
          </Link>
        </div>
      ) : (
        <section className="container py-4">
          <div className="row g-4 align-items-start">
            {/* IZQUIERDA: info usuario */}
            <div className="col-12 col-lg-7">
              <form onSubmit={finalizarCompra}>
                {/* INFORMACION DE USUARIO */}
                <div className="border p-4 rounded mb-4 shadow">
                  <h2 className="mb-4 fs-3">1. Información de Usuario</h2>

                  {error && (
                    <div
                      style={{
                        color: "#b02a37",
                        fontSize: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {error}
                    </div>
                  )}

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Ingrese su nombre"
                        onChange={buyerdata}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastname" className="form-label">
                        Apellido
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        className="form-control"
                        placeholder="Ingrese su apellido"
                        onChange={buyerdata}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Ingrese su correo electrónico"
                      onChange={buyerdata}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="confirmar_email" className="form-label">
                      Confirmar Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="confirmar_email"
                      className="form-control"
                      placeholder="Confirme su correo electrónico"
                      onChange={(e) => setValidMail(e.target.value)}
                    />
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label htmlFor="telefono" className="form-label">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        className="form-control"
                        placeholder="Ingrese su teléfono"
                        onChange={buyerdata}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label htmlFor="tipo_documento" className="form-label">
                        Tipo de Documento
                      </label>
                      <select
                        name="tipo_documento"
                        className="form-select"
                        defaultValue="rut"
                      >
                        <option value="rut">RUT</option>
                        <option value="pasaporte">Pasaporte</option>
                        <option value="dni">DNI</option>
                      </select>
                    </div>
                    <div className="col-md-8">
                      <label htmlFor="numero_documento" className="form-label">
                        Número de Documento
                      </label>
                      <input
                        type="text"
                        name="numero_documento"
                        className="form-control"
                        placeholder="Número de documento"
                        onChange={buyerdata}
                      />
                    </div>
                  </div>
                </div>

                {/* INFORMACION DE ENVIO */}
                <div className="border p-4 rounded shadow">
                  <h2 className="mb-4 fs-3">2. Información de Envío</h2>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="pais" className="form-label">
                        País
                      </label>
                      <input
                        type="text"
                        name="pais"
                        className="form-control"
                        placeholder="País"
                        onChange={buyerdata}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="ciudad" className="form-label">
                        Ciudad
                      </label>
                      <input
                        type="text"
                        name="ciudad"
                        className="form-control"
                        placeholder="Ingrese su ciudad"
                        onChange={buyerdata}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="municipio" className="form-label">
                        Municipio
                      </label>
                      <input
                        type="text"
                        name="municipio"
                        className="form-control"
                        placeholder="Ingrese su municipio"
                        onChange={buyerdata}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="calle" className="form-label">
                        Calle o Avenida
                      </label>
                      <input
                        type="text"
                        name="calle"
                        className="form-control"
                        placeholder="Ingrese su calle o avenida"
                        onChange={buyerdata}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label htmlFor="edificio" className="form-label">
                        Edificio o Casa
                      </label>
                      <input
                        type="text"
                        name="edificio"
                        className="form-control"
                        placeholder="Ingrese su edificio o casa"
                        onChange={buyerdata}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-success mt-4"
                  disabled={process}
                >
                  {process
                    ? "Procesando Orden..."
                    : "Generar Orden de Compra"}
                </button>
              </form>
            </div>

            {/* DERECHA: RESUMEN */}
            <div className="col-12 col-lg-5">
              <div
                className="border p-4 rounded shadow position-sticky"
                style={{ top: "90px" }}
              >
                <h2 className="mb-4 fs-3">Resumen de Compra</h2>
                <ul className="list-unstyled mb-3">
                  {cart.map((item) => (
                    <li key={item.id} className="mb-2 small">
                      <span className="fw-bold">{item.quantity}x</span> {item.name}
                    </li>
                  ))}
                </ul>
                <p className="mb-2">
                  <strong>Subtotal productos:</strong> {formatCLP(cart.reduce((total, item) => total + item.price * item.quantity, 0))}
                </p>
                <p className="mb-2">
                  <strong>Envíos:</strong> {formatCLP(cart.length * 3990)}
                </p>
                <hr />
                <p className="fs-5">
                  <strong>Total:</strong> {formatCLP(cart.reduce((total, item) => total + item.price * item.quantity, 0) + cart.length * 3990)}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Checkout;
