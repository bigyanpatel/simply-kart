import React from "react";
import "./navdrawer.css";
import { VscClose } from "react-icons/vsc";
import { FaShoppingBag } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { FiLogIn, FiUser } from "react-icons/fi";
import { useClickOutside } from "../../Hooks/useClickOutSide";
import { setNavLink } from "../../helperFunctions/setNavLink";

export const NavDrawer = ({ setIsOpen }) => {
  const modalRef = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <div ref={modalRef} className="nav-modal flex-dir-col ">
      <button className="close-btn bg-transparent">
        <VscClose onClick={() => setIsOpen(false)} className="fs-xlg" />
      </button>
      <div className="modal-item-container flex-center">
        <NavLink style={({ isActive }) => setNavLink(isActive)} to="/">
          <div className="nav-modal-item pointer">
            <ImHome3 className="fs-md" />
            <p className="fs-md">Home</p>
          </div>
        </NavLink>
        <NavLink style={({ isActive }) => setNavLink(isActive)} to="/products">
          <div className="nav-modal-item pointer">
            <FaShoppingBag className="fs-md" />
            <p className="fs-md">Shop Now</p>
          </div>
        </NavLink>
        <NavLink style={({ isActive }) => setNavLink(isActive)} to="/profile/">
          <div className="nav-modal-item pointer">
            <FiUser className="fs-md" />
            <p className="fs-md">Profile</p>
          </div>
        </NavLink>
        <NavLink style={({ isActive }) => setNavLink(isActive)} to="/login">
          <div className="nav-modal-item pointer">
            <FiLogIn className="fs-md" />
            <p className="fs-md">Login</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};