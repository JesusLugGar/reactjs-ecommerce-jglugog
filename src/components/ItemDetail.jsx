import React from "react";
import Item from "./Item";
import '../css/ItemDetail.css';
import { Container, Row, Col, Breadcrumb, Card, Button, Badge } from "react-bootstrap";

const ItemDetail = ({ detail }) => {
    const formattedPrice = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
    }).format(detail.price);

  return (
    <Container className="py-4">
      {/* Breadcrumb arriba */}
      <Breadcrumb className="mb-3">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{detail.category || "Producto"}</Breadcrumb.Item>
      </Breadcrumb>

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

        {/* Info derecha */}
        <Col xs={12} md={5}>
          <Card className="p-3">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <small className="text-muted">"Marca"</small>
                <h4 className="mt-1">{detail.name}</h4>
              </div>

              <Badge bg="success">Nuevo</Badge>
            </div>

            {/* Estrellas aca me ayudo la IA no sabia como ponerlas */}
            <div className="mt-2" style={{ fontSize: "18px" }}>
              ⭐⭐⭐⭐☆ <small className="text-muted">(34)</small>
            </div>

            {/* Precio */}
            <h3 className="mt-3">{formattedPrice}</h3>

            {/* Stock */}
            <p className="mt-2">
              Stock:{" "}
              <strong className={detail.stock > 0 ? "text-success" : "text-danger"}>
                {detail.stock > 0 ? detail.stock : "Sin stock"}
              </strong>
            </p>

            
            <Button
              variant="success"
              size="lg"
              className="w-100 mt-2"
              disabled={detail.stock === 0}
            >
              Agregar al carro
            </Button>

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
