import React, { useState } from "react";
import { omit } from "lodash";
import {
  useAuth,
  useAddress,
  useDataStore,
} from "../../../contexts/contextExport";
import {
  addAddressHandler,
  editAddressHandler,
} from "../../../handlers/addressHandlers";
import { AddressList } from "./components/AddressList";

export const Addresses = () => {
  const [errors, setErrors] = useState({});

  const {
    address,
    setAddress,
    showForm,
    setShowForm,
    dummyAddress,
    defaultAddress,
    addressState: { addresses },
    addressDispatch,
  } = useAddress();
  const { token } = useAuth();
  const { toastProps } = useDataStore();

  const isNewAddress = addresses.find((item) => item._id === address._id);

  const submitHandler = () => {
    if (isNewAddress) {
      editAddressHandler(
        token,
        address,
        addressDispatch,
        setShowForm,
        setAddress,
        defaultAddress,
        toastProps
      );
    } else {
      addAddressHandler(
        token,
        address,
        addressDispatch,
        setShowForm,
        setAddress,
        defaultAddress,
        toastProps
      );
    }
  };

  const formHandler = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
    switch (e.target.name) {
      case "mobile":
        if (e.target.value.length !== 10) {
          setErrors({
            ...errors,
            mobile: "Enter 10 digit mobile number",
          });
        } else {
          const newObj = omit(errors, "mobile");
          setErrors(newObj);
        }
        break;
      case "zipCode": {
        if (e.target.value.length !== 6) {
          setErrors({
            ...errors,
            zipCode: "Invalid pincode",
          });
        } else {
          const newObj = omit(errors, "zipCode");
          setErrors(newObj);
        }
      }
    }
  };

  return (
    <div className="address-container pd-lg">
      <AddressList />
      {showForm ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
          }}
          className="address-form"
        >
          <input
            onChange={formHandler}
            value={address.name}
            name="name"
            className="input is-input-primary"
            type="text"
            placeholder="Name"
            required
          />
          <input
            onChange={formHandler}
            value={address.street}
            type="text"
            className="input is-input-primary mg-top"
            name="street"
            placeholder="Street"
            required
          />
          <input
            onChange={formHandler}
            value={address.city}
            type="text"
            className="input is-input-primary mg-top"
            name="city"
            placeholder="City"
            required
          />
          <input
            onChange={formHandler}
            value={address.state}
            type="text"
            className="input is-input-primary mg-top"
            name="state"
            placeholder="State"
            required
          />
          <input
            onChange={formHandler}
            value={address.country}
            type="text"
            className="input is-input-primary mg-top"
            name="country"
            setShowForm
            placeholder="Country"
            required
          />
          <input
            onChange={formHandler}
            value={address.zipCode}
            type="number"
            className="input is-input-primary mg-top"
            name="zipCode"
            placeholder="6-digit zipcode"
            maxLength="6"
            required
          />
          {errors.zipCode && <p style={{ color: "red" }}>{errors.zipCode}</p>}
          <input
            onChange={formHandler}
            value={address.mobile}
            maxLength="10"
            name="mobile"
            className="input is-input-primary mg-top"
            type="number"
            placeholder="10-digit phone number"
            required
          />
          {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
          <div className="button-container">
            <button
              type="submit"
              disabled={Object.keys(errors).length === 0 ? false : true}
              className="btn is-solid"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setAddress(defaultAddress);
              }}
              className="btn is-outline mg-sm"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => setAddress(dummyAddress)}
              className="btn is-btn-secondary mg-sm"
            >
              Fill dummy data
            </button>
          </div>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)} className="btn is-solid">
          + Add Address
        </button>
      )}
    </div>
  );
};

{
  /* <div className="select-container">
          <label>
            <select className="input is-input-primary" name="city" required>
              <option value="">--Select City--</option>
              <option value="surat">Surat</option>
              <option value="mumbai">Mumbai</option>
              <option value="chennai">Chennai</option>
              <option value="bengluru">Bengluru</option>
            </select>
          </label>
          <label>
            <select className="input is-input-primary" name="country" required>
              <option value="">--Select City--</option>
              <option value="india">India</option>
              <option value="america">America</option>
              <option value="spain">Spain</option>
              <option value="england">England</option>
            </select>
          </label>
        </div> */
}