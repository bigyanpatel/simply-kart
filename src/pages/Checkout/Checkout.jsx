import React, { useState } from "react";
import "./checkout.css";
import { RiCoupon3Fill } from "react-icons/ri";
import { useAddress, useCart } from "../../contexts/contextExport";
import { Link } from "react-router-dom";
import { billCalculate } from "../../helperFunctions/CartHelpers/billCalculate";
import { Address } from "./components/Address";

export const Checkout = () => {
  const {
    cartState: { cartData, coupon },
    cartDispatch,
  } = useCart();
  const result = billCalculate(cartData);
  const { currentPrice, discountPrice } = result;
  const finalPrice = currentPrice - discountPrice;
  const {
    addressState: { addresses, mobile },
  } = useAddress();
  const checkCoupon = Object.keys(coupon).length;
  const currentAddress = addresses?.find((item) => item.mobile === mobile);
  const [paymentId, setPaymentId] = useState({
    id: "",
    isPaymentSuccess: false,
  });

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const paymentDisplay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_w3LARPAir5woBM", // Enter the Key ID generated from the Dashboard
      amount: finalPrice * 100,
      name: "Book hub",
      description: "Thanks from shopping, have a good day!",
      handler: function (response) {
        setPaymentId({
          id: response.razorpay_payment_id,
          isPaymentSuccess: true,
        });
        cartDispatch({
          type: "CLEAR_CART",
          payload: { coupon: {}, cartData: [] },
        });
      },
      prefill: {
        name: "tom cruise",
        email: "tomcruise23@gmail.com",
        contact: "8392209184",
      },
      theme: {
        color: "#0ea5e9",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      {!paymentId.isPaymentSuccess ? (
        <main className="main-container">
          <p className="main-heading fs-lg mg-md">Checkout</p>
          {cartData.length !== 0 ? (
            <div className="cart-container">
              <div className="card-item">
                {addresses.map((item, index) => (
                  <Address key={index} address={item} />
                ))}
              </div>
              <div className="bill">
                <div className="bill-heading pd-vrtl-sm">
                  <p className="fs-btw-ml align-center">Order Details</p>
                </div>
                <div className="row-detail pd-vrtl-sm">
                  <p>Item</p>
                  <p>Quantity</p>
                </div>
                {cartData.map((item) => (
                  <div className="row-detail">
                    <p className="col-80">{item.title}</p>
                    <p className="col-20">{item.qty}</p>
                  </div>
                ))}
                <div className="bill-heading pd-vrtl-sm">
                  <p className="fs-btw-ml align-center">Price Details</p>
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
                      ></button>
                      {discountPrice}₹
                    </div>
                  )}
                  <div className="row-detail">
                    <p className="total-text ">Total Amount</p>
                    <p className="total-value">
                      {finalPrice - (checkCoupon ? coupon.amount : 0)}₹
                    </p>
                  </div>
                </div>
                <div className="address-detail">
                  <p className="fs-btw-ml pd-vrtl-sm align-center">
                    Delivery at
                  </p>
                  <p className="fs-btw-ml mg-top">{currentAddress.name}</p>
                  <p>
                    <small>{currentAddress.street}, </small>
                    <small>
                      {currentAddress.city}, {currentAddress.state},{" "}
                      {currentAddress.country}
                    </small>
                    <small>, {currentAddress.zipCode}</small>
                  </p>
                </div>
                <Link to="/checkout">
                  <button
                    onClick={paymentDisplay}
                    className="btn is-solid w-100"
                  >
                    PLACE ORDER
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex-center flex-dir-col">
              <p className="fs-lg mg-xlg">Empty checkout</p>
              <Link to="/products">
                <button className="btn is-solid fs-btw-ml">
                  Let's Shopping
                </button>
              </Link>
            </div>
          )}
        </main>
      ) : (
        <div className="order-msg flex-center">
          <p className="text-green fs-xlg">Order successfully placed!!!</p>
        </div>
      )}
    </>
  );
};