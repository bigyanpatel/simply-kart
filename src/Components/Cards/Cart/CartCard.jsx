import axios from "axios";
import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
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
    <div className="card-hz">
      <div className="horizontal-image-container">
        <img className="hr-image" src={imgSrc} alt="No preview available" />
      </div>
      <div className="card-body-wrapper">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <small>{author}</small>
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
            <button onClick={decrementQuantity} className="button-count-minus">
              <span className="flex">
                <FiMinus />
              </span>
            </button>
          </div>
          <div className="card-button-container mt">
            <button
              onClick={removeFromCartHandler}
              className="btn is-btn-danger is-outlined pd-sm"
            >
              Remove from cart
            </button>
            <button onClick={addToWishList} className="is-secondary pd-sm">
              Move to favourites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};