const wishListReducer = (state, action) => {
    switch (action.type) {
      case "GET_INITIAL_WISHLIST":
        return { wishListData: action.payload };
  
      case "ADD_TO_WISHLIST":
        return { wishListData: action.payload };
  
      case "REMOVE_FROM_WISHLIST":
        return { wishListData: action.payload };
  
      default:
        return state;
    }
  };
  
  export { wishListReducer };