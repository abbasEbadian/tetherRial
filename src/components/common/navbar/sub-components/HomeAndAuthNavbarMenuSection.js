import React from "react";
import "./css/HomeAndAuthNavbarMenuSection.css";
import { Link } from "react-router-dom";

import icons from "../../../../utils/icons";

const HomeAndAuthNavbarMenu = (props) => {
  return (
    <div
      className="home-and-auth-navbar-menu-section"
      style={{
        color: props.color,
      }}
    >
      <Link to="/">
        <img alt="Navbar logo" src={icons.others.navbarLogo} width={120}/>
      </Link>

      <Link
        to="/markets"
        style={{
          borderBottom:
            props.currentPage === "markets" ? "3px solid #F8C125" : null,
        }}
      >
         
      </Link>
      <Link
        to="/termsAndServices"
        style={{
          borderBottom:
            props.currentPage === "termsAndServices"
              ? "3px solid #F8C125"
              : null,
        }}
      >
        قوانین و مقررات
      </Link>
      <Link
        to="/aboutUs"
        style={{
          borderBottom:
            props.currentPage === "aboutUs" ? "3px solid #F8C125" : null,
        }}
      >
        درباره‌ما
      </Link>
      <Link
        to="/faq"
        style={{
          borderBottom:
            props.currentPage === "faq" ? "3px solid #F8C125" : null,
        }}
      >
        سوالات متداول
      </Link>
      <Link
        to="/fees"
        style={{
          borderBottom:
            props.currentPage === "fees" ? "3px solid #F8C125" : null,
        }}
      >
        کارمزدها
      </Link>
      <Link
        to="/blog"
        style={{
          borderBottom:
            props.currentPage === "blog" ? "3px solid #F8C125" : null,
        }}
      >
        بلاگ
      </Link>
    </div>
  );
};

export default HomeAndAuthNavbarMenu;
