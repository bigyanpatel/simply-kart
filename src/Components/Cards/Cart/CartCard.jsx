import React from "react";
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi";
import "./CartCard.css";

export const CartCard = () => {
  return (
    <div className="card-hz">
      <div className="horizontal-image-container">
        <img
          className="hr-image"
          src="https://n1.sdlcdn.com/imgs/g/p/h/large/The-Secret-Law-of-Blessing-SDL722248518-1-1c081.png"
          alt="No preview available"
        />
      </div>
      <div className="card-body-wrapper">
        <div className="card-body">
          <h3 className="card-title">A Line in the river</h3>
          <small className="not">By John Willy</small>
          <p className="card-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
            magnam?
          </p>
          <p className="card-sell-price">
            <span>₹325</span>
            <span className="card-cost-price">₹650</span>
            <span className="card-discount">50%off</span>
          </p>
          <div className="quantity-count">
            <button className="button-count-plus">
              <span classNameName="flex">
                <FiPlus />
              </span>
            </button>
            <p className="quantity-value">2</p>
            <button className="button-count-minus">
              <span classNameName="flex">
                <FiMinus />
              </span>
            </button>
          </div>
          <div className="card-button-container mt">
            <span classNameName="dismiss-icon fs-lg">
              <FiTrash />
            </span>
            <button className="is-secondary pd-sm">Move to favourites</button>
          </div>
        </div>
      </div>
    </div>
  );
};