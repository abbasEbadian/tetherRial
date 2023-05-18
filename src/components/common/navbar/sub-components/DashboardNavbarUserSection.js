import React from "react";
import "./css/DashboardNavbarUserSection.css";
import icons from "../../../../utils/icons";
import { useSelector } from "react-redux";

const DashboardNavbarUserSection = (props) => {
  const user = useSelector(state=>state.session.user)
  return (
    <div className="dashboard-navbar-user-section">
      <img alt="Livechat icon" src={icons.others.support} />
      <img alt="Bell icon" src={icons.others.bell} onClick={props.openNotifs} />

      <button onClick={props.open}>
        <p>{user? user.user_name || user.user_phone_number || user.user_email: "کاربر"}</p>
        <img
          alt="Open dropdown menu icon"
          src={icons.others.openDropdownMenuwhite}
          
        />
      </button>
    </div>
  );
};

export default DashboardNavbarUserSection;
