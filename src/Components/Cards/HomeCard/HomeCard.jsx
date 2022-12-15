import React from "react";
import { Link } from "react-router-dom";
import "./HomeCard.css";

export const HomeCard = ({ product }) => {
  const { title, imgSrc, sellPrice, costPrice, discount, id } = product;
  return (
    <div className="card flex-center pd-vrtl-sm">
      <Link to={`/products/${id}`}>
        <div className="card-image-container">
          <img className="book-image" src={imgSrc} alt="book cover photo" />
        </div>
      </Link>
      <div className="card-body">
      <h3 className="card-title mg-top">{title}</h3>
        <p className="card-sell-price">
        <span>{sellPrice}₹</span>
          <span className="card-cost-price">{costPrice}₹</span>
          <span className="card-discount">{discount}%off</span>
        </p>
      </div>
    </div>
  );
};