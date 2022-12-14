import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/CartReducer";

const CartContext = createContext();

const cartInitialState = {
  cartData: [],
};

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };