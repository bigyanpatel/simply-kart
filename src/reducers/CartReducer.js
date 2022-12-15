const cartReducer = (state, action) => {
  switch (action.type) {
    case "GET_INITIAL_WISHLIST":
      return { ...state, cartData: action.payload };

    case "ADD_TO_CART":
      return { ...state, cartData: action.payload };

    case "REMOVE_FROM_CART":
      return { ...state, cartData: action.payload };

    case "UPDATE_QUANTITY":
      return { ...state, cartData: action.payload };

    case "APPLY_COUPON":
      return {
        ...state,
        coupon: action.payload.coupon,
      };

    default:
      return state;
  }
};

export { cartReducer };