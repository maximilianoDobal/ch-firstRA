import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import TableDetail from "../TableDetail/TableDetail";

const ItemDetail = ({
  item,
  dataCaracGen,
  dataSensorOptico,
  dataZoom,
  dataMemoria,
  dataLente,
  dataBateria,
  dataFlash,
  dataObturador,
  dataEspecificaciones,
  dataEnfoque,
  dataPesoDimen,
  especiNombres,
  bateriaNombres,
  caracGenNombres,
  enfoqueNombres,
  flashNombres,
  lenteNombres,
  memoriaNombres,
  obturadorNombres,
  pesoDimenNombres,
  sensorOpticoNombres,
  zoomNombres,
}) => {
  const [cantidad, setCantidad] = useState(1);
  const { addItem, isInCart } = useCart();
  const [textChange, setTextChange] = useState("Agregar a Carrito");
  const [btnChange, setBtnChange] = useState("agregarCart");

  const pesos = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  const verificador = () => {
    return isInCart(item.id, cantidad) ? null : addToCart();
  };

  const addToCart = () => {
    addItem(item, cantidad);
    setTextChange("Finalizar Compra");
    setBtnChange("endBuy");
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <h2 className="mb-4">{item.name}</h2>
          </Col>
          <Col md={5} className="d-flex justify-content-center">
            <img src={item.image} alt={item.name} />
          </Col>
          <Col md={7}>
            <div>
              <h6>Precio unitario: {pesos.format(item.price)}</h6>
              {textChange !== "Finalizar Compra" ? (
                <ItemCount cantidad={cantidad} setCantidad={setCantidad} />
              ) : (
                <p>
                  <i>
                    Si deseas cambiar la cantidad podes cambiarla en el carrito
                  </i>
                </p>
              )}
              <p className={cantidad > item.stock ? "rojo" : ""}>
                Cantidad en Stock:{" "}
                {cantidad < item.stock
                  ? item.stock - cantidad
                  : "No tenemos tanto Stock"}
              </p>
              <p>{item.desc}</p>
              <h4>Precio Total: {pesos.format(item.price * cantidad)}</h4>
            </div>
            <Button
              variant="warning"
              onClick={textChange !== "Finalizar Compra" ? verificador : null}
              className={btnChange}
            >
              {textChange === "Finalizar Compra" ? (
                <Link to="/cart">{textChange}</Link>
              ) : (
                `${textChange}`
              )}
            </Button>
          </Col>
          <Col md={12} className="mt-5">
            <h3>Caracteristicas de {item.name}</h3>
          </Col>
          {!dataCaracGen ? null : (
            <TableDetail obj={dataCaracGen} objNames={caracGenNombres} />
          )}
          {!dataSensorOptico ? null : (
            <TableDetail
              obj={dataSensorOptico}
              objNames={sensorOpticoNombres}
            />
          )}
          {!dataZoom ? null : (
            <TableDetail obj={dataZoom} objNames={zoomNombres} />
          )}
          {!dataMemoria ? null : (
            <TableDetail obj={dataMemoria} objNames={memoriaNombres} />
          )}
          {!dataLente ? null : (
            <TableDetail obj={dataLente} objNames={lenteNombres} />
          )}
          {!dataBateria ? null : (
            <TableDetail obj={dataBateria} objNames={bateriaNombres} />
          )}
          {!dataFlash ? null : (
            <TableDetail obj={dataFlash} objNames={flashNombres} />
          )}
          {!dataObturador ? null : (
            <TableDetail obj={dataObturador} objNames={obturadorNombres} />
          )}
          {!dataEspecificaciones ? null : (
            <TableDetail obj={dataEspecificaciones} objNames={especiNombres} />
          )}
          {!dataEnfoque ? null : (
            <TableDetail obj={dataEnfoque} objNames={enfoqueNombres} />
          )}
          {!dataPesoDimen ? null : (
            <TableDetail obj={dataPesoDimen} objNames={pesoDimenNombres} />
          )}

          <Col md={12} className="mb-4">
            <h3>Descripcion</h3>
            <p>{item.fullDesc}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
