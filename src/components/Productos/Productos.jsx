import React from 'react'
import Articulo from '../Articulo/Articulo'
import './Productos.css'

const Productos = () => {
    return (
        <>
            <h2 className="productos__Title"><span>P</span>roductos</h2>
            <div className="productosContainer">
                <Articulo name='Camara Sony' price={40000} desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tortor orci. Maecenas sodales placerat diam, commodo placerat diam elementum in. Quisque venenatis, nunc sed dictum eleifend, dolor odio vestibulum arcu, non fermentum neque augue quis est. Cras id hendrerit metus. Integer a suscipit odio, pharetra mattis neque. Quisque eget arcu et quam ' image='https://picsum.photos/id/237/300/350'/>
                <Articulo name='Camara Nikkon' price={20000} desc='Lorem ipsum' image='https://picsum.photos/id/237/300/350'/>
                <Articulo name='Tripode' price={5000} desc='Lorem ipsum' image='https://picsum.photos/id/237/300/350'/>
                <Articulo name='Lente' price={15000} desc='Lorem ipsum' image='https://picsum.photos/id/237/300/350'/>
                <Articulo name='Funda' price={3000} desc='Lorem ipsum' image='https://picsum.photos/id/237/300/350'/>
                <Articulo name='Dron' price={3000} desc='Lorem ipsum' image='https://picsum.photos/id/237/300/350'/>
                <Articulo name='Cable HDMI' price={3000} desc='Lorem ipsum' image='https://picsum.photos/id/237/300/350'/>
                <Articulo name='Flash' price={3000} desc='Lorem ipsum' image='https://picsum.photos/id/237/300/350'/>
                <Articulo name='Estabilizador' price={3000} desc='Lorem ipsum' image='https://picsum.photos/id/237/300/350'/>
            </div>
        </>
    )
}

export default Productos
