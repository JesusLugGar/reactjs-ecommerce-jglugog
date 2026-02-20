import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../css/ItemDetail.css";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Container, Row, Col, Breadcrumb, Card, Badge } from "react-bootstrap";

const ItemDetail = ({ detail }) => {
  const { addItem, cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [counter, setCounter] = useState(1);

  // aca calculo cuántos hay en el carrito de este producto y talla
  const currentInCart = cart
    .filter((item) => item.id === detail.id && item.selectedSize === selectedSize)
    .reduce((acc, item) => acc + item.quantity, 0);

  const stockDisponible = detail.stock - currentInCart;

  const onAdd = (cantidad) => {
    if (detail.size?.length && !selectedSize) return; 
    addItem({ ...detail, selectedSize }, cantidad);
    setCounter(1); // Resetea el contador inmediatamente

    // Alert con SweetAlert
    Swal.fire({
      title: "¡Producto agregado!",
      text: `${detail.name} fue agregado al carrito`,
      imageUrl: detail.imageUrl,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: detail.name,
      showCancelButton: true,
      confirmButtonText: "Ir al Carro",
      cancelButtonText: "Seguir Comprando",
      confirmButtonColor: "#365E3A",
      cancelButtonColor: "#6c757d",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart");
      }
    });
  };

  const formattedPrice = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(detail.price);

  return (
    <Container className="py-4">
      
      <nav>
          <Link to="/">Home</Link> /
          <span>{detail.category || "Producto"}</span>
      </nav>

      <Row className="g-4">
        {/* Imagen izquierda */}
        <Col xs={12} md={7}>
          <Card className="p-3">
            <img
              src={detail.imageUrl}
              alt={detail.name}
              className="item-detail-image mx-auto d-block"
            />
          </Card>
        </Col>

        {/* detalles a la derecha */}
        <Col xs={12} md={5}>
          <Card className="p-3">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <small className="text-muted">Marca</small>
                <h4 className="mt-1">{detail.name}</h4>
              </div>

              <Badge bg="success">Nuevo</Badge>
            </div>

            
            <div className="mt-2" style={{ fontSize: "18px" }}>
              ⭐⭐⭐⭐☆ <small className="text-muted">(34)</small>
            </div>

            <h3 className="mt-3">{formattedPrice}</h3>

            {/*  TALLAS */}
            {detail.size?.length > 0 && (
              <div className="mt-3">
                <div className="d-flex align-items-center justify-content-between">
                  <strong>Talla:</strong>
                  <small className="text-muted">Tabla de tallas</small>
                </div>

                <div className="d-flex flex-wrap gap-2 mt-2">
                  {detail.size.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className={`size-pill ${selectedSize === s ? "active" : ""}`}
                      onClick={() => setSelectedSize(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                {!selectedSize && (
                  <small className="text-danger d-block mt-2">
                    Selecciona una talla para continuar
                  </small>
                )}
              </div>
            )}

            {/* Stock */}
            <p className="mt-3">
              Stock:{" "}
              <strong className={stockDisponible > 0 ? "text-success" : "text-danger"}>
                {stockDisponible > 0 ? stockDisponible : "Sin stock"}
              </strong>
            </p>

            {/* Botón / contador */}
            <div className={!selectedSize && detail.size?.length ? "disabled-area" : currentInCart >= stockDisponible ? "disabled-area" : ""}>
              <ItemCount 
                stock={stockDisponible} 
                onAdd={onAdd} 
                counter={counter} 
                setCounter={setCounter} 
                currentInCart={currentInCart} 
                disabled={currentInCart >= stockDisponible || stockDisponible === 0}
              />
            </div>

            {/* SKU */}
            <small className="text-muted d-block mt-3">
              SKU: {detail.sku || detail.id}
            </small>

            <p>Descripcion: {detail.description}</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
