import React from "react";
import "./Card.css";

export const Card = () => {
  return (
    <div class="card">
      <div class="card-image-container">
        <img
          class="book-image"
          src="https://rukminim1.flixcart.com/image/312/312/jt7jhjk0/book/6/0/7/wake-up-life-is-calling-original-imafehzjxbac5hsz.jpeg?q=70"
          alt="No preview available"
        />
      </div>
      <div class="card-body">
        <h3 class="card-title">Wake up ,life is calling</h3>
        <p class="card-sell-price">
          <span>₹325</span>
          <span class="card-cost-price">₹650</span>
          <span class="card-discount">50%off</span>
        </p>
      </div>
    </div>
  );
};