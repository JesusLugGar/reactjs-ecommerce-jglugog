import React from "react";
import Item from "./Item";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../css/Card.css';

const ItemList = ({ data }) => {
    return (
        <Row className="g-4 item-list-row">
            {data.map((prod) => (
                <Col key={prod.id} xs={12} sm={6} lg={4} xl={3} xxl={2}>
                    <Item prod={prod} />
                </Col>
            ))}
        </Row>
    );
}

export default ItemList;