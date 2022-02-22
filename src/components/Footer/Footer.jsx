import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className="pt-md-4 pb-0 footer-container">
      <Row>
        <Col
          md={12}
          className="d-flex justify-content-center align-items-center"
        >
          <h2>
            <span>P</span>hoto<span>S</span>tore
          </h2>
        </Col>
        <Col md={12}>
          <p className="text-center">
            <i>Pagina creada por Maximiliano Dobal</i>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
