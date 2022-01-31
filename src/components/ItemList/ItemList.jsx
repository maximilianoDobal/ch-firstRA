import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Item from '../Item/Item'
import './ItemList.css'
import Col from 'react-bootstrap/Col'

const url = "http://localhost:3001/productos"
const ItemList = () => {
    
    const [prods, setProds] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(null)


    useEffect(() => {

        setIsLoading(true)
        const getStock = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setProds(data)
            } catch (err){
                setErrors(err)
            } finally {
                setIsLoading(false)
            }
            
        }
        getStock()

    }, [])

    if (isLoading){
        return <p>Cargando...</p>
    } else if (errors){
        return <p>Ha habido un error</p>
    } else {
        return <Container fluid>
            <Row>
                    <h2 className="productos__Title"><span>P</span>roductos</h2>
                    {prods.map((prod) => {
                        return <Col md={4} className="d-flex flex-column align-items-center align-content-md-center justify-items-md-center"> 
                            <Item key={prods.id} id={prod.id} name={prod.name} desc={prod.desc} image={prod.image} price={prod.price}/>
                        </Col>
                        
                    })}
            </Row>
        </Container>
    }

}

export default ItemList
