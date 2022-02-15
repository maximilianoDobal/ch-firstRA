import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import "./CartModal.css";
import { useCart } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import firebase from "firebase/app";
import { useNavigate } from "react-router";

const CartModal = ({ show, handleClose }) => {
  const { cart, getTotal } = useCart();
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleCheckout = (e) => {
    e.preventDefault();

    if (!name || !lastName || !phone || !mail || !direccion) {
      alert("Por favor llene todos los campos");
    } else if (
      name.length <= 3 ||
      lastName.length <= 3 ||
      phone.length <= 3 ||
      mail.length <= 3 ||
      direccion.length <= 3
    ) {
      alert("Los campos no pueden tener menos de 3 letras");
    } else if (isNaN(phone)) {
      alert("No esta poniendo un numero en su telefono");
    } else if (phone.length >= 15) {
      alert("Numero de telefono muy largo");
    } else {
      const newOrder = {
        buyer: { name, lastName, phone, mail, direccion },
        items: cart,
        fecha: firebase.firestore.Timestamp.fromDate(new Date()),
        total: getTotal(cart),
      };
      console.log(newOrder);

      console.log(cart)
      const db = getFirestore();
      db.collection("orders")
        .add(newOrder)
        .then((res) => {
          console.log(`Se agrego la orden: ${res.id}`);
          navigate(`/succesBuyPage/${res.id}`);
        })
        .catch((err) => console.log(err));

    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Finalizar Compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Ingrese sus Datos</h2>
        <form className="form__checkout" onSubmit={handleCheckout}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            className="mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            name="lastName"
            className="mb-2"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="tel">Telefono</label>
          <input
            type="number"
            name="tel"
            className="mb-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="mail">Mail</label>
          <input
            type="email"
            name="mail"
            className="mb-2"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            name="direccion"
            className="mb-4"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
          <input type="submit" value="Comprar" />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
