import { toast } from "react-toastify";

export const logoutHandler = (navigate, cartDispatch, toastProps) => {
  setTimeout(() => {
    localStorage.removeItem("loginToken");
    toast.warn("User logged out!!", toastProps);
    cartDispatch({ type: "CLEAR_CART" });
    navigate("/");
  }, 1000);
};