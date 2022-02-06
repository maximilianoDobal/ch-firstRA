import React from "react";
import { useCart } from "../../context/CartContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CartContainer.css";
import Button from "react-bootstrap/Button";
import DeleteFromCart from "../Icons/DeleteFromCart/DeleteFromCart";

const suma = (a, b) => a + b;

const CartContainer = () => {
  const { cart, clear, removeItem } = useCart();

  return (
    <>
      <h1 className="cart-title">Carrito</h1>
      <Container className="cart-container">
        {cart.map((prod) => {
          return (
            <Row className="cartaCarrito">
              <Col md={1}>
                <div>
                  <img
                    src={prod.item.image}
                    alt={prod.item.name}
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column justify-content-center align-items-start"
              >
                <h4>{prod.item.name}</h4>
                <p>Cantidad: {prod.quantity}</p>
              </Col>
              <Col
                md={5}
                className="d-flex flex-column justify-content-center align-items-end"
              >
                <p>Precio por unidad: ${prod.item.price}</p>
                <h5>Precio: ${prod.item.price * prod.quantity}</h5>
                <button onClick={() => removeItem(prod.item.id)} className="btn-removeItem">
                  Eliminar Item <DeleteFromCart />
                </button>
              </Col>
            </Row>
          );
        })}
        <Button onClick={() => clear()} className="btn-deteleAll">
          Borrar Todos
        </Button>
      </Container>
      {/* {cart !== [] ? <h4>Precio Total: ${cart.map((obj) => obj.item.price * obj.quantity).reduce(suma)}</h4> : null} */}
    </>
  );
};

export default CartContainer;
