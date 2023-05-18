import React from "react";
import "./css/TwoStepSMS.css";

import InputOTP from "../auth-related/inputs/InputOTP";

const TwoStepSMS = () => {
  return (
    <div className="modal-container two-step-sms-container">
      <p className="modal-title">شناسایی دو عاملی</p>

      <p className="modal-tip">
        کد ۶ رقمی ارسال شده به شماره ۰۹۱۲۳۸***۶۳۶ را وارد نمائید.
      </p>

      <InputOTP />

      <p className="modal-timer">۰۰:۴۵</p>

      <input type="submit" value="تایید" className="modal-submit" />
    </div>
  );
};

export default TwoStepSMS;
