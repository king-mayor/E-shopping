import React, { useContext, useEffect } from "react";
import { Headphones } from "./Data.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "./Context/CartProvider.jsx";
const Products = () => {
  const { products, addToCart } = useContext(CartContext);

  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center py-10">
          <h1 className="text-4xl font-bold py-2">Our Products</h1>
          <h2 className="text-lg text-gray-500">Explore Our Products</h2>
        </div>
        <div className="">
          <div className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-10">
            {products.map((item) => (
              <div key={item.id}>
                <div>
                  <Link to={`/product/${item.id}`}>
                    <img
                      className="w-64 h-64 rounded-lg"
                      src={item.image}
                      alt="product-image"
                    />
                  </Link>

                  <h2 className="text-xl font-semibold text-black">
                    {item.name}
                  </h2>
                  <h3 className="text-lg font-bold text-gray-500">
                    {item.price}
                  </h3>
                  <button
                    className="text-gray-100 bg-red-600 py-1 px-3 cursor-pointer rounded-2xl my-3 border-none outline-none active:bg-black"
                    onClick={() => addToCart(item)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
