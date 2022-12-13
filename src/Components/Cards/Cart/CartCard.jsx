import axios from "axios";
import React from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useCart } from "../../../contexts/CartContext";
import { useWishList } from "../../../contexts/WishListContext";
import { useDataStore } from "../../../contexts/DataStoreContext";
import "./CartCard.css";

export const CartCard = ({ cartItem }) => {
  const {
    _id,
    title,
    imgSrc,
    author,
    quantity,
    costPrice,
    sellPrice,
    discount,
  } = cartItem;
  const { token } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const { setWishList, userWishList, setUserWishList } = useWishList();
  const navigate = useNavigate();
  const { toastProps } = useDataStore();

  const addToWishList = async () => {
    if (!token) {
      navigate("/login");
    } else {
      try {
        const res = await axios.post("/api/user/wishlist", cartItem, {
          headers: {
            authorization: token,
          },
        });
        setWishList([...res.data.wishlist]);
        userWishList.find((item) => item._id === cartItem._id)
          ? setUserWishList([...userWishList])
          : setUserWishList([
              ...userWishList,
              { ...cartItem, isWishList: true },
            ]);
      } catch (error) {
        console.log(error);
      }
    }
    removeFromCartHandler();
  };

  const removeFromCartHandler = async () => {
    try {
      const res = await axios.delete(`/api/user/cart/${_id}`, {
        headers: {
          authorization: token,
        },
      });
      if (res.status === 200 || res.status === 201) {
        cartDispatch({
          type: "REMOVE_FROM_CART",
          payload: res.data.cart,
          cartItem,
        });
      }
      toast.error(`${title} removed from cart`, toastProps);
    } catch (error) {
      console.log(error);
    }
  };

  const incrementQuantity = async () => {
    try {
      const res = await axios.post(
        `/api/user/cart/${_id}`,
        {
          action: {
            type: "increment",
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (res.status === 200 || res.status === 201) {
        cartDispatch({
          type: "ADD_TO_CART",
          payload: res.data.cart,
          product: cartItem,
        });
      }
      toast.success(`One more ${title} book added `, toastProps);
    } catch (error) {
      console.log(error);
    }
  };

  const decrementQuantity = async () => {
    if (quantity === 1) {
      removeFromCartHandler();
      return;
    } else {
      try {
        const res = await axios.post(
          `/api/user/cart/${_id}`,
          {
            action: {
              type: "decrement",
            },
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
        if (res.status === 200 || res.status === 201) {
          cartDispatch({
            type: "DECREMENT_QUANTITY",
            payload: res.data.cart,
            product: cartItem,
          });
        }
        toast.warn(`Oh! one ${title} book deducted `, toastProps);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="card-hz flex-row">
      <img className="hr-image" src={imgSrc} alt="book cover photo" />
      <div className="cart-card-body">
        <p>{title}</p>
        <small className="card-sub-title">{author}</small>
        <p className="card-sell-price">
          <span>{sellPrice}₹</span>
          <span className="card-cost-price">{costPrice}₹</span>
          <span className="card-discount">{discount}%off</span>
        </p>
        <div className="quantity-count">
          <button onClick={incrementQuantity} className="button-count-plus">
            <span className="flex">
              <FiPlus />
            </span>
          </button>
          <p className="quantity-value">{quantity}</p>
          {cartItem.quantity > 1 ? (
            <button onClick={decrementQuantity} className="button-count-minus">
              <span className="flex">
                <FiMinus />
              </span>
            </button>
          ) : (
            <button
              onClick={removeFromCartHandler}
              className="button-count-minus"
            >
              <span className="flex">
                <FiTrash2 />
              </span>
            </button>
          )}
          </div>
          <div className="card-button-container mt">
            <button
              onClick={addToWishList}
              className="btn is-btn-secondary is-outlined pd-sm"
            >
              Move to wishlist
            </button>
        </div>
      </div>
    </div>
  );
};