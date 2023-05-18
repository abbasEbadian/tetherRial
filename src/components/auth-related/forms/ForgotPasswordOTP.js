import React from "react";
import "./css/ForgotPasswordOTP.css";

import InputText from "../inputs/InputText";
import InputSubmit from "../inputs/InputSubmit";
import InputOTP from "../inputs/InputOTP";

const ForgotPasswordOTP = () => {
  return (
    <div className="flex form forgot-password-otp-container">
      <p className="form-title">فراموشی رمز عبور</p>

      <p className="form-tip">کد ۶ رقمی ارسالی به ایمیل خود را وارد کنید </p>

      <InputText placeholder="آدرس ایمیل" />

      <InputOTP />

      <p className="otp-timer">۰۰:۴۵</p>

      <InputSubmit title="ارسال کد" />
    </div>
  );
};

export default ForgotPasswordOTP;
