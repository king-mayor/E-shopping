import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { CartContext } from "./Context/CartProvider";
const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="">
      <div className="flex justify-between py-6">
        <div className="flex text-center items-center px-10">
          <div>
            <h1 className="text-3xl text-red-500 font-semibold">ESHOP</h1>
          </div>
          <div className="lg:flex hidden ">
            <Link to="/" className="text-lg text-gray-500 font-semibold px-6">
              Home
            </Link>
            <Link to="/" className="text-lg text-gray-500 font-semibold px-6">
              Shop
            </Link>
            <Link to="/" className="text-lg text-gray-500 font-semibold px-6">
              About
            </Link>
            <Link to="/" className="text-lg text-gray-500 font-semibold px-6">
              Blogs
            </Link>
            <Link to="/" className="text-lg text-gray-500 font-semibold px-6">
              Quick Links
            </Link>
          </div>
        </div>
        <div className="flex px-10 gap-6">
          <div>
            <CiSearch className="text-2xl text-gray-500 cursor-pointer md:flex hidden" />
          </div>
          <div className="relative">
            <Link to="/cart">
              <IoCart className="text-2xl text-gray-500 cursor-pointer" />
            </Link>

            <p className="absolute top-0 left-5 bg-red-600 rounded-full text-gray-100 w-5 h-5 text-center font-bold">
              {cart.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
