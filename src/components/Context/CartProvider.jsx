import React from "react";
import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
