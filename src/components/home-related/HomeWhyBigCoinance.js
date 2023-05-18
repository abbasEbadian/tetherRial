import React from "react";
import "./css/HomeWhyBigCoinance.css";

import HomeWhyBigCoinanceSection from "./sub-components/HomeWhyBigCoinanceSection";

import images from "../../utils/images";

const HomeWhyBigCoinance = () => {
  return (
    <div className="home-why-big-coinance-container" >
      <div  data-aos="fade-up">
      <p className="home-title">چرا TetherRial</p>

      <div className="why-big-coinance-boxes-container">
        <HomeWhyBigCoinanceSection
          image={images.whyBigCoinance.security}
          title="امنیت اطلاعات شما"
          content="تترریال  با استفاده از به‌روزترین راه‌ها، امین دارایی‌های شماست."
        />
        <HomeWhyBigCoinanceSection
          image={images.whyBigCoinance.visibility}
          title="همه چیز قابل بررسی"
          content="در تترریال  تمامی کارمزدها و جزئیات خرید شما در هر زمان قابل مشاهده و بررسی است."
        />
        <HomeWhyBigCoinanceSection
          image={images.whyBigCoinance.constantSupport}
          title="پشتیبانی ۲۴ ساعته"
          content="در تترریال  تمامی کارمزدها و جزئیات خرید شما در هر زمان قابل مشاهده و بررسی است."
        />
      </div>
      </div>
    </div>
  );
};

export default HomeWhyBigCoinance;
