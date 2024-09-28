import React from "react";
import { CartContext } from "./Context/CartProvider";
import { useContext } from "react";
const CartProduct = ({ prod }) => {
  const {
    clearCart,
    removeFromCart,
    handleIncreaseBtn,
    handleDecreaseBtn,
    itemAmount,
    amount,
  } = useContext(CartContext);
  const { id, name, price, image } = prod;
  return (
    <>
      <div className="border-2 border-gray-200 my-4 lg:mx-4 mx-2">
        <div className="flex flex-row justify-around  items-center my-2 md:gap-0 gap-4">
          <div className="lg:flex lg:flex-row flex-col items-center gap-4">
            <div>
              <img
                className="lg:w-28 lg:h-28 w-10 h-10"
                src={image}
                alt="cart-img"
              />
            </div>
            <div>
              <h2 className="lg:text-xl text-md font-bold text-black w-10">
                {name}
              </h2>
            </div>
          </div>
          <div className="flex">
            <div>
              <button
                className="text-gray-100 bg-black font-bold cursor-pointer outline-none border-none p-2"
                onClick={() => handleDecreaseBtn(id)}
              >
                -
              </button>
            </div>
            <div>
              <p className="text-black bg-gray-100 p-2">0</p>
            </div>
            <div>
              <button
                className="text-gray-100 bg-black font-bold cursor-pointer outline-none border-none p-2"
                onClick={() => handleIncreaseBtn(id)}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <p className="lg:text-xl text-md text-gray-600">
              <span className="lg:text-xl text-md font-bold text-black pr-1">
                Price:
              </span>
              ${price}
            </p>
          </div>
          {/* <div>
            <p className="text-xl text-gray-600">
              <span className="text-xl font-bold text-black">Total:</span> $150
            </p>
          </div> */}
          {/* <div>
            <button
              className="text-gray-100 bg-red-600 p-2 cursor-pointer border-none outline-none my-2"
              onClick={clearCart}
            >
              clear cart
            </button>
          </div> */}
          <div>
            <button
              className="text-gray-100 bg-red-600 p-2 cursor-pointer border-none outline-none my-2"
              onClick={() => removeFromCart(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
