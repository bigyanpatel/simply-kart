import React from "react";
import "./Cart.css";
import { CartCard, Navbar } from "../../barrelexport/Componentutil";
import { useCart } from "../../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { billCalculate } from "../../helperFunctions/CartHelpers/billCalculate";
import { useAuth } from "../../contexts/AuthContext";

export const Cart = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { cartState } = useCart();
  const { cartData } = cartState;
  const result = billCalculate(cartData);
  const { currentPrice, discountPrice } = result;
  const finalPrice = currentPrice - discountPrice;

  !token && navigate("/login");

  return (
    <div>
      <Navbar />
      <h1 className="main-heading">My cart</h1>
      <main className="main-container">
        {cartData.length !== 0 ? (
          <div className="cart-container">
            <div className="card-item">
              {cartData.map((item, index) => (
                <CartCard cartItem={item} key={index} />
              ))}
            </div>
            <div className="bill-item">
              <div className="bill">
                <div className="bill-heading">
                  <h3>Price Details</h3>
                </div>
                <div className="bill-info">
                  <div className="row-detail">
                    <p className="col-80">Price ({cartData.length} items)</p>
                    <p className="col-20">{currentPrice}₹</p>
                  </div>
                  <div className="row-detail">
                    <p className="col-80">Discount</p>
                    <p className="col-20">-{discountPrice}₹</p>
                  </div>
                  <div className="row-detail">
                    <p className="col-80">Delivery</p>
                    <p className="col-20 text-green">free</p>
                  </div>
                  <div className="row-detail">
                    <p className="total-text ">Total Amount</p>
                    <p className="total-value ">{finalPrice}₹</p>
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