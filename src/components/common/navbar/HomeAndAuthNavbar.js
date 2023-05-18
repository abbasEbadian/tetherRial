import React, { useState } from "react";
import "./css/HomeAndAuthNavbar.css";

import HomeAndAuthNavbarMenuSection from "./sub-components/HomeAndAuthNavbarMenuSection";
import HomeAndAuthNavbarSlideMenu from "./sub-components/HomeAndAuthNavbarSlideMenu";
import HomeAndAuthNavbarAuthSection from "./sub-components/HomeAndAuthNavbarAuthSection";
import HomeAndAuthNavbarDropdownMenu from "./sub-components/HomeAndAuthNavbarDropdownMenu";
import {FiMenu} from 'react-icons/fi'
import {FaRegUserCircle} from 'react-icons/fa'

import icons from "../../../utils/icons";

const HomeAndAuthNavbar = (props) => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
 
  React.useEffect(() => {
      document.addEventListener('click', function (e) {
        if( document.querySelector(".home-and-auth-navbar-slide-manu-container") && !document.querySelector(".home-and-auth-navbar-slide-manu-container").contains(e.target)){
          setShowNavMenu(false)
        }
        if(e.target.className&&typeof e.target.className === "string"&& e.target.className.indexOf("menu-opener") >-1)
            setShowNavMenu(true)
      });
  }, [])
  return (
    <div
      className="home-and-auth-navbar-container"
      style={{
       
        backdropFilter: props.theme === "dark" ? "blur(16px)" : "none",
      }}
    >
      <HomeAndAuthNavbarMenuSection
        currentPage={props.currentPage}
        color={props.theme === "dark" ? "#FFFBF5" : "#1D1D1D"}
      />

      <button onClick={() => setShowNavMenu(!showNavMenu)} className="menu-opener">
        <FiMenu style={{"pointerEvents" :"none"}}/>
      </button>

      <HomeAndAuthNavbarSlideMenu
        theme={props.theme}
        display={showNavMenu === true ? "flex" : "none"}
        handleClose={() => setShowNavMenu(!showNavMenu)}
      />

      <HomeAndAuthNavbarAuthSection theme={props.theme} />

      {/* <button onClick={() => setShowUserMenu(!showUserMenu)}>
        <FaRegUserCircle className="text-white"/>
      </button> */}

      <HomeAndAuthNavbarDropdownMenu
        theme={props.theme}
        display={showUserMenu === true ? "flex" : "none"}
        handleClose={() => setShowUserMenu(!showUserMenu)}
      />
    </div>
  );
};

export default HomeAndAuthNavbar;
