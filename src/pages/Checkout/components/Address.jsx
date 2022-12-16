import React from "react";
import { useAddress } from "../../../contexts/AddressContext";
import "./address.css";

export const Address = ({ address }) => {
  const { addressDispatch } = useAddress();

  return (
    <label className="address-label pd-md">
      <input
        name="address"
        defaultChecked={address.city === "London" ? true : false}
        value={address.mobile}
        type="radio"
        onChange={(e) =>
          addressDispatch({
            type: "CURRENT_ADDRESS",
            payload: { mobile: Number(e.target.value) },
          })
        }
        className="mg-sm"
      />
      <div className="address-item">
        <p className="fs-lg">{address.name}</p>
        <p>
          <small>{address.street}</small>
        </p>
        <p>
          <small>{address.city}, </small>
          <small>{address.state}, </small>
          <small>{address.zipCode}</small>
        </p>
        <p>
          <small>{address.country}</small>
        </p>
        <small>{address.mobile}</small>
      </div>
    </label>
  );
};