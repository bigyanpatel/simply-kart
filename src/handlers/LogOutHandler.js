import { toast } from "react-toastify";

export const logoutHandler = (
    navigate,
    cartDispatch,
    toastProps,
    wishListDispatch,
    orderDispatch
  ) => {
      setTimeout(() => {
    localStorage.removeItem("loginToken");
    toast.warn("User logged out!!", toastProps);
    cartDispatch({ type: "CLEAR_CART" });
    wishListDispatch({ type: "CLEAR_WISHLIST" });
    orderDispatch({ type: "CLEAR_ORDER" });
    navigate("/");
  }, 1000);
};