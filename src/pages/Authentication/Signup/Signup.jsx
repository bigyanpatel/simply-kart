import React from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navbar } from "../../../components/Navbar/Navbar";
import "./signup.css";

export const Signup = () => {
  return (
    <>
      {/* || Navbar starts  */}
      <Navbar />
      {/* || Navbar ends */}
      <div class="flex-center">
        <div class="signup-card">
          <h1 class="text-signup">Signup</h1>
          <div class="name-section">
            <input
              id="first-name"
              class="input is-input-primary"
              type="text"
              placeholder="Firstname*"
            />
            <input
              id="last-name"
              class="input is-input-primary"
              type="text"
              placeholder="Lastname*"
            />
          </div>
          <div className="mg-top input-icon-container-su input-primary">
            <input id="email" class="input" type="email" placeholder="Email*" />
          </div>
          <div class="mg-top input-icon-container-su input-primary">
            <input
              type="password"
              class="input pd-sm"
              placeholder="Passowrd*"
            />
            <FaRegEyeSlash className="pd-hztl-sm fs-lg" />
          </div>
          <div class="mg-top input-icon-container-su input-primary">
            <input
              type="password"
              class="input pd-sm"
              placeholder="Confirm password*"
            />
            <FaRegEyeSlash className="pd-hztl-sm fs-lg" />
          </div>
          <buttton class="btn is-solid">Sign Up</buttton>
          <p class="align-center">
            Already have an account?
            <Link to="/login">
              <a class="auth-link">Login</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};