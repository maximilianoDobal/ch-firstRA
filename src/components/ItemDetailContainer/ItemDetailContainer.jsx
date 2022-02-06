import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import data from '../../mocks/stock.json';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const {productId} = useParams()

    // const URL = `http://localhost:3001/productos/${productId}`

    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [item, setItem] = useState([]);
    const [dataCaracGen, setDataCaracGen] = useState({});
    const [dataSensorOptico, setDataSensorOptico] = useState({})
    const [dataZoom, setDataZoom] = useState({})
    const [dataMemoria, setDataMemoria] = useState({})
    const [dataLente, setDataLente] = useState({})
    const [dataBateria, setdataBateria] = useState({})
    const [dataFlash, setDataFlash] = useState({})
    const [dataObturador, setDataObturador] = useState({})
    const [dataEspecificaciones, setDataEspecificaciones] = useState({})
    const [dataEnfoque, setDataEnfoque] = useState({})
    const [dataPesoDimen, setDataPesoDimen] = useState({})
    

    useEffect(() => {

        setIsLoading(true)
        const llamarApi = async () => {
            try {
                // const response = await fetch(URL)
                // const data = await response.json()
                
                // console.log("data.productos", data.productos.find((i) => i.id === parseInt(productId)))
                setItem(data.productos.find((i) => i.id === parseInt(productId)))
                
                setDataCaracGen(data.productos.find((i) => i.id === parseInt(productId)).caracGen)
                setDataSensorOptico(data.productos.find((i) => i.id === parseInt(productId)).sensorOptico)
                setDataZoom(data.productos.find((i) => i.id === parseInt(productId)).zoom)
                setDataMemoria(data.productos.find((i) => i.id === parseInt(productId)).memoria)
                setDataLente(data.productos.find((i) => i.id === parseInt(productId)).lente)
                setdataBateria(data.productos.find((i) => i.id === parseInt(productId)).bateria)
                setDataFlash(data.productos.find((i) => i.id === parseInt(productId)).flash)
                setDataObturador(data.productos.find((i) => i.id === parseInt(productId)).obturador)
                setDataEspecificaciones(data.productos.find((i) => i.id === parseInt(productId)).especificaciones)
                setDataEnfoque(data.productos.find((i) => i.id === parseInt(productId)).enfoque)
                setDataPesoDimen(data.productos.find((i) => i.id === parseInt(productId)).pesoDimen)
                
                
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
            <ItemDetail item={item} dataCaracGen={dataCaracGen} dataSensorOptico={dataSensorOptico} dataZoom={dataZoom} dataMemoria={dataMemoria} dataLente={dataLente} dataBateria={dataBateria} dataFlash={dataFlash} dataObturador={dataObturador} dataEspecificaciones={dataEspecificaciones} dataEnfoque={dataEnfoque} dataPesoDimen={dataPesoDimen} fullDesc={item.fullDesc}/>
    </div>
    } 
}

export default memo(ItemDetailContainer);
