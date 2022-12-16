import React from "react";
import { useOrder } from "../../../../contexts/OrderContext";
import "./Orders.css";

export const Orders = () => {
  const {
    orderState: { orders },
  } = useOrder();

  return (
    <>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className="pd-lg">
            <div className="order-info">
              <p className="primary-clr fs-btw-ml mg-vrtl-sm">
                Order Confirmed
              </p>
              <p>
                Payment Id:{" "}
                <span className="secondary-clr">{order.paymentId}</span>
              </p>
              <p>
                Bill paid:{" "}
                <span className="primary-clr">{order.totalAmount}₹</span>
              </p>
              <p className="mg-top">Order will deliver at:</p>
              <p className="secondary-clr">
                {order.address?.street}, {order.address?.zipCode},
                {order.address?.city} {order.address?.state}{" "}
                {order.address?.country}
              </p>
            </div>
            <div className="products-container">
              {order.orderData.map((item, index) => (
                <div key={index} className="product-card mg-vrtl-sm">
                  <img
                    className="product-img"
                    src={item.imgSrc}
                    alt="The dhoni touch"
                  />
                  <div className="product-data">
                    <p className="fs-btw-ml primary-clr">{item.title}</p>
                    <p className="mg-vrtl-sm">Quantity:{item.qty}</p>
                    <p>Price:{item.sellPrice}₹</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="fs-lg align-center mg-vrtl-sm">No orders</p>
      )}
    </>
  );
};