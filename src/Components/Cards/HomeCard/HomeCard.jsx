import React from "react";
import "./HomeCard.css";

export const HomeCard = () => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          className="book-image"
          src="https://rukminim1.flixcart.com/image/312/312/jt7jhjk0/book/6/0/7/wake-up-life-is-calling-original-imafehzjxbac5hsz.jpeg?q=70"
          alt="No preview available"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">Wake up ,life is calling</h3>
        <p className="card-sell-price">
          <span>₹325</span>
          <span className="card-cost-price">₹650</span>
          <span className="card-discount">50%off</span>
        </p>
      </div>
    </div>
  );
};