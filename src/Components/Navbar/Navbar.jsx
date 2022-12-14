import React from "react";
import {
  FiHeart,
  FiLogIn,
  FiLogOut,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import {
  useAuth,
  useCart,
  useWishList,
  useFilter,
  useDataStore,
} from "../../contexts/contextExport";
import { ImHome3 } from "react-icons/im";
import { FaShoppingBag } from "react-icons/fa";
import "./Navbar.css";
import { initialState } from "../../barrelexport/Filterutil";

export const Navbar = () => {
  const { token, logoutHandler } = useAuth();
  const {
    wishListState: { wishListData },
  } = useWishList();
  const {
    cartState: { cartData },
  } = useCart();
  const navigate = useNavigate();
  const { filterDispatch } = useFilter();
  const { setSearchText } = useDataStore();

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
          onChange={(e) => {
            navigate("/products");
            filterDispatch({ type: "CLEAR_ALL", payload: initialState });
            setSearchText(e.target.value);
          }}
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
            {wishListData.length !== 0 && (
              <span className="favourite-badge badge">
                {wishListData.length}
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
            {cartData.length !== 0 && (
              <span className="cart-badge badge">{cartData.length}</span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};