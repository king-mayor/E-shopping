const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.product];
    case "Remove":
    case "Decrease":
    case "Increase":
    default:
      state;
  }
};
export default CartReducer;
