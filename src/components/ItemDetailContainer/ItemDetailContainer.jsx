import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFirestore } from '../../firebase';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const {productId} = useParams()

    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [item, setItem] = useState([]);
    const [dataCaracGen, setDataCaracGen] = useState({});
    const [dataSensorOptico, setDataSensorOptico] = useState({})
    const [dataZoom, setDataZoom] = useState({})
    const [dataMemoria, setDataMemoria] = useState({})
    const [dataLente, setDataLente] = useState({})
    const [dataBateria, setDataBateria] = useState({})
    const [dataFlash, setDataFlash] = useState({})
    const [dataObturador, setDataObturador] = useState({})
    const [dataEspecificaciones, setDataEspecificaciones] = useState({})
    const [dataEnfoque, setDataEnfoque] = useState({})
    const [dataPesoDimen, setDataPesoDimen] = useState({})
    

    useEffect(() => {

        const db = getFirestore()
        const collection = db.collection('productos')
        const productoIndividual = collection.doc(productId)

        setIsLoading(true)
        productoIndividual.get().then((res) => {
            if (!res.exists) console.log("El producto no existe");
            setItem({...res.data(), id: res.id})
            setDataCaracGen(res.data().caracGen)
            setDataSensorOptico(res.data().sensorOptico)
            setDataZoom(res.data().zoom)
            setDataMemoria(res.data().memoria)
            setDataLente(res.data().lente)
            setDataBateria(res.data().bateria)
            setDataFlash(res.data().flash)
            setDataObturador(res.data().obturador)
            setDataEspecificaciones(res.data().especificaciones)
            setDataEnfoque(res.data().enfoque)
            setDataPesoDimen(res.data().pesoDimen)
        }).catch((err) => setErrors(err)).finally(setIsLoading(false))
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

export default ItemDetailContainer;
