import React from "react";
import { useAuth } from "../../../../contexts/contextExport";
import "./ProfileCard.css";

export const ProfileCard = () => {
  const { currentUser } = useAuth();
  const { firstName, lastName, email } = currentUser;

  return (
    <div className="profile-detail pd-lg">
      <p className="fs-lg primary-clr">Profile details:</p>
      <div className="mg-vrtl-md">
        <p className="mg-vrtl-sm">
          <span>Username:</span>
          <span className="mg-l-16">{` ${firstName} ${lastName}`}</span>
        </p>
        <p className="mg-vrtl-sm">
          <span>Email:</span>
          <span className="mg-l-16">{email}</span>
        </p>
      </div>
    </div>
  );
};