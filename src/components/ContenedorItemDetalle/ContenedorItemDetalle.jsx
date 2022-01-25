import React, { useEffect, useState } from 'react'
import ItemDetalle from '../ItemDetalle/ItemDetalle'

const ContenedorItemDetalle = () => {

    const url = "http://localhost:3001/productos/1"

    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [item, setItem] = useState([]);

    useEffect(() => {

        setIsLoading(true)
        const llamarApi = async () => {
            try {
                const response = await fetch (url)
                const data = await response.json()
                setItem(data)
            } catch (err){
                setErrors(err)
            } finally{
                setIsLoading(false)
            }
        }
        llamarApi()


    }, [])

    if (isLoading){
        return <p>Cargando...</p>
    } else if (errors){
        return <p>Ha habido un error</p>
    } else {
        return <div>
            <ItemDetalle id={item.id} name={item.name} tipo={item.tipo} marca={item.marca} price={item.price} desc={item.desc} image={item.image} stock={item.stock} caracGen={item.caracGen} sensorOptico={item.sensorOptico} zoom={item.zoom} memoria={item.memoria} lente={item.lente} bateria={item.bateria} flash={item.flash} obturador={item.obturador} especificaciones={item.especificaciones} enfoque={item.enfoque} pesoDimen={item.pesoDimen} fullDesc={item.fullDesc}/>
    </div>
    }
}

export default ContenedorItemDetalle;
