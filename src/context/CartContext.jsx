import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);
CartContext.displayName = "CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {

    const newItem = { item, quantity };
    setCart((prev) => [...prev, newItem]);
  };

  // const isInCart = (id) =>{
  //   console.log(cart.filter((obj) => obj.id === id) === [] )
  //   return cart.filter((obj) => obj.id === id) === [] 
  // }


  const removeItem = (id) => {
    return setCart((prev) => prev.filter((elemento) => elemento.item.id !== id))
  }

  const clear = () => {
    return setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addItem, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
