import React from "react";
import "./Item.css";
import { useNavigate } from "react-router";

const Item = ({ id, name, desc, price, image }) => {
  const navigate = useNavigate();

  return (
    <>
      <h3 className="articulo__nombre">{name}</h3>
      <img src={image} alt={name}></img>
      <p className="articulo__desc">{desc}</p>
      <h4 className="articulo__precio">${price}</h4>
      <div>
        <button
          className="btn__verMas"
          onClick={() => navigate(`/store/${id}`)}
        >
          Ver Mas
        </button>
      </div>
    </>
  );
};

export default Item;
