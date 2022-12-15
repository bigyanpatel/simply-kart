import React, { useState } from "react";
import { useCart } from "../../../contexts/CartContext";
import { useClickOutside } from "../../../Hooks/useClickOutSide";
import "./coupon.css";

export const Coupon = ({ setShowCoupon, totalPrice }) => {
  const modalRef = useClickOutside(() => {
    setShowCoupon(false);
  });

  const { cartDispatch } = useCart();
  const [currentCoupon, setCurrentCoupon] = useState({});

  return (
    <div className="coupon-container flex-center">
      <div ref={modalRef} className="coupon pd-lg">
        <div
          className={`coupon-item pd-md mg-vrtl-sm ${
            totalPrice < 899 ? "disable-coupon" : ""
          }`}
        >
          <label
            htmlFor="festival-offer"
            className={totalPrice < 899 ? "disable-coupon" : ""}
          >
            <input
              disabled={totalPrice < 899 ? true : false}
              onClick={() =>
                setCurrentCoupon({
                  type: "FESTIVAL-OFFER",
                  amount: 200,
                })
              }
              type="radio"
              name="coupon"
              id="festival-offer"
            />
            Festival Offer
            <p className="mg-hztl-md">
              200 Rs.off for orders of Rs.899 or above.
            </p>
          </label>
        </div>
        <div
          className={`coupon-item pd-md mg-vrtl-sm ${
            totalPrice < 600 ? "disable-coupon" : ""
          }`}
        >
          <label
            className={totalPrice < 600 ? "disable-coupon" : ""}
            htmlFor="new-user-offer"
          >
            <input
              name="coupon"
              onClick={() =>
                setCurrentCoupon({ type: "NEW-USER", amount: 100 })
              }
              disabled={totalPrice < 600 ? true : false}
              type="radio"
              id="new-user-offer"
            />
            New User?
            <p className="mg-hztl-md">
              If you are new user you will save 100 for orders of Rs.600 pr
              above.
            </p>
          </label>
        </div>
        <button
          onClick={() => {
            setShowCoupon(false);
            cartDispatch({
              type: "APPLY_COUPON",
              payload: { coupon: currentCoupon },
            });
          }}
          className="btn is-solid w-100"
        >
          APPLY
        </button>
      </div>
    </div>
  );
};