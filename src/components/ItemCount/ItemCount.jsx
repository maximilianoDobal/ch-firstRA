import React from "react";
import "./ItemCount.css";

const ItemCount = (props) => {
  const agregarCantidad = () => {
    props.setCantidad(props.cantidad + 1);
  };

  const restarCantidad = () => {
    if (props.cantidad > 1) {
      props.setCantidad(props.cantidad - 1);
    }
  };
  return (
    <div className="cantidadContainer">
      <button onClick={restarCantidad} className="btn__cantidad">
        -
      </button>
      <p className="cantidad__texto">{props.cantidad}</p>
      <button onClick={agregarCantidad} className="btn__cantidad">
        +
      </button>
    </div>
  );
};

export default ItemCount;
