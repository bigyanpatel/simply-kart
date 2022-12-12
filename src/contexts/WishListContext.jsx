import { createContext, useContext, useState } from "react";

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [userWishList, setUserWishList] = useState([]);
  const [wishList, setWishList] = useState([]);

  return (
    <WishListContext.Provider
      value={{ wishList, setWishList, userWishList, setUserWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { useWishList, WishListProvider };