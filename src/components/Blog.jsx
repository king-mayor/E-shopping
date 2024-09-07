import React from "react";
import earphone from "../assets/earphone.png";
import watch1 from "../assets/watch (1).png";
import macbook from "../assets/macbook.png";
import gaming from "../assets/gaming.png";
import vrimg from "../assets/vr.png";
import speaker from "../assets/speaker.png";
import headphone from "../assets/headphone.png";
import { FaCarSide } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaHeadphonesSimple } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
const Blog = () => {
  return (
    <div>
      {/* {First Blog Section} */}
      <div className="flex py-10 lg:justify-center lg:flex-row flex-col items-center text-start gap-6 px-6">
        <div
          className="flex items-center bg-zinc-800 pt-2 pb-2 lg:pl-10 lg:pr-2 rounded-2xl h-[300px] lg:w-1/3 w-full justify-center lg:px-0 px-3"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="relative">
            <h2 className="text-md text-gray-400">Enjoy</h2>
            <h3 className="text-lg text-gray-50 font-bold">With</h3>
            <h4 className="text-gray-400 text-5xl font-bold py-2">Earphone</h4>
            <button className="text-gray-100 text-xl relative z-50 bg-red-600 rounded-2xl px-4 py-1 cursor-pointer hover:translate-x-1 border-none outline-none">
              Browse
            </button>
          </div>
          <div className="absolute">
            <img className="w-64 h-64" src={earphone} alt="blog-earphone" />
          </div>
        </div>

        <div
          className="flex items-center bg-yellow-300 pt-2 pb-2 lg:pl-10 lg:pr-2 rounded-2xl h-[300px] lg:w-1/3 w-full justify-center lg:px-0 px-3"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="relative">
            <h2 className="text-md text-gray-400">Enjoy</h2>
            <h3 className="text-lg text-gray-50 font-bold">With</h3>
            <h4 className="text-gray-100 lg:text-7xl text-5xl font-bold py-2">
              Gadget
            </h4>
            <button className="text-yellow-300 text-xl relative z-50 bg-white rounded-2xl px-4 py-1 cursor-pointer hover:translate-x-1 border-none outline-none">
              Browse
            </button>
          </div>
          <div className="absolute">
            <img className="w-64 h-64" src={watch1} alt="blog-earphone" />
          </div>
        </div>

        <div
          className="flex items-center lg:justify-around bg-red-600 pt-2 pb-2 lg:pl-10 lg:pr-2 rounded-2xl h-[300px] lg:w-2/3 w-full justify-center lg:px-0 px-3"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="relative">
            <h2 className="text-md text-gray-400">Enjoy</h2>
            <h3 className="text-lg text-gray-50 font-bold">With</h3>
            <h4 className="text-gray-200 lg:text-7xl text-4xl font-bold py-2">
              Laptop
            </h4>
            <button className="text-red-600 text-xl relative z-50 bg-white rounded-2xl px-4 py-1 cursor-pointer hover:translate-x-1 border-none outline-none">
              Browse
            </button>
          </div>
          <div className="">
            <img className="w-64 h-64" src={macbook} alt="blog-earphone" />
          </div>
        </div>
      </div>
      {/* {Second Blog Section} */}
      <div className="flex py-10 justify-center lg:flex-row flex-col items-center text-start gap-6 px-6">
        <div
          className="flex items-center lg:justify-around bg-gray-300 pt-2 pb-2 lg:pl-10 lg:pr-2 rounded-2xl h-[300px] lg:w-2/3 w-full justify-center lg:px-0 px-3"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="relative">
            <h2 className="text-md text-gray-100">Enjoy</h2>
            <h3 className="text-lg text-gray-50 font-bold">With</h3>
            <h4 className="text-gray-200 lg:text-7xl text-4xl font-bold py-2">
              Laptop
            </h4>
            <button className="text-gray-100 text-xl bg-red-600 rounded-2xl px-4 py-1 cursor-pointer hover:translate-x-1 border-none outline-none">
              Browse
            </button>
          </div>
          <div className="">
            <img className="w-64 h-64" src={gaming} alt="blog-earphone" />
          </div>
        </div>

        <div
          className="flex items-center bg-green-500 pt-2 pb-2 lg:pl-10 lg:pr-2 rounded-2xl h-[300px] lg:w-1/3 w-full justify-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="relative">
            <h2 className="text-md text-gray-400">Enjoy</h2>
            <h3 className="text-lg text-gray-50 font-bold">With</h3>
            <h4 className="text-gray-100 text-5xl font-bold py-2">Earphone</h4>
            <button className="text-green-500 text-xl z-50 relative bg-white rounded-2xl px-4 py-1 cursor-pointer hover:translate-x-1 border-none outline-none">
              Browse
            </button>
          </div>
          <div className="absolute">
            <img className="w-64 h-64" src={vrimg} alt="blog-earphone" />
          </div>
        </div>

        <div
          className="flex items-center lg:justify-around bg-blue-600 pt-2 lg:pb-2 lg:pl-10 pr-2 rounded-2xl h-[300px] lg:w-1/3 w-full justify-center lg:px-0 px-3"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="relative">
            <h2 className="text-md text-gray-100">Enjoy</h2>
            <h3 className="text-lg text-gray-50 font-bold">With</h3>
            <h4 className="text-gray-200 text-5xl font-bold py-2">Laptop</h4>
            <button className="text-blue-600 text-xl bg-white rounded-2xl px-4 py-1 cursor-pointer hover:translate-x-1 border-none outline-none">
              Browse
            </button>
          </div>
          <div className="">
            <img className="w-64 h-64" src={speaker} alt="blog-earphone" />
          </div>
        </div>
      </div>
      {/* {Shipping Section} */}
      <div className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center lg:gap-0 gap-6">
        <div
          className="flex items-center flex-col gap-2"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="text-red-600 text-5xl font-bold">
            <FaCarSide />
          </div>
          <div>
            <h2 className="text-black text-2xl font-bold py-1">
              Free Shipping
            </h2>
            <h3 className="text-md text-gray-400">
              Free Shipping On All Order
            </h3>
          </div>
        </div>
        <div
          className="flex items-center flex-col gap-2"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="text-red-600 text-5xl font-bold">
            <AiOutlineSafety />
          </div>
          <div>
            <h2 className="text-black text-2xl font-bold">Safe Money</h2>
            <h3 className="text-md text-gray-400 py-1">30 Days Money Back</h3>
          </div>
        </div>
        <div
          className="flex items-center flex-col gap-2"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="text-red-600 text-5xl font-bold">
            <RiSecurePaymentLine />
          </div>
          <div>
            <h2 className="text-black text-2xl font-bold">Secure Payment</h2>
            <h3 className="text-md text-gray-400 py-1">All Payments Secured</h3>
          </div>
        </div>
        <div
          className="flex items-center flex-col gap-2"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="text-red-600 text-5xl font-bold">
            <FaHeadphonesSimple />
          </div>
          <div>
            <h2 className="text-black text-2xl font-bold">
              Online Support 24/7
            </h2>
            <h3 className="text-md text-gray-400 py-1">
              Technical Support 24/7
            </h3>
          </div>
        </div>
      </div>
      {/* {Product Hero Section} */}
      <div className="py-24">
        <div className="bg-red-600 flex items-center justify-center lg:flex-row flex-col rounded-2xl mx-10 lg:h-[400px] lg:py-0 py-10">
          <div data-aos="fade-in" data-aos-duration="2000">
            <h2 className="text-gray-100 text-md">30% OFF</h2>
            <h3 className="uppercase text-7xl font-bold text-gray-100 py-4">
              fine<br></br> smile
            </h3>
            <h4 className="text-gray-100 text-md">10 Jan to 28 Jan</h4>
          </div>
          <div className="">
            <img
              className=""
              src={headphone}
              alt="headphone"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            />
          </div>
          <div data-aos="fade-in" data-aos-duration="2000">
            <h2 className="text-gray-100 text-md">Air Solo Bass</h2>
            <h3 className="uppercase text-3xl font-bold text-gray-100 py-4">
              Winter Sale
            </h3>
            <p className="text-gray-100 text-md pb-4">
              Lorem ipsum, dolor sit amet consectetur<br></br> adipisicing elit.
              Eaque reiciendis
            </p>
            <button className="text-2xl text-red-600 border-none outline-none bg-gray-100 py-1 px-3 cursor-pointer rounded-3xl">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
