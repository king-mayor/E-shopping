import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import cartimg from "../assets/logo (1).png";
import CartProduct from "./CartProduct";
import { CartContext } from "./Context/CartProvider";
import { Headphones } from "./Data";
import Navbar from "./Navbar";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Navbar />
      <div>
        {cart.length > 0 ? (
          <div>
            {cart.map((prod) => (
              <CartProduct product={prod} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col text-center items-center py-10">
            <h2 className="lg:text-2xl text-lg text-gray-400">
              Your cart is empty, please add a product
            </h2>
            <img
              className="lg:w-[200px] lg:h-[200px] w-full px-10"
              src={cartimg}
              alt="cart"
            />
            <Link to="/">
              <button className="text-gray-100 bg-red-600 p-2 border-none outline-none cursor:pointer my-6 font-bold">
                Go Back
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
