import React from "react";
import "./css/LoginAndSignupOTP.css";

import InputText from "../inputs/InputText";
import InputSubmit from "../inputs/InputSubmit";
import InputOTP from "../inputs/InputOTP";

import images from "../../../utils/images";

const LoginAndSignupOTP = (props) => {
  return (
    <div className="flex form login-and-signup-otp-container">
      <form className="flex">
        <p className="form-title">{props.title}</p>

        <p className="form-tip">کد ۶ رقمی ارسالی به ایمیل خود را وارد کنید</p>

        <InputText placeholder="آدرس ایمیل" />

        <InputOTP />

        <p className="otp-timer">۰۰:۴۵</p>

        <InputSubmit title="تایید کد" />
      </form>

      <div className="form-left-section">
        <img alt="Bog Coinance" src={images.others.bigCoinance} />
      </div>
    </div>
  );
};

export default LoginAndSignupOTP;
