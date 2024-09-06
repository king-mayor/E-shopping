import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "./Context/CartProvider";

import { Headphones } from "./Data";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Product = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const products = Headphones.find((items) => items.id == id);
  console.log(products);

  return (
    <>
      <Navbar />
      <div className="flex items-center lg:flex-row flex-col justify-center gap-10 px-10 my-24">
        <div className="lg:w-2/3 w-full">
          <img
            className="rounded-lg"
            src={products.image}
            alt="product-image"
          />
        </div>
        <div>
          <h2 className="font-bold lg:text-3xl text-2xl text-black uppercase">
            {products.name}
          </h2>
          <h3 className="lg:text-2xl text-xl text-gray-600 font-semibold">
            Product Description
          </h3>
          <p className="text-md text-gray-500 my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            reprehenderit inventore, ab adipisci asperiores in praesentium
            maiores, perferendis quasi doloribus cumque amet id! Laboriosam
            inventore sit odio ea. Optio, consequuntur?
          </p>
          <div className="flex gap-2">
            <button className="text-gray-100 bg-black text-md p-2 cursor-pointer uppercase hover:bg-red-600 border-none outline-none">
              sm
            </button>
            <button className="text-gray-100 bg-black text-md p-2 cursor-pointer uppercase hover:bg-red-600 border-none outline-none">
              md
            </button>
            <button className="text-gray-100 bg-black text-md p-2 cursor-pointer uppercase hover:bg-red-600 border-none outline-none">
              lg
            </button>
            <button className="text-gray-100 bg-black text-md p-2 cursor-pointer uppercase hover:bg-red-600 border-none outline-none">
              xl
            </button>
          </div>
          <div>
            <h3 className="text-red-600 lg:text-xl text-md font-bold my-2">
              Price: {products.price}
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              className="text-gray-100 bg-black p-2 uppercase cursor-pointer border-none outline-none hover:bg-red-600"
              onClick={() => addToCart(products)}
            >
              add to cart
            </button>
            <Link to="/">
              <button className="text-gray-100 bg-black p-2 uppercase cursor-pointer border-none outline-none hover:bg-red-600">
                go back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
