const cartReducer = (state, action) => {
  switch (action.type) {
    case "GET_INITIAL_WISHLIST":
      return { cartData: action.payload };

    case "ADD_TO_CART":
      return { cartData: action.payload };

    case "REMOVE_FROM_CART":
      return { cartData: action.payload };

    case "UPDATE_QUANTITY":
      return { cartData: action.payload };

    default:
      return state;
  }
};

export { cartReducer };