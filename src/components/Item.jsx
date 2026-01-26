import React from "react";
import { Button, Card, Badge } from "react-bootstrap";
import { Link } from 'react-router-dom'


const Item = ({ prod }) => {
    
  const formattedPrice = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(prod.price);

  return (
    <Card className="product-card h-100">
      <div className="product-img-wrap">
        <Card.Img className="product-img" variant="top" src={prod.imageUrl} alt={prod.name} />
        <Badge bg="success" className="product-badge">
          Nuevo
        </Badge>
      </div>

      <Card.Body className="product-card-body">
        <Card.Title className="product-title">{prod.name}</Card.Title>

        <Card.Text className="product-price">{formattedPrice}</Card.Text>

        <div className="product-footer">

          <Link to={`/item/${prod.id}`} variant="success" className="w-100">
            
            <Button variant="success" className="w-100 fw-bold">Ver detalle</Button>
            
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
