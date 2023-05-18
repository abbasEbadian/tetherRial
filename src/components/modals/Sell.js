import React from "react";
import "./css/Sell.css";

import icons from "../../utils/icons";
import images from "../../utils/images";

import ModalTextInput from "./ModalTextInput";

const Sell = () => {
  const number = 346797466;
  return (
    <div className="sell-container modal-container">
      <p className="modal-title">فروش</p>

      <p>جزئیات سفارش</p>

      <div className="modal-colored-section sell-volume">
        <div>
          <p>مقدار</p>

          <p>۰.۱۲ BTC</p>
        </div>

        <div>
          <p>قیمت کل</p>

          <div>
            <p>{number.toLocaleString("fa")}</p>
            <p className="toman">تومان</p>
          </div>
        </div>
      </div>

      <div className="sell-warn">
        <img src={icons.others.warningTriangle} />

        <p>
          چنانچه ارز ارسالی شما با بیش از ۳۰ دقیه تاخیر واریز شود، مبلغ دریافتی
          در زمان واریز ارز محاسبه می‌شود.
        </p>
      </div>

      <div className="modal-colored-section barcode-section">
        <p>ارز خود را به آدرس زیر ارسال کنید</p>

        <img src={images.others.barcode} />

        <ModalTextInput placeholder="آدرس کیف پول سایت" />
      </div>

      <p className="modal-tip">
        پس از واریز ارز به کیف پول سایت، شناسه تراکنش را اینجا وارد کنید تا توسط
        کارشناسان بررسی شود.
      </p>

      <ModalTextInput placeholder="شناسه تراکنش" />

      <input type="submit" value="ثبت نهایی" className="modal-submit" />
    </div>
  );
};

export default Sell;
