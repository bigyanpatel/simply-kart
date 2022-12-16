import React, { createContext, useContext, useReducer } from "react";
import { orderReducer } from "../reducers/orderReducer";

const OrderContext = createContext();

const initialState = {
  orders: [],
};

const OrderProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(orderReducer, initialState);
  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrder = () => useContext(OrderContext);

export { useOrder, OrderProvider };