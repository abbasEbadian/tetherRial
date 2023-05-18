import React from "react";
import "./css/AuthWarning.css";

import icons from "../../utils/icons";

const AuthWarning = () => {
  return (
    <div className="modal-container auth-warning-container">
      <img src={icons.others.authWarning} />

      <p>برای دسترسی به امکانات سایت احراز هویت کنید</p>
    </div>
  );
};

export default AuthWarning;
