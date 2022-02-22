import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../firebase";
import CartCard from "../components/CartCard/CartCard";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import "./SuccesBuyPage.css";

const SuccesBuyPage = () => {
  const { orderId } = useParams();
  const [orden, setOrden] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const [cliente, setCliente] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    db.collection("orders")
      .doc(orderId)
      .get()
      .then((res) => {
        setOrden({ ...res.data(), id: res.id });
        setCliente(res.data().buyer);
        setItems(res.data().items);
      })
      .catch((err) => setErrors(err))
      .finally(() => setIsLoading(false));
  }, [orderId]);

  if (isLoading) {
    return <p>Cargando</p>;
  } else if (errors) {
    return <p>Hubo un error {errors}</p>;
  } else {
    return (
      <Container className="alturaMin">
        <Row>
          <h2>Hola Sr/Sra: {cliente.lastName}</h2>

          <h3>Gracias por su compra</h3>

          <h5>
            Si quiere volver a ver su compra en el futuro guarde este ID:{" "}
            {orden.id}
          </h5>

          <h3 className="mt-5">Detalles de la compra</h3>

          {items.map((prod) => {
              return (
                <Col md={12}>
                  <CartCard item={prod.item} quantity={prod.quantity} />
                </Col>
              );
          })}

          <h4>Precio Total: ${orden.total}</h4>
        </Row>
      </Container>
    );
  }
};

export default SuccesBuyPage;
