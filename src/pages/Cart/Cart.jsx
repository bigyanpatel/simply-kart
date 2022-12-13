import React from "react";
import "./Cart.css";
import { CartCard, Navbar } from "../../barrelexport/Componentutil";
import { CartService } from "../../Services/CartService";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cartState } = useCart();
  const { cartItems, bill, discount, cartArray } = cartState;

  CartService();
  return (
    <div>
      <Navbar />
      <h1 className="main-heading">My cart</h1>
      <main className="main-container">
        {cartItems.length !== 0 ? (
          <div className="cart-container">
            <div className="card-item">
              {cartItems.map((item, index) => (
                <CartCard key={index} cartItem={item} />
              ))}
            </div>
            <div className="bill-item">
              <div className="bill">
                <div className="bill-heading">
                  <h3>Price Details</h3>
                </div>
                <div className="bill-info">
                  <div className="row-detail">
                    <p className="col-80">Price ({cartItems.length} items)</p>
                    <p className="col-20">{bill}₹</p>
                  </div>
                  <div className="row-detail">
                    <p className="col-80">Discount</p>
                    <p className="col-20">-{discount}₹</p>
                  </div>
                  <div className="row-detail">
                    <p className="col-80">Delivery</p>
                    <p className="col-20 text-green">free</p>
                  </div>
                  <div className="row-detail">
                    <p className="total-text ">Total Amount</p>
                    <p className="total-value ">
                      {bill !== 0 && bill - discount}₹
                    </p>
                  </div>
                </div>
                <div className="msg">
                  <p className="text-green">Hurray!! You saved 1000₹ :)</p>
                </div>
                <button className="btn is-solid">Place Order</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-center flex-dir-col">
            <h1>Empty Cart</h1>
            <Link to="/products">
              <button className="btn is-solid fs-lg">Let's shopping</button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};