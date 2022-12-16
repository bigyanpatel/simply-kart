export const orderReducer = (state, action) => {
    switch (action.type) {
      case "SET_ORDERS":
        return {
          orders: [...state.orders, action.payload.order],
        };
  
      default:
        return state;
    }
  };