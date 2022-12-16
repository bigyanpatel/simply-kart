import React, { useState } from "react";
import {
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
import { NavDrawer } from "../NavDrawer/NavDrawer";
import { setProfileLink } from "../../helperFunctions/SetProfileNavlink";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token, currentUser } = useAuth();
  const {
    wishListState: { wishListData },
  } = useWishList();
  const {
    cartState: { cartData },
  } = useCart();
  const navigate = useNavigate();
  const { filterDispatch } = useFilter();
  const { setSearchText } = useDataStore();

  const searchHandler = (e) => {
    navigate("/products");
    filterDispatch({ type: "CLEAR_ALL", payload: initialState });
    setSearchText(e.target.value);
  };

  const debounce = (cb, delay) => {
    let timer;
    return (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = cb(e);
      }, delay);
    };
  };

  const searchProcess = debounce(searchHandler, 500);

  return (
    <nav className="navigation">
      {isOpen && <NavDrawer setIsOpen={setIsOpen} />}
      <div className="nav-left-section">
        <button onClick={() => setIsOpen(true)} className="bg-transparent">
          <span className="hamburger-icon">
            <FiMenu />
          </span>
        </button>
        <Link to="/">
          <p className="logo-text fs-xlg">SimplyKart</p>
        </Link>
        <div className="quick-link">
          <NavLink to="/" style={({ isActive }) => setProfileLink(isActive)}>
            <div className="nav-item mg-hztl-md">
              <ImHome3 />
              <small className="fs-md">Home</small>
            </div>
          </NavLink>
          <NavLink
            to="/products"
            style={({ isActive }) => setProfileLink(isActive)}
          >
            <div className="nav-item">
              <FaShoppingBag />
              <small className="fs-md">Shop Now</small>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="search-bar">
        <span className="searchbox-icon">
          <FiSearch />
        </span>
        <input
          className="search-input"
          type="text"
          placeholder="Search book..."
          onChange={searchProcess}
        />
      </div>
      <div className="nav-right-section">
        {!token ? (
          <Link to="/login">
            <div className="nav-item nav-login-item">
              <FiUser className="user-icon fs-lg" />
              <small className="fs-md">Login</small>
            </div>
          </Link>
        ) : (
          <Link to="/profile/">
            <div className="nav-item nav-login-item">
              <FiUser className="user-icon cursor fs-lg" />
              <small className="fs-md">Hi {currentUser.firstName}</small>
            </div>
          </Link>
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