import React from "react";
import "./css/DashboardNavbarDropdownMenuSection.css";

import icons from "../../../../utils/icons";
        import {MdOutlineClose} from 'react-icons/md'

const DashboardNavbarDropdownMenuSection = (props) => {
  return (
    <div
      className="dashboard-navbar-dropdown-menu-section"
      style={{ display: props.display }}
    >
      <button className="close-button" onClick={props.handleClose}>
      <MdOutlineClose />
      </button>
      <button onClick={props.open}>
        <p>مرجان خلیل پور</p>
        <img
          alt="Open user dropdown"
          src={icons.others.openDropdownMenuwhite}
        />
      </button>
      <div className="d-flex align-items-center mt-3" >
        <button className="btn btn-success py-2" >
          <img className="" alt="Livechat icon" src={icons.others.support} />
        </button>
        <button className="btn btn-success py-2 ms-2" onClick={props.openNotifs}> 
          <img alt="Bell icon" src={icons.others.bell} />
        </button>
      </div>

      
    </div>
  );
};

export default DashboardNavbarDropdownMenuSection;
