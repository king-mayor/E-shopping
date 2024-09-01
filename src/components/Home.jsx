import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import Blog2 from "./Blog2";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Products from "./Products";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* {Navbar Component} */}
      <Navbar />
      {/* {Hero Section} */}
      <Hero />
      {/* {Blog Section} */}
      <Blog />
      {/* {Products Section} */}
      <Products />
      {/* {Blog Section Two} */}
      <Blog2 />
      {/* {Footer Section} */}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
