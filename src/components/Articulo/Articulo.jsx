import React from 'react'
import PlusAgregar from '../Icons/PlusAgregar/PlusAgregar'
import './Articulo.css'
import { useState } from 'react'
import ContenedorItemDetalle from '../ContenedorItemDetalle/ContenedorItemDetalle'

const Articulo = ({name, desc, price, image}) => {

    const [cantidad, setcantidad] = useState(0)
    const [show, setShow] = useState(false);

    const agregarCantidad = () => {
        setcantidad(cantidad+1)       
    }
    
    const restarCantidad = () => {
        if (cantidad > 0) {
            setcantidad(cantidad-1)
        }
        
    }

    const verMas = () => {
        setShow(!show)
    }
    
    return (
        <>
            <h3 className="articulo__nombre">{name}</h3>
            <img src={image} alt={name}></img>
            <p className="articulo__desc">{desc}</p>
            <p className="articulo__precio">${price}</p>
            <div className="cantidadContainer">
                <button onClick={restarCantidad} className="btn__cantidad">-</button>
                <p className="cantidad__texto">{cantidad}</p>
                <button onClick={agregarCantidad} className="btn__cantidad">+</button>            
            </div>
                {show ? <ContenedorItemDetalle></ContenedorItemDetalle> : null}
            <div>
                <button className="btn__verMas" onClick={verMas}>{!show ? "Ver Mas..." : "Ocultar"}</button>
                <button className="btn__Agregar">Agregar <PlusAgregar /></button>
            </div>
            
        </>
    )
}

export default Articulo
