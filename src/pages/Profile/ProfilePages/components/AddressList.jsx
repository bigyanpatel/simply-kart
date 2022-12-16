import React from "react";
import { useAddress } from "../../../../contexts/AddressContext";
import { AddressItem } from "./AddressItem";

export const AddressList = () => {
  const {
    addressState: { addresses },
  } = useAddress();
  return (
    <div>
      <ul>
        {addresses.map((item, index) => (
          <AddressItem key={index} addressItem={item} />
        ))}
      </ul>
    </div>
  );
};