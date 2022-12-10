import React from "react";
import "./Cart.css";
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi";
import { Navbar } from "../../components/Navbar/Navbar";

export const Cart = () => {
  return (
    <div>
      <Navbar />
      <main class="main-container">
        <h1 class="main-heading">My cart</h1>
        <div class="cart-container">
          <div class="card-item">
            <div class="card-hz">
              <div class="horizontal-image-container">
                <img
                  class="hr-image"
                  src="https://n1.sdlcdn.com/imgs/g/p/h/large/The-Secret-Law-of-Blessing-SDL722248518-1-1c081.png"
                  alt="No preview available"
                />
              </div>
              <div class="card-body-wrapper">
                <div class="card-body">
                  <h3 class="card-title">A Line in the river</h3>
                  <small class="not">By John Willy</small>
                  <p class="card-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Error, magnam?
                  </p>
                  <p class="card-sell-price">
                    <span>₹325</span>
                    <span class="card-cost-price">₹650</span>
                    <span class="card-discount">50%off</span>
                  </p>
                  <div class="quantity-count">
                    <button class="button-count-plus">
                      <span className="flex">
                        <FiPlus />
                      </span>
                    </button>
                    <p class="quantity-value">2</p>
                    <button class="button-count-minus">
                      <span className="flex">
                        <FiMinus />
                      </span>
                    </button>
                  </div>
                  <div class="card-button-container mt">
                    <span className="dismiss-icon fs-lg">
                      <FiTrash />
                    </span>
                    <button class="is-secondary pd-sm">
                      Move to favourites
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bill-item">
            <div class="bill">
              <div class="bill-heading">
                <h3>Price Details</h3>
              </div>
              <div class="bill-info">
                <div class="row-detail">
                  <p class="col-80">Price (2 items)</p>
                  <p class="col-20">3000₹</p>
                </div>
                <div class="row-detail">
                  <p class="col-80">Discount</p>
                  <p class="col-20">-1000₹</p>
                </div>
                <div class="row-detail">
                  <p class="col-80">Delivery</p>
                  <p class="col-20 text-green">free</p>
                </div>
                <div class="row-detail">
                  <p class="total-text ">Total Amount</p>
                  <p class="total-value ">2000₹</p>
                </div>
              </div>
              <div class="msg">
                <p class="text-green">Hurray!! You saved 1000₹ :)</p>
              </div>
              <button class="btn is-solid">Place Order</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};