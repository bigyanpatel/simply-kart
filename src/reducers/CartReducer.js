import { addToCart } from "../helperFunctions/CartHelpers/addToCart";
import { decrementQuantity } from "../helperFunctions/CartHelpers/decrementQuantity";
import { removeFromCart } from "../helperFunctions/CartHelpers/removeFromCart";

const cartInitialState = {
  cartItems: [],
  cartArray: [],
  cartStatus: 0,
  bill: 0,
  discount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART_FROM_API":
      return { ...state, cartArray: [...action.payload] };
    case "ADD_TO_CART":
      return addToCart(state, action);
    case "REMOVE_FROM_CART":
      return removeFromCart(state, action);
    case "DECREMENT_QUANTITY":
      return decrementQuantity(state, action);
    default:
      return state;
  }
};

export { cartReducer, cartInitialState };