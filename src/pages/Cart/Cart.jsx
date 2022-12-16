import React, { useEffect, useState } from "react";
import "./Cart.css";
import { RiCoupon3Fill } from "react-icons/ri";
import { CartCard } from "../../barrelexport/Componentutil";
import { useCart } from "../../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { billCalculate } from "../../helperFunctions/CartHelpers/billCalculate";
import { useAuth } from "../../contexts/AuthContext";
import { Coupon } from "./Components/Coupon";
import { FiTrash2 } from "react-icons/fi";

export const Cart = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const {
    cartState: { cartData, coupon },
    cartDispatch,
  } = useCart();
  const result = billCalculate(cartData);
  const { currentPrice, discountPrice } = result;
  const finalPrice = currentPrice - discountPrice;

  const [showCoupon, setShowCoupon] = useState(false);
  const checkCoupon = Object.keys(coupon).length;

  useEffect(() => {
    !token && navigate("/login");
  }, []);

  return (
    <>
      <main className="main-container">
        {showCoupon && (
          <Coupon setShowCoupon={setShowCoupon} totalPrice={finalPrice} />
        )}
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
            <div className="bill">
              <div className="coupon-area flex-center pd-sm pointer">
                <button
                  onClick={() => setShowCoupon(true)}
                  className="flex-center bg-transparent"
                >
                  <RiCoupon3Fill className="pd-hztl-sm fs-btw-ml" />
                  APPLY COUPON
                </button>
              </div>
              <div className="bill-heading">
                <p className="fs-lg">Price Details</p>
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
                {checkCoupon !== 0 && (
                  <div className="row-detail">
                    <p className="flex-center text-green">
                      <RiCoupon3Fill className="fs-btw-ml" />
                      <p className="pd-hztl-sm">{coupon.type}</p>
                    </p>
                    <button
                      onClick={() =>
                        cartDispatch({
                          type: "APPLY_COUPON",
                          payload: { coupon: {} },
                        })
                      }
                      className="bg-transparent fs-btw-ml clr-red"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                )}
                <div className="row-detail">
                  <p className="total-text ">Total Amount</p>
                  <p className="total-value">
                    {finalPrice - (checkCoupon ? coupon.amount : 0)}₹
                  </p>
                </div>
              </div>
              <div className="msgRiCoupon3Fill">
                <p className="text-green pd-sm">
                  Hurray!! You saved{" "}
                  {discountPrice + (checkCoupon ? coupon.amount : 0)}₹ :)
                </p>
              </div>
              <button className="btn is-solid w-100">PLACE ORDER</button>
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