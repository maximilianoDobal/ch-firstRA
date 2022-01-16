import React from 'react'
import PlusAgregar from '../Icons/PlusAgregar/PlusAgregar'
import './Articulo.css'

const Articulo = ({name, desc, price, image}) => {
    return (
        <div>
            <h3 className="articulo__nombre">{name}</h3>
            <img src={image}></img>
            <p className="articulo__desc">{desc}</p>
            <p className="articulo__precio">${price}</p>
            <button className="btn__Agregar">Agregar <PlusAgregar /></button>
            
        </div>
    )
}

export default Articulo
