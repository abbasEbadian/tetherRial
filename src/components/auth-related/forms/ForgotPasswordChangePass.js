import React from "react";
import "./css/ForgotPasswordChangePass.css";

import InputText from "../inputs/InputText";
import InputSubmit from "../inputs/InputSubmit";

const ForgotPasswordChangePass = () => {
  return (
    <div className="flex form forgot-password-change-pass-container">
      <p className="form-title">فراموشی رمز عبور</p>

      <p className="form-tip">رمز عبور جدید خود را وارد کنید</p>

      <InputText placeholder="رمز عبور جدید" visibility />

      <InputSubmit title="تغییر رمز عبور" />
    </div>
  );
};

export default ForgotPasswordChangePass;
