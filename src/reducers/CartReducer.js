const cartReducer = (state, action) => {
  switch (action.type) {
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
      case "PAYMENT":
        return {
          ...state,
          paymentId: action.payload.paymentId,
          isPaymentDone: true,
        };
    
      case "CLEAR_CART":
      return {
        coupon: {},
        cartData: [],
        isPaymentDone: false,
        paymentId: "",
      };
      
    default:
      return state;
  }
};

export { cartReducer };