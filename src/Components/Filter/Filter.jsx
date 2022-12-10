import React from "react";
import "./Filter.css";
import { FaStar } from "react-icons/fa";

export const Filter = () => {
  return (
    <>
      <div className="sidebar">
        <div className="filter-heading">
          <h3>Filters</h3>
          <small className="clear-link">Clear All</small>
        </div>
        <div className="book-category">
          <h4 className="cat-heading">Category</h4>
          <label className="label-style" htmlFor="fiction">
            <input type="checkbox" id="fiction" />
            Fiction
          </label>
          <label className="label-style" htmlFor="non-fiction">
            <input type="checkbox" id="non-fiction" />
            Non-fiction
          </label>
          <label className="label-style" htmlFor="philosophy">
            <input type="checkbox" id="philosophy" />
            Philosophy
          </label>
          <label className="label-style" htmlFor="family">
            <input type="checkbox" id="family" />
            Family & Relationships
          </label>
          <label className="label-style" htmlFor="self-help">
            <input type="checkbox" id="self-help" />
            Self-help
          </label>
        </div>
        <div className="rating-category">
          <h4 className="cat-heading">Customer Ratings</h4>
          <label className="label-style" htmlFor="four-star">
            <input type="checkbox" id="four-star" />4
            <FaStar className="rating-star" /> & above
          </label>
          <label className="label-style" htmlFor="thre-star">
            <input type="checkbox" id="three-star" />3
            <FaStar className="rating-star" /> & above
          </label>
          <label className="label-style" htmlFor="two-star">
            <input type="checkbox" id="two-star" />2
            <FaStar className="rating-star" /> & above
          </label>
          <label className="label-style" htmlFor="one-star">
            <input type="checkbox" id="one-star" />1
            <FaStar className="rating-star" /> & above
          </label>
        </div>
        <div className="price-category">
          <h4 className="cat-heading">Sort by pricing</h4>
          <label className="label-style" htmlFor="lth">
            <input id="lth" type="radio" name="price-sort" />
            Low To High
          </label>
          <label className="label-style" htmlFor="htl">
            <input id="htl" type="radio" name="price-sort" />
            High To Low
          </label>
        </div>
        <div className="price-range">
          <h4 className="cat-heading">Price</h4>
          <label className="label-style" htmlFor="priceInput">
            <input
              type="range"
              id="priceInput"
              min="1"
              max="1000"
              value="200"
              oninput="showPrice.value = priceInput.value"
            />
          </label>
          <p className="label-style">
            ₹1 - ₹
            <output className="show-price" id="showPrice">
              1000
            </output>
          </p>
        </div>
      </div>
    </>
  );
};