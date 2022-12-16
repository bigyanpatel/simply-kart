import axios from "axios";

export const getAddressService = (token) => {
  return axios.get("/api/user/address", {
    headers: {
      authorization: token,
    },
  });
};

export const addAddressService = (token, address) => {
  return axios.post(
    "/api/user/address",
    {
      address,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const editAddressService = (token, _id, address) => {
  return axios.post(
    `/api/user/address/${_id}`,
    { address },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const deleteAddressService = (token, _id) => {
  return axios.delete(`/api/user/address/${_id}`, {
    headers: {
      authorization: token,
    },
  });
};