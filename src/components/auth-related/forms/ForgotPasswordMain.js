import React from "react";
import "./css/ForgotPasswordMain.css";

import InputText from "../../../components/auth-related/inputs/InputText";
import InputSubmit from "../../../components/auth-related/inputs/InputSubmit";

const ForgotPasswordMain = () => {
  return (
    <div className="flex form forgot-password-main-container">
      <p className="form-title">فراموشی رمز عبور</p>

      <section className="px-4 pb-2">
        <InputText placeholder="آدرس ایمیل" />
        <br/>

        <InputSubmit title="ارسال کد" />
      </section>
    </div>
  );
};

export default ForgotPasswordMain;
