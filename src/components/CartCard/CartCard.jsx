import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DeleteFromCart from "../Icons/DeleteFromCart/DeleteFromCart";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const CartCard = ({ item, quantity }) => {
  const { removeItem } = useCart();

  const { orderId } = useParams();

  return (
    <Row className="cartaCarrito" key={item.id}>
      <Col md={1}>
        <div>
          <img src={item.image} alt={item.name} className="img-fluid" />
        </div>
      </Col>
      <Col
        md={6}
        className="d-flex flex-column justify-content-center align-items-start"
      >
        <Link to={`/store/${item.id}`}>
          <h4>{item.name}</h4>
        </Link>
        <p>Cantidad: {quantity}</p>
      </Col>
      <Col
        md={5}
        className="d-flex flex-column justify-content-center align-items-end"
      >
        <p>Precio por unidad: ${item.price}</p>
        <h5>Precio: ${item.price * quantity}</h5>
        {orderId ? null : (
          <button
            onClick={() => removeItem(item.id)}
            className="btn-removeItem"
          >
            Eliminar Item <DeleteFromCart />
          </button>
        )}
      </Col>
    </Row>
  );
};

export default CartCard;
