import './HeroSec.css'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'

const HeroSec = () => {

    const navigate = useNavigate()

    const goToStore = () => {
        navigate("/store")
    }
    const goToAbout = () => {
        navigate("/about")
    }

    return (
        <Container fluid>
            <Row className="hero">
                <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                    <div className="hero__logo">
                        <h1><span>P</span>hoto<span>S</span>tore</h1>
                    </div>
                    <div>
                        <Button size ="lg" className="btn__tienda" onClick={goToStore} >Tienda</Button>
                        <Button className="btn__contacto" size ="lg" onClick={goToAbout}>Nosotros</Button>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default HeroSec
