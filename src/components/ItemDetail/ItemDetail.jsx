import React, { memo, useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";

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
  dataPesoDimen
}) => {

  const [cantidad, setCantidad] = useState(1);
  const { addItem } = useCart()

  const pesos = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  const addToCart = () =>{
    addItem(item, cantidad)
  //  return isInCart(item.id) ? null : addItem(item, cantidad)
  //   console.log(cart)
  }

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
              <ItemCount cantidad={cantidad} setCantidad={setCantidad} />
              <p className={cantidad > item.stock ? "rojo" : ""}>Cantidad en Stock: {cantidad < item.stock ? item.stock-cantidad : "No tenemos tanto Stock"}</p>
              <h4>Precio Total: {pesos.format(item.price * cantidad)}</h4>
          </div>
          <p>{item.desc}</p>
          <Button variant="warning" onClick={addToCart}>Agregar a Carrito</Button>
          </Col>
          <Col md={12} className="mt-5">
            <h3>Caracteristicas de {item.name}</h3>
          </Col>
          <Col md={5}>
            <Table>
              <thead>
                <tr>
                  <th>Caracteristicas Generales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fabricante</td>
                  <td>{dataCaracGen.fabricante}</td>
                </tr>
                <tr>
                  <td>Marca</td>
                  <td>{dataCaracGen.marca}</td>
                </tr>
                <tr>
                  <td>Linea</td>
                  <td>{dataCaracGen.linea}</td>
                </tr>
                <tr>
                  <td>Modelo</td>
                  <td>{dataCaracGen.modelo}</td>
                </tr>
                <tr>
                  <td>Incluye Kit</td>
                  <td>{dataCaracGen.kit}</td>
                </tr>
                <tr>
                  <td>Incluye Video</td>
                  <td>{dataCaracGen.video}</td>
                </tr>
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
                <tr>
                  <td>Tipo</td>
                  <td>{dataSensorOptico.tipo}</td>
                </tr>
                <tr>
                  <td>Tamaño</td>
                  <td>{dataSensorOptico.tamano}</td>
                </tr>
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
                <tr>
                  <td>Zoom Digital</td>
                  <td>{dataZoom.zoomDigital}</td>
                </tr>
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
                <tr>
                  <td>Tipos</td>
                  <td>{dataMemoria.tipos}</td>
                </tr>
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
                <tr>
                  <td>Montura</td>
                  <td>{dataLente.montura}</td>
                </tr>
                <tr>
                  <td>Tipo</td>
                  <td>{dataLente.tipo}</td>
                </tr>
                <tr>
                  <td>Incluye lente</td>
                  <td>{dataLente.incluye}</td>
                </tr>
                <tr>
                  <td>Lente Intercambiable</td>
                  <td>{dataLente.intercambiable}</td>
                </tr>
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
                <tr>
                  <td>Composicion</td>
                  <td>{dataBateria.composicion}</td>
                </tr>
                <tr>
                  <td>Tipo</td>
                  <td>{dataBateria.tipo}</td>
                </tr>
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
                <tr>
                  <td>Incluye Flash</td>
                  <td>{dataFlash.incluye}</td>
                </tr>
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
                <tr>
                  <td>Velocidad Minima</td>
                  <td>{dataObturador.velMin}</td>
                </tr>
                <tr>
                  <td>Velocidad Maxima</td>
                  <td>{dataObturador.velMax}</td>
                </tr>
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
                <tr>
                  <td>Tipo</td>
                  <td>{dataEspecificaciones.tipo}</td>
                </tr>
                <tr>
                  <td>Resolucion</td>
                  <td>{dataEspecificaciones.resolucion}</td>
                </tr>
                <tr>
                  <td>Tamaño de Pantalla</td>
                  <td>{dataEspecificaciones.tamanoPant}</td>
                </tr>
                <tr>
                  <td>ISO</td>
                  <td>{dataEspecificaciones.iso}</td>
                </tr>
                <tr>
                  <td>Resolucion de video</td>
                  <td>{dataEspecificaciones.resVideo}</td>
                </tr>
                <tr>
                  <td>Tipo de Resolucion</td>
                  <td>{dataEspecificaciones.tipoRes}</td>
                </tr>
                <tr>
                  <td>Interfaces</td>
                  <td>{dataEspecificaciones.interfaces}</td>
                </tr>
                <tr>
                  <td>Accesorios incluidos</td>
                  <td>{dataEspecificaciones.accesoriosInc}</td>
                </tr>
                <tr>
                  <td>Resistencia al agua</td>
                  <td>{dataEspecificaciones.retAgua}</td>
                </tr>
                <tr>
                  <td>Aprueba de agua</td>
                  <td>{dataEspecificaciones.apruebaAgua}</td>
                </tr>
                <tr>
                  <td>Pantalla Tactil</td>
                  <td>{dataEspecificaciones.pantTactic}</td>
                </tr>
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
                <tr>
                  <td>Modo</td>
                  <td>{dataEnfoque.modo}</td>
                </tr>
                <tr>
                  <td>Manual</td>
                  <td>{dataEnfoque.manual}</td>
                </tr>
                <tr>
                  <td>AutoFoco</td>
                  <td>{dataEnfoque.autofoco}</td>
                </tr>
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
                <tr>
                  <td>Ancho</td>
                  <td>{dataPesoDimen.ancho}</td>
                </tr>
                <tr>
                  <td>Altura</td>
                  <td>{dataPesoDimen.altura}</td>
                </tr>
                <tr>
                  <td>Profundidad</td>
                  <td>{dataPesoDimen.profundidad}</td>
                </tr>
                <tr>
                  <td>peso</td>
                  <td>{dataPesoDimen.peso}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={12}>
            <h3>Descripcion</h3>
          <p>{item.fullDesc}</p>
          </Col>
        </Row>
      </Container>
     </>
   );
  };

export default memo(ItemDetail);
