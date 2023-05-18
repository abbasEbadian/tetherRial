import React from "react";
import "./css/TwoStepEmail.css";

import InputOTP from "../auth-related/inputs/InputOTP";

const TwoStepEmail = () => {
  return (
    <div className="modal-container two-step-email-container">
    <p className="modal-title">شناسایی دو عاملی</p>

    <p className="modal-tip">
      کد ۶ رقمی ارسال شده به ایمیل marjan.kh... را وارد نمائید.
    </p>

    <InputOTP />

    <p className="modal-timer">۰۰:۴۵</p>

    <input type="submit" value="تایید" className="modal-submit" />
  </div>
  );
};

export default TwoStepEmail;
