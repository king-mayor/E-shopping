import React from "react";
import watch from "../assets/smartwatch2-removebg-preview.png";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";
import br1 from "../assets/br-1.png";
import br2 from "../assets/br1.png";
import br3 from "../assets/br2.png";
import br4 from "../assets/br3.png";
import br5 from "../assets/br4.png";
const Blog2 = () => {
  return (
    <div>
      <div className="py-24">
        <div className="bg-green-500 flex items-center lg:flex-row flex-col justify-center rounded-2xl mx-10 lg:h-[400px] lg:py-0 py-10">
          <div>
            <h2 className="text-gray-100 text-md">30% OFF</h2>
            <h3 className="uppercase text-7xl font-bold text-gray-100 py-4">
              fine<br></br> smile
            </h3>
            <h4 className="text-gray-100 text-md">14 Jan to 28 Jan</h4>
          </div>
          <div className="">
            <img className="" src={watch} alt="headphone" />
          </div>
          <div>
            <h2 className="text-gray-100 text-md">Air Solo Bass</h2>
            <h3 className="uppercase text-3xl font-bold text-gray-100 py-4">
              Winter Sale
            </h3>
            <p className="text-gray-100 text-md pb-4">
              Lorem ipsum, dolor sit amet consectetur<br></br> adipisicing elit.
              Eaque reiciendis
            </p>
            <button className="text-2xl text-green-600 border-none outline-none bg-gray-100 py-1 px-3 cursor-pointer rounded-3xl">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      {/* {Recent News} */}
      <div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-black">Recent News</h2>
          <h4 className="text-lg text-gray-500 py-2">Explore Our Blogs</h4>
        </div>
        {/* {Display Blogs Section} */}
        <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 py-6 justify-items-center md:px-0 px-20">
          <div className="">
            <img
              className="lg:w-96 w-full h-64 rounded-2xl"
              src={blog1}
              alt="blog-1"
            />
            <h5 className="text-gray-500 text-md">Jan 20, 2024 by Dilshad</h5>
            <h2 className="text-xl font-bold text-black">
              How to choose perfect smartwatch
            </h2>
            <p className="text-gray-500 text-md">
              minima facere deserunt vero illo beatae deleniti eius dolores
              consequuntur, eligendi corporis maiores molestiae...
            </p>
          </div>
          <div className="">
            <img
              className="lg:w-96 w-full h-64 rounded-2xl"
              src={blog2}
              alt="blog-1"
            />
            <h5 className="text-gray-500 text-md">Jan 20, 2024 by Satya</h5>
            <h2 className="text-xl font-bold text-black">
              How to choose perfect gadget
            </h2>
            <p className="text-gray-500 text-md">
              minima facere deserunt vero illo beatae deleniti eius dolores
              consequuntur, eligendi corporis maiores molestiae...
            </p>
          </div>
          <div className="">
            <img
              className="lg:w-96 w-full h-64 rounded-2xl"
              src={blog3}
              alt="blog-1"
            />
            <h5 className="text-gray-500 text-md">Jan 20, 2024 by Sabir</h5>
            <h2 className="text-xl font-bold text-black">
              How to choose perfect VR headset
            </h2>
            <p className="text-gray-500 text-md">
              minima facere deserunt vero illo beatae deleniti eius dolores
              consequuntur, eligendi corporis maiores molestiae...
            </p>
          </div>
        </div>
      </div>
      {/* {Logo Display Section} */}
      <div className="bg-gray-200 md:flex justify-around py-6 hidden">
        <div>
          <img className="w-20 h-16" src={br1} alt="brand-logo" />
        </div>
        <div>
          <img className="w-20 h-16" src={br2} alt="brand-logo" />
        </div>
        <div>
          <img className="w-20 h-16" src={br3} alt="brand-logo" />
        </div>
        <div>
          <img className="w-20 h-16" src={br4} alt="brand-logo" />
        </div>
        <div>
          <img className="w-20 h-16" src={br5} alt="brand-logo" />
        </div>
      </div>
    </div>
  );
};

export default Blog2;
