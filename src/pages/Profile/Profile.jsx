import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { setNavLink } from "../../helperFunctions/setNavLink";
import "./profile.css";

export const Profile = () => {
  const { token } = useAuth();
  const items = [
    { title: "Profile", link: "/profile/" },
    { title: "Orders", link: "./orders" },
    { title: "Addresses", link: "./addresses" },
    { title: "Settings", link: "./settings" },
  ];
  const navigate = useNavigate();

  useEffect(() => {
    !token && navigate("/login");
  }, []);
  const setProfileLink = (isActive) => {
    return {
      color: isActive ? "#0ea5e9" : "#000000",
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
                style={({ isActive }) => setProfileLink(isActive)}
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