import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Footer.css'

const Footer = () => {


    const addNewsletter = (e) =>{
        e.preventDefault()
        console.log(addNewsletter)
    }
  return <Container fluid className="pt-md-4 pb-md-4 footer-container">
      <Row>
          <Col md={6} className="d-flex flex-column align-items-center mt-2">
              <h4>Suscribirse al Newsletter</h4>
              <form>
                  <div>
                      <label htmlFor="newsletter" className="me-5">Mail</label>
                    <input type="text" name="newsletter"/>
                  </div>
                  <div>
                    <input type="checkbox" name="newsletterCheckbox" className="me-2"/>
                    <label htmlFor="newsletterCheckbox">Acepto unirme al newsletter</label>
                  </div>
                  <Button type="submit" onClick={addNewsletter} className="btn__footer mt-2">Enviar</Button>
              </form>
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <h2><span>P</span>hoto<span>S</span>tore</h2>
          </Col>
      </Row>
      </Container>;
};

export default Footer;
