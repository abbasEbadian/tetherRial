import React from "react";
import "./css/setting.css";

import Navbar from "../../components/common/navbar/Navbar";
import ShortFooter from "../../components/common/footer/ShortFooter";

import InputText from "../../components/auth-related/inputs/InputText";
import CheckIcon from '@mui/icons-material/Check';
const Setting = () => {
  const [loginMethod, setLoginMethod] = React.useState("email")
  return (
    <div className="dashboard-view-container">
      <Navbar />

      <div className="setting-container">
        <p className="home-title">تنظیمات</p>

        <div>
          <p>
            <b>شناسایی دو عاملی</b>
          </p>

          <div>
            <p>
              برای امنیت بیشتر حساب کاربری، فعالسازی یکی از روش‌های شناسایی دو
              عاملی الزامی می‌باشد.
            </p>

            <div className="methods">
              <button onClick={e=>setLoginMethod("email")}>
                ورود با آدرس ایمیل
                {loginMethod==="email"? <CheckIcon className="icon"/>:null}
              </button >
              <button  onClick={e=>setLoginMethod("mobile")}>ورود با شماره تلفن {loginMethod==="mobile"? <CheckIcon className="icon"/>:null}</button>
              <button  onClick={e=>setLoginMethod("google")}>ورود با شناسایی دو عاملی گوگل {loginMethod==="google"? <CheckIcon className="icon"/>:null}</button>
            </div>
          </div>
        </div>

        <div>
          <p>
            <b>تغییر رمز عبور</b>
          </p>

          <div>
            <p>برای تغییر رمز عبور، ابتدا رمز عبور فعلی خود را وارد کنید.</p>

            <div>
              <InputText placeholder="رمز عبور فعلی" visibility />
              <InputText placeholder="رمز عبور جدید" visibility />
              <button>تغییر رمز عبور</button>
            </div>
          </div>
        </div>
      </div>

      <ShortFooter theme="dark" />
    </div>
  );
};

export default Setting;
