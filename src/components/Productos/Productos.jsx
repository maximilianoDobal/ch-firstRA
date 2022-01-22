import React, { useEffect, useState } from 'react'
import Articulo from '../Articulo/Articulo'
import './Productos.css'

const url = "http://localhost:3001/productos"
const Productos = () => {
    
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
        return <main>
        <h2 className="productos__Title"><span>P</span>roductos</h2>
        <div className="productosContainer">
            {prods.map((prod)=>{
                return <Articulo key={prod.id} name={prod.name} desc={prod.desc} image={prod.image} price={prod.price}/>
            })}
        </div>
    </main>
    }

}

export default Productos
