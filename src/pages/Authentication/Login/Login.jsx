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
      <div class="flex-center">
        <div class="login-card">
          <h1 class="text-login">Login</h1>
          <div class="input-icon-container input-primary">
            <AiOutlineMail className="input-icon" />
            <input type="email" class="input" placeholder="e.g abc@gmail.com" />
          </div>
          <div class="input-icon-container input-primary">
            <AiOutlineLock className="input-icon" />
            <input type="email" class="input" placeholder="e.g abc123" />
            <FaRegEyeSlash className="cursor" />
          </div>
          <div class="horizontal-div">
            <label className="cursor" for="remember-me">
              <input id="remember-me" type="checkbox" />
              Remember me
            </label>
            <a class="forgot-link cursor">Forgot Password?</a>
          </div>
          <button class="btn is-solid">Login</button>
          <span class="text-or">Or</span>
          <p class="align-center">
            New user?
            <Link to="/signup">
              <a class="auth-link cursor">Create an account</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};