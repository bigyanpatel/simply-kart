import React from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useAuth } from "../../../contexts/AuthContext";
import { useCart } from "../../../contexts/CartContext";
import { useDataStore } from "../../../contexts/DataStoreContext";
import { useWishList } from "../../../contexts/WishListContext";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../../../Services/CartService";
import { addToWishList } from "../../../Services/WishListService";
import "./CartCard.css";

export const CartCard = ({ cartItem }) => {
  const { _id, title, imgSrc, qty, author, costPrice, sellPrice, discount } =
    cartItem;
  const { token } = useAuth();
  const { cartDispatch } = useCart();
  const {
    wishListState: { wishListData },
    wishListDispatch,
  } = useWishList();
  const { toastProps } = useDataStore();

  return (
    <div className="card-hz flex-row">
      <img className="hr-image" src={imgSrc} alt="book cover photo" />
      <div className="cart-card-body">
        <p className="fs-btw-ml">{title}</p>
        <small className="card-sub-title">{author}</small>
        <p className="card-sell-price">
          <span>{sellPrice}₹</span>
          <span className="card-cost-price">{costPrice}₹</span>
          <span className="card-discount">{discount}%off</span>
        </p>
        <div className="quantity-count">
          {cartItem.qty > 1 ? (
            <button
              onClick={() =>
                updateCartItemQuantity(token, _id, "decrement", cartDispatch)
              }
              className="button-count-minus"
            >
              <span className="flex">
                <FiMinus />
              </span>
            </button>
          ) : (
            <button
              onClick={() =>
                removeFromCart(token, _id, cartDispatch, toastProps)
              }
              className="button-count-minus"
            >
              <span className="flex">
                <FiTrash2 />
              </span>
            </button>
          )}
          <p className="quantity-value">{qty}</p>
          <button
            onClick={() =>
              updateCartItemQuantity(token, _id, "increment", cartDispatch)
            }
            className="button-count-plus"
          >
            <span className="flex">
              <FiPlus />
            </span>
          </button>
        </div>
        <div className="card-button-container mt">
          {wishListData.find((item) => item._id === cartItem._id) ? (
            <button
              onClick={() =>
                removeFromCart(token, _id, cartDispatch, toastProps)
              }
              className="btn is-btn-secondary is-outlined pd-sm"
            >
              ALREADY IN WISHLIST
            </button>
          ) : (
            <button
              onClick={() => {
                removeFromCart(token, _id, cartDispatch, toastProps);
                addToWishList(token, cartItem, wishListDispatch, toastProps);
              }}
              className="btn is-btn-secondary is-outlined pd-sm"
            >
              MOVE IN WISHLIST
            </button>
          )}
        </div>
      </div>
    </div>
  );
};