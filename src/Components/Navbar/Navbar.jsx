import React from "react";
import {
  FiHeart,
  FiLogIn,
  FiLogOut,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useWishList } from "../../contexts/WishListContext";
import { ImHome3 } from "react-icons/im";
import { FaShoppingBag } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  const { token, logoutHandler } = useAuth();
  const { userWishList } = useWishList();
  const { cartState } = useCart();
  const { cartStatus } = cartState;

  return (
    <nav className="navigation">
      <span className="hamburger-icon">
        <i className="fas fa-bars"></i>
      </span>
      <div className="nav-left-section">
        <Link to="/">
          <p className="logo-text fs-xlg">SimplyKart</p>
        </Link>
        <div className="quick-link">
          <Link to="/">
            <div className="nav-item mg-hztl-md">
              <ImHome3 />
              <small className="fs-md">Home</small>
            </div>
          </Link>
          <Link to="/products">
            <div className="nav-item">
              <FaShoppingBag />
              <small className="fs-md">Shop Now</small>
            </div>
          </Link>
        </div>
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
            <div className="nav-item">
              <FiLogIn className="user-icon fs-lg" />
              <small className="fs-md">Login</small>
            </div>
          </Link>
        ) : (
          <div className="nav-item">
            <FiLogOut
              onClick={logoutHandler}
              className="user-icon cursor fs-lg"
            />
            <small className="fs-md">Logout</small>
          </div>
        )}
        <ul className="secondary-list">
          <li className="favorites-list-item">
            <Link to={token ? "/wishlist" : "/login"}>
              <div className="nav-item">
                <span className="heart-icon fs-lg flex-center">
                  <FiHeart className="cursor" />
                </span>
                <small className="fs-md">Wishlist</small>
              </div>
            </Link>
            {userWishList.length !== 0 && (
              <span className="favourite-badge badge">
                {userWishList.length}
              </span>
            )}
          </li>
          <li className="cart-list-item">
            <Link to={token ? "/cart" : "/login"}>
              <div className="nav-item">
                <span className="shop-icon fs-lg flex-center">
                  <FiShoppingCart className="cursor" />
                </span>
                <small className="fs-md">Cart</small>
              </div>
            </Link>
            {cartStatus !== 0 && (
              <span className="cart-badge badge">{cartState.cartStatus}</span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};