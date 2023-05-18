import React from "react";
import "./css/Buy.css";

const Buy = (props) => {
  const number = 346797466;
  return (
    <div
      className="buy-container modal-container"
      style={{
        display: props.showBuyModal ? "flex" : "none",
        color: "black",
        zIndex: "1",
      }}
      ref={props.buyRef}
    >
      <p className="modal-title">خرید</p>

      <p className="buy-detail">جزئیات سفارش</p>

      <div className="buy-middle-section modal-colored-section">
        <div>
          <p>مقدار</p>
          <p>۰.۱۲ BTC</p>
        </div>

        <div>
          <p>کارمزد شبکه</p>
          <p>۰.۰۰۰۱۲ BTC</p>
        </div>

        <div>
          <p>قیمت کل</p>
          <div>
            <p>{number.toLocaleString("fa")}</p>
            <p className="toman">تومان</p>
          </div>
        </div>
      </div>

      <p className="buy-tip">
        پس از ثبت سفارش مقدار ارز خریداری شده به کیف پول ثبت شده در سایت انتقال
        داده می‌شود.
      </p>

      <input type="submit" value="تایید" className="modal-submit" />
    </div>
  );
};

export default Buy;
