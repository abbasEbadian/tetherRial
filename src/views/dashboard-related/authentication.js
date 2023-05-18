import React from "react";
import "./css/authentication.css";
import { Link } from "react-router-dom";

import Navbar from "../../components/common/navbar/Navbar";
import ShortFooter from "../../components/common/footer/ShortFooter";

import AuthenticationForm from "../../components/dashboard-related/AuthenticationForm";

const Authentication = () => {
  return (
    <div className="dashboard-view-container">
      <Navbar />

      <div className="authentication-container">
        <p className="home-title">احراز هویت</p>

        <AuthenticationForm source={"auth"}/>

        <div>
          <Link to="/dashboard">احراز هویت</Link>
          <button>رد کردن</button>
        </div>
      </div>

      <ShortFooter theme="dark" />
    </div>
  );
};

export default Authentication;
