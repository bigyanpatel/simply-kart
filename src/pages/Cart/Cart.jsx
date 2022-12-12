import React from "react";
import "./Cart.css";
import { CartCard, Navbar } from "../../barrelexport/Componentutil";
import { checkLoginService } from "../../Services/AuthService";

export const Cart = () => {

  checkLoginService();
  return (
    <div>
      <Navbar />
      <main className="main-container">
        <h1 className="main-heading">My cart</h1>
        <div className="cart-container">
          <div className="card-item">
            <CartCard />
          </div>
          <div className="bill-item">
            <div className="bill">
              <div className="bill-heading">
                <h3>Price Details</h3>
              </div>
              <div className="bill-info">
                <div className="row-detail">
                  <p className="col-80">Price (2 items)</p>
                  <p className="col-20">3000₹</p>
                </div>
                <div className="row-detail">
                  <p className="col-80">Discount</p>
                  <p className="col-20">-1000₹</p>
                </div>
                <div className="row-detail">
                  <p className="col-80">Delivery</p>
                  <p className="col-20 text-green">free</p>
                </div>
                <div className="row-detail">
                  <p className="total-text ">Total Amount</p>
                  <p className="total-value ">2000₹</p>
                </div>
              </div>
              <div className="msg">
                <p className="text-green">Hurray!! You saved 1000₹ :)</p>
              </div>
              <button className="btn is-solid">Place Order</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};