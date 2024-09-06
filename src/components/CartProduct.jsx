import React from "react";
import { CartContext } from "./Context/CartProvider";
import { useContext } from "react";
const CartProduct = ({ prod }) => {
  const { clearCart, removeFromCart } = useContext(CartContext);
  const { id, name, price, image } = prod;
  return (
    <>
      <div>
        <div className="flex md:flex-row flex-col justify-around  items-center my-6 md:gap-0 gap-4">
          <div className="flex items-center gap-4">
            <div>
              <img className="w-28 h-28" src={image} alt="cart-img" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-black">{name}</h2>
              <button
                className="text-gray-100 bg-red-600 p-2 cursor-pointer border-none outline-none my-2"
                onClick={removeFromCart}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <button className="text-gray-100 bg-black font-bold cursor-pointer outline-none border-none p-2">
                -
              </button>
            </div>
            <div>
              <p className="text-black bg-gray-100 p-2">0</p>
            </div>
            <div>
              <button className="text-gray-100 bg-black font-bold cursor-pointer outline-none border-none p-2">
                +
              </button>
            </div>
          </div>
          <div>
            <p className="text-xl text-gray-600">
              <span className="text-xl font-bold text-black">Price:</span> $
              {price}
            </p>
          </div>
          <div>
            <p className="text-xl text-gray-600">
              <span className="text-xl font-bold text-black">Total:</span> $150
            </p>
          </div>
          <div>
            <button
              className="text-gray-100 bg-red-600 p-2 cursor-pointer border-none outline-none my-2"
              onClick={clearCart}
            >
              clearCart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
