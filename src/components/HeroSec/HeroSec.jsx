import './HeroSec.css'
import React from 'react'

const HeroSec = () => {
    return (
        <div className="hero">
            <div className="hero__logo">
                <h1><span>P</span>hoto<span>S</span>tore</h1>
            </div>
            <div className="hero__btns">
                <button className="btn"><a href="" className="textoGrande">Tienda</a></button>
                <button className="btn btn__contacto"><a href="" className="btn__contacto--texto textoGrande">Contacto</a></button>
            </div>
        </div>
    )
}

export default HeroSec
