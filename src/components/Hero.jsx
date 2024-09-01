import React, { useEffect } from "react";
import { Data } from "./Data";
import Slider from "react-slick";
const Hero = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
          {Data.map((item) => (
            <div key={item.id}>
              <div className="bg-gray-200 mx-10 rounded-xl">
                <div className="flex lg:justify-center lg:flex-row flex-col-reverse items-center py-10 border-none outline-none">
                  <div>
                    <h1 className="text-3xl text-gray-800 font-bold">
                      {item.textOne}
                    </h1>
                    <h2 className="lg:text-6xl md:text-3xl text-2xl font-bold py-6">
                      {item.textTwo}
                    </h2>
                    <h3 className="lg:text-8xl md:text-5xl text-4xl text-gray-50">
                      {item.textThree}
                    </h3>
                    <button className="capitalize text-white bg-red-600 border-none p-2 cursor-pointer rounded-3xl mt-4">
                      shop by category
                    </button>
                  </div>
                  <div>
                    <img
                      className="h-[400px] w-[400px]"
                      src={item.image}
                      alt="hero-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
