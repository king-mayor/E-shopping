import React from "react";
import { Link } from "react-router-dom";
import { BsFillSendFill } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex lg:justify-around md:flex-row flex-col py-14 lg:gap-0 gap-10 justify-center lg:px-0 px-10">
      <div>
        <h2 className="text-3xl text-red-600 font-semibold">ESHOP</h2>
        <p className="text-md text-gray-600 text-wrap">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          alias cum
        </p>
        <h3 className="lg:text-lg text-md text-gray-500">
          Made with 💖 by Mayor Odegbaro
        </h3>
        <button className="text-gray-100 bg-red-600 py-1 px-3 border-none outline-none cursor-pointer rounded-2xl my-3">
          Contact Me
        </button>
      </div>
      <div>
        <h2 className="lg:text-xl text-lg font-bold text-black">
          Important Links
        </h2>
        <div className="flex flex-col text-gray-600 gap-2 my-2 hover:">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Blog</Link>
        </div>
      </div>
      <div>
        <h2 className="lg:text-xl text-lg font-bold text-black">Quick Links</h2>
        <div className="flex flex-col text-gray-600 gap-2 my-2 hover:">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Blog</Link>
        </div>
      </div>
      <div>
        <h2 className="lg:text-xl text-lg font-bold text-black">Address</h2>
        <div className="flex items-center gap-3 my-2">
          <div>
            <BsFillSendFill className="cursor-pointer" />
          </div>
          <div>
            <p className="text-gray-600 text-lg">Noida , Uttar Pradesh</p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <FaMobileAlt className="cursor-pointer" />
          </div>
          <div>
            <p className="text-gray-600 text-lg">+455 5523 34287</p>
          </div>
        </div>
        <div className="flex my-6 gap-2">
          <FaInstagram className="cursor-pointer text-3xl" />
          <FaFacebook className="cursor-pointer text-3xl" />
          <FaLinkedin className="cursor-pointer text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
