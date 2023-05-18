import React, { useState } from "react";
import "./css/NotificationsCollapseItem.css";

import icons from "../../utils/icons";

const NotificationsCollapseItem = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="notif-collapse-container">
      <div>
        <p>احراز هویت با موفقیت انجام شد</p>

        <p>۱۵:۱۱ - ۱۳۸۶/۰۷/۲۱</p>

        <img
          alt="Collapse button"
          src={
            collapse ? icons.others.collapseMinus : icons.others.collapsePlus
          }
          onClick={() => setCollapse(!collapse)}
        />
      </div>

      <p style={{ display: collapse ? "block" : "none" }}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
      </p>
    </div>
  );
};

export default NotificationsCollapseItem;
