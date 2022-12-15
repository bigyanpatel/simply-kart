export const addressReducer = (state, action) => {
    switch (action.type) {
      case "ADDRESS_OPERATIONS":
        return { ...state, addresses: action.payload.addresses };

    case "CURRENT_ADDRESS":
      return {
        ...state,
        mobile: action.payload.mobile,
      };
      default:
        return state;
    }
  };