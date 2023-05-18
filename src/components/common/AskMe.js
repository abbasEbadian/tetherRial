import React from "react";
import "./css/AskMe.css";

import icons from "../../utils/icons";

const AskMe = () => {
  return (
    <div className="ask-me-container d-none">
      <img alt="Livechat icon" src={icons.others.livechat} />
      <p>از من بپرسید</p>
    </div>
  );
};

export default AskMe;
