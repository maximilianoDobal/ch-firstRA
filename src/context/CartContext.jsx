import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);
CartContext.displayName = "CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {

    const newItem = { item, quantity };
    setCart((prev) => [...prev, newItem]);
  };

  const isInCart = (id) =>{

    const cartVerificador = cart.map((obj) => obj.item.id).filter((obj) => obj === id)
    return cartVerificador.length >= 1 ? true : false
  }


  const removeItem = (id) => {
    return setCart((prev) => prev.filter((elemento) => elemento.item.id !== id))
  }

  const clear = () => {
    return setCart([])
  }

  const getTotal = (array) => {
    let total = 0

    array.forEach((element) => {
      total += element.item.price * element.quantity
    })
    return total
  }
  return (
    <CartContext.Provider value={{ cart, addItem, clear, removeItem, isInCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
