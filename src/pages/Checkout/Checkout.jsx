import React from "react";
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

  return (
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
              <p className="fs-btw-ml pd-vrtl-sm align-center">Delivery at</p>
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
              <button className="btn is-solid w-100">PLACE ORDER</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex-center flex-dir-col">
          <p className="fs-lg mg-xlg">Empty checkout</p>
          <Link to="/products">
            <button className="btn is-solid fs-btw-ml">Let's Shopping</button>
          </Link>
        </div>
      )}
    </main>
  );
};