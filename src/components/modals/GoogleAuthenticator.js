import React from "react";
import "./css/GoogleAuthenticator.css";

import images from "../../utils/images";

import InputOTP from "../auth-related/inputs/InputOTP";

const GoogleAuthenticator = () => {
  return (
    <div className="modal-container google-authenticator-container">
      <p className="modal-title">شناسایی دو عاملی</p>

      <p className="g-o-p">
        لطفا بارکد زیر را توسط برنامه Authenticator Google گوشی خود اسکن نمائید.
      </p>

      <img src={images.others.barcode} />

      <p className="g-o-p">
        پس از اسکن بارکد، مورد مربوط به آی تی ارز در برنامه شما ایجاد خواهد شد.
      </p>
      <p className="g-o-p">
        برای تایید صحت فرایند، کدی که در اپ خود مشاهده می‌کنید را در کادر زیر
        وارد نمائید.
      </p>

      <InputOTP />

      <input type="submit" value="تایید" className="modal-submit" />
    </div>
  );
};

export default GoogleAuthenticator;
