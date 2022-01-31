import React from 'react'
import PlusAgregar from '../Icons/PlusAgregar/PlusAgregar'
import './Item.css'
import { useNavigate } from 'react-router'

const Item = ({id, name, desc, price, image}) => {

    const navigate = useNavigate()
    
    return (
        <>
            <h3 className="articulo__nombre">{name}</h3>
            <img src={image} alt={name}></img>
            <p className="articulo__desc">{desc}</p>
            <p className="articulo__precio">${price}</p>
            <div>
                <button className="btn__verMas" onClick={()=>navigate(`/store/${id}`)}>Ver Mas</button>
                <button className="btn__Agregar">Agregar <PlusAgregar /></button>
                {console.log(navigate)}
            </div>
            
        </>
    )
}

export default Item
