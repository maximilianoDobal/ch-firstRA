import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../ItemDetail/ItemDetail'
import data from '../../mocks/stock.json';

const ItemDetailContainer = () => {

    const {productId} = useParams()

    // const URL = `http://localhost:3001/productos/${productId}`

    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [item, setItem] = useState([]);

    useEffect(() => {

        setIsLoading(true)
        const llamarApi = async () => {
            try {
                // const response = await fetch(URL)
                // const data = await response.json()
                
                console.log("data.productos", data.productos.find((i) => i.id === parseInt(productId)))
                setItem(data.productos.find((i) => i.id === parseInt(productId)))
            } catch (err){
                setErrors(err)
            } finally{
                setIsLoading(false)
            }
        }
        llamarApi()


    }, [productId])

    if (isLoading){
        return <p>Cargando...</p>
    } else if (errors){
        return <p>Ha habido un error</p>
    } else {
        return <div>
            <ItemDetail name={item.name} image={item.image} price={item.price} desc={item.desc} stock={item.stock} caracGen={item.caracGen} sensorOptico={item.sensorOptico} zoom={item.zoom} memoria={item.memoria} lente={item.lente} bateria={item.bateria} flash={item.flash} obturador={item.obturador} especificaciones={item.especificaciones} enfoque={item.enfoque} pesoDimen={item.pesoDimen} fullDesc={item.fullDesc}/>
    </div>
    } 
}

export default ItemDetailContainer;
