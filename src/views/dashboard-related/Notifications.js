import React from "react";
import "./css/Notifications.css";

import Navbar from "../../components/common/navbar/Navbar";
import ShortFooter from "../../components/common/footer/ShortFooter";

import NotificationsCollapseItem from "../../components/dashboard-related/NotificationsCollapseItem";

const Notifications = () => {
  return (
    <div className="dashboard-view-container">
      <Navbar />

      <div className="notifications-container mb-auto">
        <p className="home-title">اعلانات</p>

        <NotificationsCollapseItem />
        <NotificationsCollapseItem />
        <NotificationsCollapseItem />
        <NotificationsCollapseItem />
        <NotificationsCollapseItem />
        <NotificationsCollapseItem />
        <NotificationsCollapseItem />
        <NotificationsCollapseItem />
      </div>

      <ShortFooter theme="dark" />
    </div>
  );
};

export default Notifications;
