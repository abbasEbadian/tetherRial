import React from "react";
import "./css/HomeAndAuthNavbarDropdownMenu.css";
import { Link } from "react-router-dom";

import icons from "../../../../utils/icons";

const HomeAndAuthNavbarDropdownMenu = (props) => {
  return (
    <div
      className="home-and-auth-navbar-dropdown-menu-container"
      style={{
        display: props.display,
        borderRadius: "12px"
      }}
    >
      <button onClick={props.handleClose}>
        <img alt="User icon" src={icons.others.user} />
      </button>

      <Link to="login">ورود</Link>

      <Link  to="signup">ثبت نام</Link>
    </div>
  );
};

export default HomeAndAuthNavbarDropdownMenu;
