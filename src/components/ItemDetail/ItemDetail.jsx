import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const ItemDetail = ({
  name,
  image,
  price,
  desc,
  stock,
  caracGen,
  sensorOptico,
  zoom,
  memoria,
  lente,
  bateria,
  flash,
  obturador,
  especificaciones,
  enfoque,
  pesoDimen,
  fullDesc,
}) => {
  const [cantidad, setcantidad] = useState(1);

  const agregarCantidad = () => {
    setcantidad(cantidad + 1);
  };

  const restarCantidad = () => {
    if (cantidad > 1) {
      setcantidad(cantidad - 1);
    }
  };
  const pesos = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <h2 className="mb-4">{name}</h2>
          </Col>
          <Col md={5} className="d-flex justify-content-center">
            <img src={image} alt={name} />
          </Col>
          <Col md={7}>
            <div>
              <h6>Precio unitario: {pesos.format(price)}</h6>
              <div className="cantidadContainer">
                <button onClick={restarCantidad} className="btn__cantidad">
                  -
                </button>
                <p className="cantidad__texto">{cantidad}</p>
                <button onClick={agregarCantidad} className="btn__cantidad">
                  +
                </button>
              </div>
              <p className={cantidad > stock ? "rojo" : ""}>Cantidad en Stock: {cantidad < stock ? stock-cantidad : "No tenemos tanto Stock"}</p>
              <h4>Precio Total: {pesos.format(price * cantidad)}</h4>
            </div>
            <p>{desc}</p>
            <Button variant="warning">Agregar a Carrito</Button>
          </Col>
          <Col md={12} className="mt-5">
            <h3>Caracteristicas de {name}</h3>
          </Col>
          <Col md={5}>
            <Table>
              <thead>
                <tr>
                  <th>Caracteristicas Generales</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(caracGen).map(([key, value]) => {
                  return (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col md={5}>
            <Table>
              <thead>
                <tr>
                  <th>Sensor Optico</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(sensorOptico).map(([key, value]) => {
                  return (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col md={5}>
            <Table>
              <thead>
                <tr>
                  <th>Zoom</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(zoom).map(([key, value]) => {
                  return (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col md={5}>
            <Table>
              <thead>
                <tr>
                  <th>Memoria</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(memoria).map(([key, value]) => {
                  return (
                      <tr key={key}>
                        <td >{key}</td>
                        <td>{value}</td>
                      </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col md={5}>
            <Table>
              <thead>
                <tr>
                  <th>Lente</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(lente).map(([key, value]) => {
                  return (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col md={5}>
            <Table>
              <thead>
                <tr>
                  <th>Bateria</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(bateria).map(([key, value]) => {
                  return (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col md={5}>
            <Table>
              <thead>
                <tr>
                  <th>Flash</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(flash).map(([key, value]) => {
                  return (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col md={5}>
            <Table>
              <thead>
                <tr>
                  <th>Obturador</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(obturador).map(([key, value]) => {
                  return (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col md={5}>
            <Table>
              <thead>
                <tr>
                  <th>Especificaciones</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(especificaciones).map(([key, value]) => {
                  return (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col md={5}>
            <Table>
              <thead>
                <tr>
                  <th>Enfoque</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(enfoque).map(([key, value]) => {
                  return (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col md={5}>
            <Table>
              <thead>
                <tr>
                  <th>Peso y Dimenciones</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(pesoDimen).map(([key, value]) => {
                  return (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col md={12}>
            <h3>Descripcion</h3>
          <p>{fullDesc}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
