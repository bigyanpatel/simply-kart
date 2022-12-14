import React from "react";
import { Link } from "react-router-dom";

export const Orders = () => {
  return (
    <div className="pd-lg">
      <p className="fs-lg clr-red">No orders yet.</p>
      <Link to="/products">
        <button className="btn is-solid fs-btw-ml">Let's shopping</button>
      </Link>
    </div>
  );
};