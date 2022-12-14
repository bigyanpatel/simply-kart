import axios from "axios";
import { toast } from "react-toastify";

export const getCartData = async (token) => {
  try {
    return await axios.get("/api/user/cart", {
      headers: {
        authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = async (
  token,
  product,
  cartDispatch,
  toastProps,
  navigate
) => {
  if (!token) {
    navigate("/login");
    return;
  }
  try {
    const res = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    cartDispatch({ type: "ADD_TO_CART", payload: res.data.cart });
    toast.success(`${product.title} added to cart!`, toastProps);
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = async (
  token,
  productId,
  cartDispatch,
  toastProps
) => {
  try {
    const res = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    cartDispatch({ type: "REMOVE_FROM_CART", payload: res.data.cart });
    toast.info(`Item removed from cart!`, toastProps);
  } catch (error) {
    console.log(error);
  }
};

export const updateCartItemQuantity = async (
  token,
  productId,
  quantityType,
  cartDispatch
) => {
  try {
    const res = await axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type: quantityType,
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    cartDispatch({ type: "UPDATE_QUANTITY", payload: res.data.cart });
  } catch (error) {
    console.log(error);
  }
};