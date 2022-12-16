import React from "react";
import {
  useAuth,
  useAddress,
  useDataStore,
} from "../../../../contexts/contextExport";
import { deleteAddressHandler } from "../../../../handlers/addressHandlers";

export const AddressItem = ({ addressItem }) => {
  const { _id, name, street, city, state, country, zipCode, mobile } =
    addressItem;

  const { setShowForm, setAddress, addressDispatch } = useAddress();
  const { token } = useAuth();
  const { toastProps } = useDataStore();

  return (
    <div className="address-item">
      <p className="fs-lg">{name}</p>
      <p>
        <small>{street}</small>
      </p>
      <p>
        <small>{city}, </small>
        <small>{state}, </small>
        <small>{zipCode}</small>
      </p>
      <p>
        <small>{country}</small>
      </p>
      <small>{mobile}</small>
      <div className="button-container">
        <button
          onClick={() => {
            setAddress(addressItem);
            setShowForm(true);
          }}
          className="btn is-btn-secondary pd-sm"
        >
          Edit
        </button>
        <button
          onClick={() =>
            deleteAddressHandler(token, _id, addressDispatch, toastProps)
          }
          className="btn is-btn-danger mg-sm pd-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};