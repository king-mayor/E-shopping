import { createContext, useEffect, useState } from "react";
import { Headphones } from "../Data.jsx";
import React from "react";
export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState(Headphones);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(1);

  //add products to cart
  const addToCart = (item, id) => {
    const newItem = { ...item, amount: 1 };
    console.log(newItem);

    // check if product exists
    const cartItem = cart.find((product) => {
      return product.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((product) => {
        if (product.id === id) {
          return { ...product, amount: cartItem.amount + 1 };
        } else {
          return product;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  //Remove a product from cart
  const removeFromCart = (id) => {
    const cartItem = cart.find((product) => {
      return product.id === id;
    });
    if (cartItem) {
      const removeBtn = cart.filter((product) => {
        return product.id !== id;
      });
      setCart(removeBtn);
    } else {
      setCart([]);
    }
    alert("Remove product from cart?");
  };
  //clear entire cart

  const clearCart = () => {
    setCart([]);
  };
  // DecreaseItem
  const decreaseItem = (id) => {
    const cartItem = cart.find((product) => {
      return product.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((product) => {
        if (product.id === id) {
          return { ...product, amount: cartItem.amount - 1 };
        } else {
          return product;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  //IncreaseItem
  const handleDecreaseBtn = (id) => {
    const cartItems = cart.find((product) => {});
    setQuantity(cartItems);
  };
  const handleIncreaseBtn = (id) => {
    setQuantity[(prev) => prev + 1];
  };
  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        handleDecreaseBtn,
        handleIncreaseBtn,
        quantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
