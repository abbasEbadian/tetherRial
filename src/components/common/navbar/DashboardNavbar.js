// Nees to support only dark mode
import React, { useState } from "react";
import "./css/DashboardNavbar.css";
import { Link } from "react-router-dom";

import DashboardNavbarMenuSection from "./sub-components/DashboardNavbarMenuSection";
import DashboardNavbarSlideMenuSection from "./sub-components/DashboardNavbarSlideMenuSection";
import DashboardNavbarUserSection from "./sub-components/DashboardNavbarUserSection";
import DashboardNavbarDropdownMenuSection from "./sub-components/DashboardNavbarDropwonMenuSection";
import {FaRegUserCircle} from 'react-icons/fa'

import icons from "../../../utils/icons";
import {FiMenu} from 'react-icons/fi'
const DashboardNavbar = (props) => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showUserDropMenu, setShowUserDropMenu] = useState(false);
  const [showNotifMenu, setShowNotifMenu] = useState(false);
  
  React.useEffect(() => {
      document.addEventListener('click', function (e) {
        if(document.querySelector(".dashboard-navbar-slide-menu-section") && !document.querySelector(".dashboard-navbar-slide-menu-section").contains(e.target)){
          setShowNavMenu(false)
        }
        if(e.target.className&&typeof e.target.className === "string"&& e.target.className.indexOf("menu-opener") >-1)
            setShowNavMenu(true)
      });
  }, [])
  return (
    <div className="dashboard-navbar-container">
      <DashboardNavbarMenuSection currentPage={props.currentPage} />

     

      <button onClick={() => setShowNavMenu(!showNavMenu)} className="menu-opener">
        <FiMenu style={{"pointerEvents": "none"}}/>
      </button>

      <DashboardNavbarSlideMenuSection
        display={showNavMenu}
        handleClose={() => setShowNavMenu(!showNavMenu)}
      />

      <DashboardNavbarUserSection
        open={() => setShowUserDropMenu(!showUserDropMenu)}
        openNotifs={() => setShowNotifMenu(!showNotifMenu)}
      />

      <div
        className="user-drop-menu"
        style={{ display: showUserDropMenu ? "block" : "none" }}
      >
        <Link to="userAccount">
          <img alt="Icon" src={icons.others.user} />
          <p>حساب کاربری</p>
        </Link>
        <Link to="setting">
          <img alt="Icon" src={icons.others.settings} />
          <p>تنظیمات</p>
        </Link>
        <Link to="inviteFriends">
          <img alt="Icon" src={icons.others.inviteFriends} />
          <p>دعوت از دوستان</p>
        </Link>
        <Link to="/signout">
          <img alt="Icon" src={icons.others.logout} />
          <p>خروج</p>
        </Link>
      </div>

      <div
        className="dropdown-notifications"
        style={{ display: showNotifMenu === true ? "block" : "none" }}
      >
        <p>احراز هویت با موفقیت انجام شد.</p>
        <p>احراز هویت با موفقیت انجام شد.</p>
        <p>احراز هویت با موفقیت انجام شد.</p>
        <p>احراز هویت با موفقیت انجام شد.</p>
        <Link to="notifications">مشاهده همه</Link>
      </div>

      {/* <button onClick={() => setShowUserMenu(!showUserMenu)}>
        <FaRegUserCircle className="text-white"/>
      </button> */}

      {/* <DashboardNavbarDropdownMenuSection
        display={showUserMenu === true ? "flex" : "none"}
        handleClose={() => {
          setShowUserMenu(!showUserMenu);
        }}
        open={() => setShowUserDropMenu(!showUserDropMenu)}
        openNotifs={() => setShowNotifMenu(!showNotifMenu)}
      /> */}
    </div>
  );
};

export default DashboardNavbar;
