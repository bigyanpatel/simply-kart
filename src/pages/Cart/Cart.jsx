import React, { useEffect } from "react";
import "./Cart.css";
import { CartCard } from "../../barrelexport/Componentutil";
import { useCart } from "../../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { billCalculate } from "../../helperFunctions/CartHelpers/billCalculate";
import { useAuth } from "../../contexts/AuthContext";

export const Cart = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const {
    cartState: { cartData },
  } = useCart();
  const result = billCalculate(cartData);
  const { currentPrice, discountPrice } = result;
  const finalPrice = currentPrice - discountPrice;

  useEffect(() => {
    !token && navigate("/login");
  }, []);

  return (
    <>
      <main className="main-container">
      {cartData.length !== 0 && (
          <p className="main-heading fs-lg mg-md">
            My cart has products ({cartData.length})
          </p>
        )}
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
                    <p className="col-20 clr-red">- {discountPrice}₹</p>
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
                  <p className="text-green">
                    Hurray!! You saved {discountPrice}₹ :)
                  </p>
                </div>
                <button className="btn is-solid">PLACE ORDER</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-center flex-dir-col">
            <p className="fs-lg mg-xlg">Empty Cart</p>
            <Link to="/products">
            <button className="btn is-solid fs-btw-ml">Let's Shopping</button>
            </Link>
          </div>
        )}
      </main>
    </>
  );
};