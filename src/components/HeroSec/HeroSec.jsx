import './HeroSec.css'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const HeroSec = () => {
    return (
        <Container fluid>
            <Row className="hero">
                <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                    <div className="hero__logo">
                        <h1><span>P</span>hoto<span>S</span>tore</h1>
                    </div>
                    <div>
                        <Button size ="lg" className="btn__tienda"><a href="" className="btn__tienda--link">Tienda</a></Button>
                        <Button className="btn__contacto" size ="lg"><a href="" className="btn__contacto--link">Contacto</a></Button>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default HeroSec
