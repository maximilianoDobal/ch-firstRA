import React from "react";
import { useCart } from "../../context/CartContext";

const CartContainer = () => {
  const { cart, clear, removeItem } = useCart();

  return (
    <div>
      <h1>Carrito</h1>
      {cart.map((prod) => {
        return (
          <div key={prod.item.id}>
            <div>
              <h1>Hola mundo</h1>
              <p>{prod.item.name}</p>
              <p>{prod.quantity}</p>
              <button onClick={() => removeItem(prod.item.id)}>remover item</button>
            </div>
          </div>
        );
    })}
    <button onClick={() => clear()}>Borrar Todos</button>
    </div>
  );
};

export default CartContainer;
