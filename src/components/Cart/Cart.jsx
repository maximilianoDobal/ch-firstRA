import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import Container from "react-bootstrap/Container";
import "./Cart.css";
import Button from "react-bootstrap/Button";
import CartCard from "../CartCard/CartCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Back from "../Icons/Back/Back";
import CartModal from "../CartModal/CartModal";

const Cart = () => {
  const { cart, clear } = useCart();
  const [show, setShow] = useState(false)

  
  const handleOpen = () => {
    setShow(true)
  }
  
  const handleClose = () => {
    setShow(false)
  }

  
  return (
    <>
      <h1 className="cart-title">Carrito</h1>
      <Container className="cart-container">
      {cart.length === 0 ? <Row><Col><h4>No tenes productos en el carrito</h4><Link to={"/store"}><Back /> Ir a la tienda</Link></Col></Row> : null}
        {cart.map((prod) => {
          return (
            <CartCard item={prod.item} quantity={prod.quantity}/>
          );
        })}
        {cart.length !== 0 ? <Button onClick={() => clear()} className="btn-deteleAll">
          Borrar Todos
        </Button> : null}
      {cart.length !== 0 ? <h4>Precio Total: ${cart.map((obj) => obj.item.price * obj.quantity).reduce((a, b) => a + b, 0)}</h4> : null}
      {cart.length !== 0 ? <button onClick={handleOpen}>Finalizar compra</button> : null}
      {show ? <CartModal show={show} handleClose={handleClose}></CartModal> : null}
      </Container>
    </>
  );
};

export default Cart;
