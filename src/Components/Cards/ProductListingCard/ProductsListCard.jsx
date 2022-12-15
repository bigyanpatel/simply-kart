import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaStar, FaHeart } from "react-icons/fa";
import "./ProductsListCard.css";
import {
  addToWishList,
  removeFromWishList,
} from "../../../Services/WishListService";
import { addToCart } from "../../../Services/CartService";
import {
  useCart,
  useDataStore,
  useAuth,
  useWishList,
} from "../../../contexts/contextExport";
import { Link, useNavigate } from "react-router-dom";

export const ProductsListCard = ({ product }) => {
  const {
    _id,
    title,
    imgSrc,
    author,
    costPrice,
    sellPrice,
    discount,
    ratings,
    id,
  } = product;
  const { token } = useAuth();
  const { wishListState, wishListDispatch } = useWishList();
  const { cartState, cartDispatch } = useCart();
  const { toastProps } = useDataStore();
  const { cartData } = cartState;
  const { wishListData } = wishListState;
  const navigate = useNavigate();

  return (
    <div className="card flex-center pd-sm">
      <div className="card-image-container">
        <Link to={`./${id}`}>
          <img className="image-responsive" src={imgSrc} alt="book product" />
        </Link>
        {wishListData.find((item) => item._id === product._id) ? (
          <span className="card-icon filled-favourites fs-md">
            <FaHeart
              onClick={() =>
                removeFromWishList(token, _id, wishListDispatch, toastProps)
              }
            />
          </span>
        ) : (
          <span className="card-icon favourites fs-md">
            <FiHeart
              onClick={() =>
                addToWishList(
                  token,
                  product,
                  wishListDispatch,
                  toastProps,
                  navigate
                )
              }
            />
          </span>
        )}
      </div>
      <div className="card-body flex-center">
        <p className="card-title center-text">{title}</p>
        <small className="not">{author}</small>
        <span className="rating high-rating mg-vrtl-sm">
          <span>{ratings}</span>
          <FaStar className="mg-l" />
        </span>
        <p className="card-sell-price center-text pd-hztl-sm">
          <span>₹{sellPrice}</span>
          <span className="card-cost-price">₹{costPrice}</span>
          <span className="card-discount">{discount}%off</span>
        </p>
        {cartData.find((item) => item._id === product._id) ? (
          <Link to="/cart">
            <button className="btn is-solid is-cart wd-100">GO TO CART</button>
          </Link>
        ) : (
          <button
            onClick={() =>
              addToCart(token, product, cartDispatch, toastProps, navigate)
            }
            className="btn is-solid is-cart wd-100"
          >
            ADD TO CART
          </button>
        )}
      </div>
    </div>
  );
};