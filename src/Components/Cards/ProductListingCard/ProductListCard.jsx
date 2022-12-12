import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

import "./ProductsListCard.css";

export const ProductsListCard = ({ product }) => {
  const { title, imgSrc, author, costPrice, sellPrice, discount, ratings } =
    product;

  return (
    <div className="card">
      <div className="card-image-container">
        <img
          className="image-responsive"
          src={imgSrc}
          alt="No preview available"
        />
        <span className="card-icon favourites fs-lg">
          <FiHeart />
        </span>
      </div>
      <div className="card-body flex-center">
        <p className="card-title center-text">{title}</p>
        <small className="not">{author}</small>
        <span class="rating high-rating mg-vrtl-sm">
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