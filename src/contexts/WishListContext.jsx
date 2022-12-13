import { createContext, useContext, useState, useReducer } from "react";
import { useNavigate } from "react-router";
import { wishListReducer } from "../reducers/wishListReducer";
import { getWishListData } from "../Services/WishListService";
import { useAuth } from "./AuthContext";

const WishListContext = createContext();

const wishListInitialState = {
  wishListData: [],
};

const WishListProvider = ({ children }) => {
  const [wishListState, wishListDispatch] = useReducer(
    wishListReducer,
    wishListInitialState
  );
  const { token } = useAuth();

  token && getWishListData(token, wishListDispatch);

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