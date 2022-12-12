import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaStar, FaHeart } from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../../../contexts/AuthContext";
import { useWishList } from "../../../contexts/WishListContext";
import "./ProductsListCard.css";
import { useNavigate } from "react-router";

export const ProductsListCard = ({ product }) => {
  const { title, imgSrc, author, costPrice, sellPrice, discount, ratings } =
    product;
  const { setWishList, userWishList, setUserWishList } = useWishList();
  const { token } = useAuth();
  const navigate = useNavigate();

  // console.log("apiwishlist", wishList);

  const temp = userWishList.find((item) => item._id === product._id);

  const addToWishList = async () => {
    if (!token) {
      navigate("/login");
    } else {
      try {
        const res = await axios.post("/api/user/wishlist", product, {
          headers: {
            authorization: token,
          },
        });
        // console.log('add response',res.data);
        setWishList([...res.data.wishlist]);
        temp
          ? [...userWishList]
          : setUserWishList([
              ...userWishList,
              { ...product, isWishList: true },
            ]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img className="image-responsive" src={imgSrc} alt="book product" />
        <span className="card-icon favourites fs-lg">
          <FiHeart onClick={addToWishList} />
        </span>
        {temp && temp.isWishList ? (
          <span className="card-icon filled-favourites fs-lg">
            <FaHeart onClick={addToWishList} />
          </span>
        ) : (
          <span className="card-icon favourites fs-lg">
            <FiHeart onClick={addToWishList} />
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
          <span className="card-discount">{discount}off</span>
        </p>
        <button className="btn is-solid is-cart wd-100">Add to Cart</button>
      </div>
    </div>
  );
};