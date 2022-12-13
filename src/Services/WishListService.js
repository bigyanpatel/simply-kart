import axios from "axios";
import { useNavigate } from "react-router";

export const getWishListData = async (token, wishListDispatch) => {
  try {
    const res = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });
    wishListDispatch({
      type: "GET_INITIAL_WISHLIST",
      payload: res.data.wishlist,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addToWishList = async (token, product, wishListDispatch) => {
  try {
    const res = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    wishListDispatch({ type: "ADD_TO_WISHLIST", payload: res.data.wishlist });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromWishList = async (
  token,
  productId,
  wishListDispatch
) => {
    try {
      const res = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: { authorization: token },
      });
      wishListDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: res.data.wishlist,
      });
    } catch (error) {
      console.log(error);
    }
};