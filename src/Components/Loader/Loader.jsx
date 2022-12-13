import React from "react";
import { PongSpinner } from "react-spinners-kit";
import "./Loader.css";

export const Loader = () => {
  const loaderColor = "#1d4ed8";
  return (
    <div className="loader-container">
      <PongSpinner color={loaderColor} size={150} />
    </div>
  );
};