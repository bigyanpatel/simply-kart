import axios from "axios";
import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../../barrelexport/Componentutil";
import { useAuth } from "../../../contexts/AuthContext";
import { useTogglePassword } from "../../../Hooks/useTogglePassword";
import "./Login.css";

export const Login = () => {
  const { passwordToggle, togglePassword } = useTogglePassword();
  const { loginHandler, signinData } = useAuth();
  const { email, password } = signinData;

  return (
    <>
      <Navbar />
      <div className="flex-center">
        <div className="login-card">
          <h1 className="text-login">Login</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-icon-container input-primary">
              <AiOutlineMail className="fs-lg" />
              <input
                value={email}
                required
                name="email"
                type="email"
                className="input"
                placeholder="e.g abc@gmail.com"
              />
            </div>
            <div className="input-icon-container input-primary">
              <AiOutlineLock className="fs-lg" />
              <input
                value={password}
                required
                name="password"
                type={passwordToggle.type}
                className="input"
                placeholder="e.g abc123"
              />
              {passwordToggle.isEyeIcon ? (
                <FaRegEye className="cursor fs-lg" onClick={togglePassword} />
              ) : (
                <FaRegEyeSlash
                  className="cursor fs-lg"
                  onClick={togglePassword}
                />
              )}
            </div>
            <div className="horizontal-div">
              <label className="cursor" htmlFor="remember-me">
                <input id="remember-me" type="checkbox" />
                Remember me
              </label>
              <a className="forgot-link cursor">Forgot Password?</a>
            </div>
            <div className="btn-area">
              <button onClick={loginHandler} className="btn is-secondary">
                Login With Test Credentials.
              </button>
              <button onClick={loginHandler} className="btn is-solid">
                Login
              </button>
            </div>
          </form>
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