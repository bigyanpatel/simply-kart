export const addressReducer = (state, action) => {
    switch (action.type) {
      case "ADDRESS_OPERATIONS":
        return { addresses: action.payload.addresses };
      default:
        return state;
    }
  };