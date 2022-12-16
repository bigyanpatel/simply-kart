import React from "react";
import { useNavigate } from "react-router";
import {
  useCart,
  useWishList,
  useOrder,
  useDataStore,
} from "../../../contexts/contextExport";
import { logoutHandler } from "../../../handlers/LogOutHandler";

export const Settings = () => {
  const navigate = useNavigate();
  const { cartDispatch } = useCart();
  const { wishListDispatch } = useWishList();
  const { toastProps } = useDataStore();
  const { orderDispatch } = useOrder();
  return (
    <div className="pd-lg">
      <button
        onClick={() =>
          logoutHandler(
            navigate,
            cartDispatch,
            toastProps,
            wishListDispatch,
            orderDispatch
          )
        }
        className="btn is-solid "
      >
        Log Out
      </button>
    </div>
  );
};