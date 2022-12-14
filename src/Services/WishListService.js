import axios from "axios";
import { toast } from "react-toastify";

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

export const addToWishList = async (
  token,
  product,
  wishListDispatch,
  toastProps
) => {
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
    toast.success(`${product.title} added to wishlist!`, toastProps);
  } catch (error) {
    console.log(error);
  }
};

export const removeFromWishList = async (
  token,
  productId,
  wishListDispatch,
  toastProps
) => {
    try {
      const res = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: { authorization: token },
      });
      wishListDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: res.data.wishlist,
      });
      toast.info("Item removed from wishlsit!", toastProps);
    } catch (error) {
      console.log(error);
    }
};