import React from "react";
import "./css/InviteFriends.css";

import Navbar from "../../components/common/navbar/Navbar";
import ShortFooter from "../../components/common/footer/ShortFooter";

import InputText from "../../components/auth-related/inputs/InputText";

import images from "../../utils/images";

const InviteFriends = () => {
  return (
    <div className="dashboard-view-container">
      <Navbar />

      <div className="invite-friends-container" >
        <p className="home-title" data-aos="fade-up" data-aos-delay="0">دعوت از دوستان</p>

        <div data-aos="fade-up" data-aos-delay="0">
          <p>
            شما می‌توانید دوستان خود را با لینک اختصاصی خود به تترریال دعوت کنید.
            در حال حاضر بر اساس این طرح، ۳۰٪ از کارمزد تمامای معاملات کسانی که
            با لینک شما ثبت نام کرده‌اند به شما پرداخت خواهد شد. همچنین
            می‌توانید بخشی از این سود را در هنگام ایجاد لینک به فرد دعوا شده
            اختصاص دهید.
          </p>

          <p className="invite-friends-bullet">
            در صورت استفاده از کد در مرتبه‌ی اول، قیمت مشاهده شده با تخفیف اعمال
            می‌گردد.
          </p>
          <p className="invite-friends-bullet">
            در صورت استفاده مجدد از کد دعوت، درصد کمیسیون به درجه‌ی اول باز
            می‌گردد.
          </p>

          <div className="inputs-section">
            <InputText placeholder="کد دعوت" />

            <InputText placeholder="کد دعوت" />
          </div>
        </div>

        <div className="invite-section">
          <div className="invite-boxes" data-aos="fade-up" data-aos-delay="100">
            <p>دوستان من</p>

            <p>۱۲ نفر</p>

            <img alt="High five" src={images.others.highFive} />
          </div>

          <div className="invite-boxes" data-aos="fade-up" data-aos-delay="200">
            <p>درآمد من</p>

            <p>۱.۲۰۰.۰۰۰ تومان</p>

            <img alt="High five" src={images.others.moneySack} />
          </div>
        </div>
      </div>

      <ShortFooter theme="dark" />
    </div>
  );
};

export default InviteFriends;
