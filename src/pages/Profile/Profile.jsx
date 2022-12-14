import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Navbar } from "../../barrelexport/Componentutil";
import "./profile.css";

export const Profile = () => {
  const items = [
    { title: "Profile", link: "/profile/" },
    { title: "Orders", link: "./orders" },
    { title: "Addresses", link: "./addresses" },
    { title: "Settings", link: "./settings" },
  ];

  const setNavLink = (isActive) => {
    return {
      color: isActive ? "#0eafe9" : "",
    };
  };

  return (
    <div className="profile-container">
      <h2 className="align-center">User Profile</h2>
      <div className="profile-section">
        <div className="profile-sidebar pd-md">
          <ul className="sidebar-list">
            {items.map(({ title, link }) => (
              <NavLink
                key={title}
                style={({ isActive }) => setNavLink(isActive)}
                to={link}
              >
                <li className="sidebar-list-item pd-vrtl-sm mg-vrtl-sm">
                  {title}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="profile-info">
          <Outlet />
        </div>
      </div>
    </div>
  );
};