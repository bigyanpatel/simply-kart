import React from "react";
import { FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navigation">
      <span className="hamburger-icon">
        <i className="fas fa-bars"></i>
      </span>
      <div className="nav-left-section">
        <Link to="/">
          <p className="logo-text fs-xlg">BookHub</p>
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
        <ul className="secondary-list">
          <li className="favorites-list-item">
            <Link to="/wishlist">
              <span className="heart-icon fs-xlg">
                <FiHeart className="cursor" />
              </span>
            </Link>
            <span className="favourite-badge badge">4</span>
          </li>
          <li className="cart-list-item">
            <Link to="/cart">
              <span className="shop-icon fs-xlg">
                <FiShoppingCart className="cursor" />
              </span>
            </Link>
            <span className="cart-badge badge">6</span>
          </li>
        </ul>
        <Link to="/login">
          <button className="btn is-solid">Login</button>
        </Link>
      </div>
    </nav>
  );
};