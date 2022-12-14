import axios from "axios";
import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navbar } from "../../../barrelexport/Componentutil";
import { useForm } from "../../../Hooks/useForm";
import { useTogglePassword } from "../../../Hooks/useTogglePassword";
import { useNavigate } from "react-router";
import "./signup.css";
import { useAuth } from "../../../contexts/AuthContext";

export const Signup = () => {
  const {
    passwordToggle,
    confirmPasswordToggle,
    togglePassword,
    toggleConfirmPassword,
  } = useTogglePassword();

  const { formData, errors, formHandler } = useForm();
  const { signupHandler } = useAuth();

  return (
    <div className="flex-center">
      <div className="signup-card">
        <h1 className="text-signup">Signup</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="name-section">
            <input
              onChange={formHandler}
              name="firstName"
              required
              id="first-name"
              className="input is-input-primary"
              type="text"
              placeholder="Firstname*"
            />
            <input
              onChange={formHandler}
              name="lastName"
              required
              id="last-name"
              className="input is-input-primary"
              type="text"
              placeholder="Lastname*"
            />
          </div>
          <div className="mg-top input-icon-container-su input-primary">
            <input
              onChange={formHandler}
              name="email"
              required
              id="email"
              className="input"
              type="email"
              placeholder="Email*"
            />
          </div>
          <div className="mg-top input-icon-container-su input-primary">
            <input
              onChange={formHandler}
              name="password"
              required
              type={passwordToggle.type}
              className="input pd-sm"
              placeholder="Passoword*"
            />
            {passwordToggle.isEyeIcon ? (
              <FaRegEye
                className="cursor pd-hztl-sm fs-lg"
                onClick={togglePassword}
              />
            ) : (
              <FaRegEyeSlash
                onClick={togglePassword}
                className="cursor pd-hztl-sm fs-lg"
              />
            )}
          </div>
          <div className="mg-top input-icon-container-su input-primary">
            <input
              onChange={formHandler}
              name="confirmPassword"
              required
              type={confirmPasswordToggle.type}
              className="input pd-sm"
              placeholder="Confirm password*"
            />
            {confirmPasswordToggle.isEyeIcon ? (
              <FaRegEye
                className="cursor pd-hztl-sm fs-lg"
                onClick={toggleConfirmPassword}
              />
            ) : (
              <FaRegEyeSlash
                className="cursor pd-hztl-sm fs-lg"
                onClick={toggleConfirmPassword}
              />
            )}
          </div>
          {errors.isMatch && <p className="error-msg">{errors.isMatch}</p>}
          <button
            onClick={() => signupHandler(formData)}
            disabled={
              Object.entries(errors).length === 0 &&
              Object.entries(formData).length === 5
                ? false
                : true
            }
            className="mg-top btn is-solid pd-sm wd-100"
          >
            Sign Up
          </button>
        </form>
        <p className="align-center">
          Already have an account?
          <Link to="/login">
            <a className="auth-link">Login</a>
          </Link>
        </p>
      </div>
    </div>
  );
};