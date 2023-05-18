import React from "react";
import "./css/HomeAndAuthNavbarSlideMenu.css";
import { Link } from "react-router-dom";

import icons from "../../../../utils/icons";

import {GrClose} from 'react-icons/gr'
const HomeAndAuthNavbarSlideMenu = (props) => {
  return (
    <div
      className={"home-and-auth-navbar-slide-manu-container flex "+(props.display==="flex"? "open":"")}

    >
      <button onClick={props.handleClose}>
        <GrClose style={{color: "white"}}/>
      </button>

      <Link to="/">
        <img alt="Navbar logo" src={icons.others.navbarLogo} />
      </Link>

      {/* <Link to="/markets">بازارها</Link> */}
      <Link to="/termsAndServices">قوانین و مقررات</Link>
      <Link to="/aboutUs">درباره‌ما</Link>
      <Link to="/faq">سوالات متداول</Link>
      <Link to="/fees">کارمزدها</Link>
      <Link to="/blog">بلاگ</Link>
    </div>
  );
};

export default HomeAndAuthNavbarSlideMenu;
