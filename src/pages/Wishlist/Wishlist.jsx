import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { FiTrash } from "react-icons/fi";
import "./Wishlist.css";

export const Wishlist = () => {
  return (
    <div>
      <Navbar />
      <div class="card">
        <div class="card-image-container">
          <img
            class="image-responsive"
            src="https://rukminim1.flixcart.com/image/312/312/jt7jhjk0/book/6/0/7/wake-up-life-is-calling-original-imafehzjxbac5hsz.jpeg?q=70"
            alt="No preview available"
          />
          <span class="card-icon dismiss-icon fs-lg">
            <FiTrash />
          </span>
        </div>
        <div class="card-body">
          <h3 class="card-title">A line in the river</h3>
          <small class="not">By John Willy</small>
          <p class="card-sell-price">
            <span>₹325</span>
            <span class="card-cost-price">₹650</span>
            <span class="card-discount">50%off</span>
          </p>
          <button class="btn is-solid is-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};