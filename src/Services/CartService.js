import axios from "axios";

export const getCartData = async (token) => {
  try {
    const res = await axios.get("/api/user/cart", {
      headers: {
        authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = async (token, product, cartDispatch) => {
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
    console.log("add to cart response", res);
    cartDispatch({ type: "ADD_TO_CART", payload: res.data.cart });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = async (token, productId, cartDispatch) => {
  try {
    const res = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    cartDispatch({ type: "REMOVE_FROM_CART", payload: res.data.cart });
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
      console.log("quantity", res);
      cartDispatch({ type: "UPDATE_QUANTITY", payload: res.data.cart });
    } catch (error) {
      console.log(error);
    }
};