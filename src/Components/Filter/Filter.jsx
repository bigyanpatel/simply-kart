import React from "react";
import "./Filter.css";
import { FaStar } from "react-icons/fa";

export const Filter = () => {
  return (
    <>
      <div class="sidebar">
        <div class="filter-heading">
          <h3>Filters</h3>
          <small class="clear-link">Clear All</small>
        </div>
        <div class="book-category">
          <h4 class="cat-heading">Category</h4>
          <label class="label-style" for="fiction">
            <input type="checkbox" id="fiction" />
            Fiction
          </label>
          <label class="label-style" for="non-fiction">
            <input type="checkbox" id="non-fiction" />
            Non-fiction
          </label>
          <label class="label-style" for="philosophy">
            <input type="checkbox" id="philosophy" />
            Philosophy
          </label>
          <label class="label-style" for="family">
            <input type="checkbox" id="family" />
            Family & Relationships
          </label>
          <label class="label-style" for="self-help">
            <input type="checkbox" id="self-help" />
            Self-help
          </label>
        </div>
        <div class="rating-category">
          <h4 class="cat-heading">Customer Ratings</h4>
          <label class="label-style" for="four-star">
            <input type="checkbox" id="four-star" />4
            <FaStar /> & above
          </label>
          <label class="label-style" for="thre-star">
            <input type="checkbox" id="three-star" />3
            <FaStar /> & above
          </label>
          <label class="label-style" for="two-star">
            <input type="checkbox" id="two-star" />2
            <FaStar /> & above
          </label>
          <label class="label-style" for="one-star">
            <input type="checkbox" id="one-star" />1
            <FaStar /> & above
          </label>
        </div>
        <div class="price-category">
          <h4 class="cat-heading">Sort by pricing</h4>
          <label class="label-style" for="lth">
            <input id="lth" type="radio" name="price-sort" />
            Low To High
          </label>
          <label class="label-style" for="htl">
            <input id="htl" type="radio" name="price-sort" />
            High To Low
          </label>
        </div>
        <div class="price-range">
          <h4 class="cat-heading">Price</h4>
          <label class="label-style" for="priceInput">
            <input
              type="range"
              id="priceInput"
              min="1"
              max="1000"
              value="200"
              oninput="showPrice.value = priceInput.value"
            />
          </label>
          <p class="label-style">
            ₹1 - ₹
            <output class="show-price" id="showPrice">
              1000
            </output>
          </p>
        </div>
      </div>
    </>
  );
};