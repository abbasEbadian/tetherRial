// Nees to support both dark and light mode
import React from "react";
import "./css/ShortFooter.css";

import icons from "../../../utils/icons";

const ShortFooter = (props) => {
  return (
    <div
      className="short-footer-container "
      style={{ color: props.theme === "dark" ? "#FFFBF5" : "#1D1D1D" , height: "0px"}}
    >
      <p>کلیه حقوق این سایت متعلق به شرکت تترریال می‌باشد.</p>

      <div>
        <p>تترریال در شبکه‌های اجتماعی</p>

        <img
          alt="Instagram logo"
          src={
            props.theme === "dark"
              ? icons.socialMedia.instagramWhite
              : icons.socialMedia.instagramBlack
          }
        />
        <img
          alt="Twitter logo"
          src={
            props.theme === "dark"
              ? icons.socialMedia.twitterWhite
              : icons.socialMedia.twitterBlack
          }
        />
        <img
          alt="Telegram logo"
          src={
            props.theme === "dark"
              ? icons.socialMedia.telegramWhite
              : icons.socialMedia.telegramBlack
          }
        />
      </div>
    </div>
  );
};

export default ShortFooter;
