import React from "react";
import "./pagenotfound.css";
import Pagenotfound from "../../assets/Pagenotfound.svg";
import { Navbar } from "../../barrelexport/Componentutil";
import { useNavigate } from "react-router";

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
       <p className="fs-btw-ml mg-sm clr-red">Requested page not found</p>
      <img className="page-image" src={Pagenotfound} alt="Page not found" />
      <button onClick={() => navigate("/")} className="btn is-solid fs-btw-ml">
        Go to Home
      </button>
    </div>
  );
};