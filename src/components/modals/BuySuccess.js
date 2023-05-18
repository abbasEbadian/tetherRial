import React from "react";
import "./css/BuySuccess.css";

import icons from "../../utils/icons";

const BuySuccess = () => {
  return (
    <div className="modal-container buy-success-container">
      <img src={icons.others.buySuccess} />

      <p>درخواست شما با موفقیت ثبت شد</p>
    </div>
  );
};

export default BuySuccess;
