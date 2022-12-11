import React from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navbar } from "../../../barrelexport/Componentutil";
import "./Login.css";

export const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex-center">
        <div className="login-card">
          <h1 className="text-login">Login</h1>
          <div className="input-icon-container input-primary">
            <AiOutlineMail className="input-icon" />
            <input
              type="email"
              className="input"
              placeholder="e.g abc@gmail.com"
            />
          </div>
          <div className="input-icon-container input-primary">
            <AiOutlineLock className="input-icon" />
            <input type="email" className="input" placeholder="e.g abc123" />
            <FaRegEyeSlash className="cursor" />
          </div>
          <div className="horizontal-div">
            <label className="cursor" htmlFor="remember-me">
              <input id="remember-me" type="checkbox" />
              Remember me
            </label>
            <a className="htmlForgot-link cursor">htmlForgot Password?</a>
          </div>
          <button className="btn is-solid">Login</button>
          <span className="text-or">Or</span>
          <p className="align-center">
            New user?
            <Link to="/signup">
              <a className="auth-link cursor">Create an account</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};