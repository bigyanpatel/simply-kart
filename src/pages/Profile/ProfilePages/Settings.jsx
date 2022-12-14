import React from "react";
import { useAuth } from "../../../contexts/contextExport";

export const Settings = () => {
  const { logoutHandler } = useAuth();

  return (
    <div className="pd-lg">
      <button onClick={logoutHandler} className="btn is-solid fs-btw-ml">
        Log Out
      </button>
    </div>
  );
};