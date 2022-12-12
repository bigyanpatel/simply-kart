import React from "react";
import "./HomeCard.css";

export const HomeCard = ({ product }) => {
  const { title, imgSrc, sellPrice, costPrice, discount } = product;
  return (
    <div className="card">
      <div className="card-image-container">
        <img className="book-image" src={imgSrc} alt="No preview available" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-sell-price">
          <span>{sellPrice}</span>
          <span className="card-cost-price">{costPrice}</span>
          <span className="card-discount">{discount}off</span>
        </p>
      </div>
    </div>
  );
};