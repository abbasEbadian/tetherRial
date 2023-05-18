import React from "react";
import "./css/Convert.css";

import icons from "../../utils/icons";

import ModalTextInput from "./ModalTextInput";
import SelectCoin from '../../components/modals/SelectCoin'
const Convert = () => {
  const number = 0.797566;
  const number2 = 346797466;
  return (
    <div className="modal-container convert-modal-container">
      <p className="modal-title">تبدیل</p>

      <div className="modal-colored-section convert-indicator">
        <SelectCoin />

        <img src={icons.others.convertHorizontal} />

        <div className="modal-fb">
          <p>BTC</p>
          <p>{number.toLocaleString("fa", { minimumFractionDigits: 6 })}</p>
          <img src={icons.currencies.bitcoin} />
        </div>
      </div>

      <div className="modal-colored-section">
        <div className="modal-fb">
          <p>قیمت فروش بیت کوین</p>
          <div className="modal-fb">
            <p>{number2.toLocaleString("fa")}</p>
            <p className="toman">تومان</p>
          </div>
        </div>

        <div className="modal-fb">
          <p>قیمت خرید اتریوم</p>
          <div className="modal-fb">
            <p>{number2.toLocaleString("fa")}</p>
            <p className="toman">تومان</p>
          </div>
        </div>
      </div>

      <div className="modal-colored-section">
        <div className="modal-fb">
          <p>کارمزد بیت کوین</p>
          <p>۰.۱۲ BTC</p>
        </div>

        <div className="modal-fb">
          <p>کارمزد اتریوم</p>
          <p>۰.۱۲ ETH</p>
        </div>
      </div>

      <p className="convert-tip">
        آدرس کیف پول مقصد برای ارسال ارز را وارد کنید
      </p>

      <ModalTextInput placeholder="آدرس کیف پول مقصد" />

      <input
        type="submit"
        value="ثبت درخواست و ادامه"
        className="modal-submit"
      />
    </div>
  );
};

export default Convert;
