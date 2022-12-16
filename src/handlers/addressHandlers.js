import { toast } from "react-toastify";
import {
  addAddressService,
  deleteAddressService,
  editAddressService,
  getAddressService,
} from "../Services/AddressService";

export const getAddressHandler = async (token, addressDispatch) => {
  try {
    const res = await getAddressService(token);
    if (res.status === 200) {
      addressDispatch({
        type: "ADDRESS_OPERATIONS",
        payload: { addresses: res.data.address },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addAddressHandler = async (
  token,
  address,
  addressDispatch,
  setShowForm,
  setAddress,
  defaultAddress,
  toastProps
) => {
  try {
    const res = await addAddressService(token, address);
    if (res.status === 201) {
      addressDispatch({
        type: "ADDRESS_OPERATIONS",
        payload: { addresses: res.data.address },
      });
    }
    setAddress(defaultAddress);
    setShowForm(false);
    toast.success("Address saved successfully", toastProps);
  } catch (error) {
    console.log(error);
  }
};

export const editAddressHandler = async (
  token,
  address,
  addressDispatch,
  setShowForm,
  setAddress,
  defaultAddress,
  toastProps
) => {
  try {
    const res = await editAddressService(token, address._id, address);
    if (res.status === 200) {
      addressDispatch({
        type: "ADDRESS_OPERATIONS",
        payload: { addresses: res.data.address },
      });
    }
    setAddress(defaultAddress);
    setShowForm(false);
    toast.success("Address updated successfully", toastProps);
  } catch (error) {
    console.log(error);
  }
};

export const deleteAddressHandler = async (
  token,
  _id,
  addressDispatch,
  toastProps
) => {
  try {
    const res = await deleteAddressService(token, _id);
    if (res.status === 200) {
      addressDispatch({
        type: "ADDRESS_OPERATIONS",
        payload: { addresses: res.data.address },
      });
    }
    toast.success("Address deleted successfully", toastProps);
  } catch (error) {
    console.log(error);
  }
};