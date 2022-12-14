import { createContext, useContext, useState, useReducer } from "react";
import { wishListReducer } from "../reducers/wishListReducer";

const WishListContext = createContext();

const wishListInitialState = {
  wishListData: [],
};

const WishListProvider = ({ children }) => {
  const [wishListState, wishListDispatch] = useReducer(
    wishListReducer,
    wishListInitialState
  );

  return (
    <WishListContext.Provider
      value={{
        wishListState,
        wishListDispatch,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { useWishList, WishListProvider };