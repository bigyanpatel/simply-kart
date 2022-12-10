import React from "react";
import { FiTrash } from "react-icons/fi";

export const WishListCard = () => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          className="image-responsive"
          src="https://rukminim1.flixcart.com/image/312/312/jt7jhjk0/book/6/0/7/wake-up-life-is-calling-original-imafehzjxbac5hsz.jpeg?q=70"
          alt="No preview available"
        />
        <span className="card-icon dismiss-icon fs-lg">
          <FiTrash />
        </span>
      </div>
      <div className="card-body">
        <h3 className="card-title">A line in the river</h3>
        <small className="not">By John Willy</small>
        <p className="card-sell-price">
          <span>₹325</span>
          <span className="card-cost-price">₹650</span>
          <span className="card-discount">50%off</span>
        </p>
        <button className="btn is-solid is-cart">Add to Cart</button>
      </div>
    </div>
  );
};