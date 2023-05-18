import React from "react";
import "./css/DashboardNavbarMenuSection.css";
import { Link } from "react-router-dom";

import icons from "../../../../utils/icons";

const DashboardNavbarMenuSection = (props) => {
  return (
    <div className="dashboard-navbar-menu-section">
      <Link to="/">
        <img alt="Navbar logo" src={icons.others.navbarLogo} width={60} />
      </Link>
      {/* <Link
        to="/markets"
        style={{
          borderBottom:
            props.currentPage === "markets" ? "3px solid #F8C125" : null,
        }}
      >
        بازارها
      </Link> */}
      <Link
        to="/dashboard"
        style={{
          borderBottom:
            props.currentPage === "dashboard" ? "3px solid #F8C125" : null,
        }}
      >
        داشبورد
      </Link>
      <Link
        to="/exchange"
        style={{
          borderBottom:
            props.currentPage === "exchange" ? "3px solid #F8C125" : null,
        }}
      >
        معامله
      </Link>
      {/* <Link
        to="/convert"
        style={{
          borderBottom:
            props.currentPage === "convert" ? "3px solid #F8C125" : null,
        }}
      >
        تبدیل ارز
      </Link> */}
      <Link
        to="/history"
        style={{
          borderBottom:
            props.currentPage === "history" ? "3px solid #F8C125" : null,
        }}
      >
        تاریخچه
      </Link>
    </div>
  );
};

export default DashboardNavbarMenuSection;
