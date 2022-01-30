import React from 'react'
import PlusAgregar from '../Icons/PlusAgregar/PlusAgregar'
import './Articulo.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Articulo = ({id, name, desc, price, image}) => {

    const navigate = useNavigate()
    const [cantidad, setcantidad] = useState(0)

    const agregarCantidad = () => {
        setcantidad(cantidad+1)       
    }
    
    const restarCantidad = () => {
        if (cantidad > 0) {
            setcantidad(cantidad-1)
        }
        
    }

    // const verMas = () => {
    //     navigate(`/store/${id}`)
    // }
    
    return (
        <>
            <h3 className="articulo__nombre">{name}</h3>
            <img src={image} alt={name}></img>
            <p className="articulo__desc">{desc}</p>
            <p className="articulo__precio">${price}</p>
            <div>
                <button className="btn__verMas" onClick={()=>navigate(`/store/${id}`)}>Ver Mas</button>
                <button className="btn__Agregar">Agregar <PlusAgregar /></button>
            </div>
            
        </>
    )
}

export default Articulo
