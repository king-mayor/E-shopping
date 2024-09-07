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
    <>
      <div>
        <Navbar />
        <div className="">
          {cart.length > 0 ? (
            <div className="">
              {cart.map((prod) => (
                <CartProduct prod={prod} key={prod.id} />
              ))}
              {/* {Checkout Section} */}
              <div
                className="flex lg:justify-end justify-center mx-12 my-10"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <div className="bg-white p-6 shadow-2xl">
                  <div>
                    <h2 className=" text-black text-xl font-bold uppercase">
                      cart summary
                    </h2>
                  </div>
                  <div className="1st flex gap-6">
                    <div>
                      <h3 className="text-lg text-gray-600 font-semibold">
                        Items
                      </h3>
                    </div>
                    <div>
                      <p className="text-lg text-gray-600 font-semibold">3</p>
                    </div>
                  </div>
                  <div className="2nd  flex gap-6 ">
                    <div>
                      <h3 className="text-lg text-gray-600 font-semibold">
                        Sub-total
                      </h3>
                    </div>
                    <div className="text-lg text-gray-600 font-semibold">
                      $390
                    </div>
                  </div>
                  <div className="3rd  flex gap-6">
                    <div>
                      <h3 className="text-lg text-gray-600 font-semibold">
                        Promo Code
                      </h3>
                    </div>
                    <div>
                      <input
                        className="outline-none border-none pl-2 w-14"
                        type="text"
                        placeholder="Enter code"
                      />
                    </div>
                    <div>
                      <button className="text-gray-100 bg-black border-none outline-none cursor-pointer p-2">
                        Apply
                      </button>
                    </div>
                  </div>
                  <div className="4th  flex gap-6">
                    <div>
                      <h3 className="text-lg text-gray-600 font-semibold">
                        Total cost
                      </h3>
                    </div>
                    <div className="text-lg text-red-600 font-bold">$390</div>
                  </div>
                  <div>
                    <button className="capitalize text-gray-100 bg-red-600 cursor-pointer p-2 my-2">
                      check out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="flex flex-col text-center items-center py-10"
              data-aos="zoom-in-right"
              data-aos-duration="2000"
            >
              <h2 className="lg:text-2xl text-lg text-gray-400">
                Your cart is empty, please add a product
              </h2>
              <img
                className=" md:w-[300px] md:h-[200px] w-full px-10"
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
        {/* CheckOut Section */}
      </div>
    </>
  );
};

export default Cart;
