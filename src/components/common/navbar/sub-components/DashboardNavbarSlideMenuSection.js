import React from "react";
import "./css/DashboardNavbarSlideMenuSection.css";
import { Link } from "react-router-dom";

import icons from "../../../../utils/icons";
import {GrClose} from 'react-icons/gr'
const DashboardNavbarSlideMenuSection = (props) => {
  return (
    <div
      className={"dashboard-navbar-slide-menu-section" + (props.display?" open":"")}
    >
      <button onClick={props.handleClose}>
        <GrClose style={{color: "white"}}/>
      </button>

      <Link to="/">
        <img alt="Navbar logo" src={icons.others.navbarLogo} />
      </Link>

      {/* <Link to="/markets">بازارها</Link> */}
      <Link to="/dashboard">داشبورد</Link>
      <Link to="/exchange">معامله</Link>
      {/* <Link to="/convert">تبدیل ارز</Link> */}
      <Link to="/history">تاریخچه</Link>
    </div>
  );
};

export default DashboardNavbarSlideMenuSection;
