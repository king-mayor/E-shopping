import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;
