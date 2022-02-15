import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getFirestore } from '../firebase'

const SuccesBuyPage = () => {

  const {orderId} = useParams()
  const [orden, setOrden] = useState({})

  useEffect (() =>{
    const db = getFirestore()
    db.collection('orders').doc(orderId).get().then((res) => setOrden({...res.data(), id: res.id}))
    console.log(orden)

  },[orderId])


  return (
    <div>hola {orden.items[0].item.name}</div>

  )
}

export default SuccesBuyPage