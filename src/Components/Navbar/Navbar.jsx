import React from "react";
import {
  FiHeart,
  FiLogIn,
  FiLogOut,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Navbar.css";

export const Navbar = () => {
  const { token, logoutHandler } = useAuth();

  return (
    <nav className="navigation">
      <span className="hamburger-icon">
        <i className="fas fa-bars"></i>
      </span>
      <div className="nav-left-section">
        <Link to="/">
          <p className="logo-text fs-xlg">SimplyKart</p>
        </Link>
      </div>
      <div className="search-icon">
        <span className="searchbox-icon">
          <FiSearch />
        </span>
      </div>
      <div className="search-bar">
        <span className="searchbox-icon">
          <FiSearch />
        </span>
        <input
          className="search-input"
          type="text"
          placeholder="Search book..."
        />
      </div>
      <div className="nav-right-section">
        {!token ? (
          <Link to="/login">
            <FiLogIn className="user-icon fs-xlg" />
          </Link>
        ) : (
          <FiLogOut
            onClick={logoutHandler}
            className="user-icon cursor fs-xlg"
          />
        )}
        <ul className="secondary-list">
          <li className="favorites-list-item">
            <Link to={token ? "/wishlist" : "/login"}>
              <span className="heart-icon fs-xlg flex-center">
                <FiHeart className="cursor" />
              </span>
            </Link>
            <span className="favourite-badge badge">4</span>
          </li>
          <li className="cart-list-item">
            <Link to={token ? "/cart" : "/login"}>
              <span className="shop-icon fs-xlg flex-center">
                <FiShoppingCart className="cursor" />
              </span>
            </Link>
            <span className="cart-badge badge">6</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};