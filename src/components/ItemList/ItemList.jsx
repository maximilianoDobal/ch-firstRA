import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Item from "../Item/Item";
import "./ItemList.css";
import Col from "react-bootstrap/Col";
import { getFirestore } from "../../firebase";


const ItemList = () => {
  const [prods, setProds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

//   AGREGAR PRODUCTOS DESDE A FIREBASE
//   const db = getFirestore();
//   const collection = db.collection("productos");

//   const createProductsOnFirestore = () => {
//     productos.forEach((product) => {
//       collection
//         .add(product)
//         .then((res) => console.log("producto agregado", res.id))
//         .catch((err) => console.log("se rompio todo", err));
//     });
//   };

  useEffect(() => {
    setIsLoading(true);

    const db = getFirestore()
    const collection = db.collection('productos')

    const getDataFromFirestore = async () => {
        try{
            const response = await collection.get()
            if (response.empty){
                console.log("No hay productos")
            }
            setProds(response.docs.map((doc) => ({...doc.data(), id: doc.id})))
        } catch (err){
            setErrors(err)
        } finally {
            setIsLoading(false)
        }
    }
    getDataFromFirestore()
  }, []);

  if (isLoading) {
    return <p>Cargando...</p>;
  } else if (errors) {
    return <p>Ha habido un error</p>;
  } else {
       return (
      
        <Container fluid>
            <Row>
                    <h2 className="productos__Title"><span>P</span>roductos</h2>
                    {prods.map((prod) => {
                        return <Col md={4} className="d-flex flex-column align-items-center align-content-md-center justify-items-md-center">
                            <Item key={prods.id} id={prod.id} name={prod.name} desc={prod.desc} image={prod.image} price={prod.price}/>
                        </Col>
    
                    })}
            </Row>
        </Container>
      
    );
}};

export default ItemList;
