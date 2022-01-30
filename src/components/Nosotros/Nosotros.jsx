import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import imgGrupo from "../assets/imagenes/imgGrupo.jpg";
import "./Nosotros.css"

const Nosotros = () => {
  return <Container className="nosotros-container">
  <Row>
    <Col md={12} className="d-flex flex-column align-items-center">
    <h2 className="mt-3">Nosotros</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </Col>
    <Col md={6}>
      <img src={imgGrupo} alt="PhotoStore" className="img-fluid" />
    </Col>
    <Col md={6} className="d-flex align-items-center">
      <p><strong>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</strong></p>
    </Col>
  </Row>
</Container>;
};

export default Nosotros;
