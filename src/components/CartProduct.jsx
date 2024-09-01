import React from "react";

const CartProduct = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt="cart-img" />
    </div>
  );
};

export default CartProduct;
