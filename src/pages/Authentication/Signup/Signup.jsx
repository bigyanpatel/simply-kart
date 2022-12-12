import React from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navbar } from "../../../barrelexport/Componentutil";
import "./Signup.css";

export const Signup = () => {
  return (
    <>
      {/* || Navbar starts  */}
      <Navbar />
      {/* || Navbar ends */}
      <div className="flex-center">
        <div className="signup-card">
          <h1 className="text-signup">Signup</h1>
          <div className="name-section">
            <input
              id="first-name"
              className="input is-input-primary"
              type="text"
              placeholder="Firstname*"
            />
            <input
              id="last-name"
              className="input is-input-primary"
              type="text"
              placeholder="Lastname*"
            />
          </div>
          <div className="mg-top input-icon-container-su input-primary">
            <input
              id="email"
              className="input"
              type="email"
              placeholder="Email*"
            />
          </div>
          <div className="mg-top input-icon-container-su input-primary">
            <input
              type="password"
              className="input pd-sm"
              placeholder="Passowrd*"
            />
            <FaRegEyeSlash className="pd-hztl-sm fs-lg" />
          </div>
          <div className="mg-top input-icon-container-su input-primary">
            <input
              type="password"
              className="input pd-sm"
              placeholder="Confirm password*"
            />
            <FaRegEyeSlash className="pd-hztl-sm fs-lg" />
          </div>
          <buttton className="btn is-solid">Sign Up</buttton>
          <div className="align-center">
            Already have an account?
            <Link to="/login">
              <p className="auth-link">Login</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};