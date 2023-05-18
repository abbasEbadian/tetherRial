import React from "react";
import "./css/Logout.css";

import icons from "../../utils/icons";

const Logout = () => {
  return (
    <div className="modal-container logout-container">
      <img src={icons.others.logoutModal} />

      <p>آیا از خروج از سایت اطمینان دارید؟</p>

      <div>
        <button>انصراف</button>
        <button>خروج</button>
      </div>
    </div>
  );
};

export default Logout;
