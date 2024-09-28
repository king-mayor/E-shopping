import { createContext, useEffect, useState } from "react";
import { Headphones } from "../Data.jsx";
import React from "react";
export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState(Headphones);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);
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

  // clear the entire cart
  const clearCart = () => {
    setCart([]);
  };
  //function to decrease the amount
  const handleDecreaseBtn = (id) => {
    const cartItem = cart.find((product) => {
      return product.id === id;
      if (cartItem) {
        const newCart = cart.map((item) => {
          if (item.id === id) {
            return { ...item, amount: cartItem.amount - 1 };
          } else {
            return item;
          }
          setCart(newCart);
        });
        if (cartItem.amount < 1) {
          removeFromCart(id);
        }
      }
    });
  };
  // function to increase the amount
  const handleIncreaseBtn = (id) => {
    const cartItem = cart.find((product) => {
      product.id == id;
      if (cartItem) {
        addToCart(product, id);
      }
    });
    // function to calculate the total
    useEffect(() => {
      const total = cart.reduce((accumulator, currentItem) => {
        const priceToNumber = parseFloat(currentItem.price);
        if (isNaN(priceToNumber)) {
          return accumulator;
        } else {
          return accumulator + priceToNumber * currentItem.amount;
        }
      }, 0);
      setTotal(total);
    }, [cart]);
    //function to calculate the amount
    useEffect(() => {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }, [cart]);
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
        itemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
