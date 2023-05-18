import React from "react";
import "./css/HomeAndAuthNavbarAuthSection.css";
import { Link } from "react-router-dom";

const HomeAndAuthNavbarAuthSection = (props) => {
  return (
    <div className="home-and-auth-navbar-auth-section">
      <Link
        to="login"
        className="btn btn-primary-outline"
      >
        ورود
      </Link>

      <Link className="btn btn-primary-gradient" to="signup">ثبت نام</Link>
    </div>
  );
};

export default HomeAndAuthNavbarAuthSection;
