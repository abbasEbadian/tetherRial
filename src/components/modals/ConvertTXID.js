import React from "react";
import "./css/ConvertTXID.css";

import icons from "../../utils/icons";
import ModalTextInput from "./ModalTextInput";
import images from "../../utils/images";

const ConvertTXID = () => {
  const number = 0.797566;
  const number2 = 346797466;

  return (
    <div className="modal-container convert-txid-container">
      <p className="modal-title">تبدیل</p>

      <div className="modal-colored-section convert-indicator">
        <div className="modal-fb">
          <p>ETH</p>
          <p>{number.toLocaleString("fa", { minimumFractionDigits: 6 })}</p>
          <img src={icons.currencies.ethereum} />
        </div>

        <img src={icons.others.convertHorizontal} />

        <div className="modal-fb">
          <p>BTC</p>
          <p>{number.toLocaleString("fa", { minimumFractionDigits: 6 })}</p>
          <img src={icons.currencies.bitcoin} />
        </div>
      </div>

      <div className="modal-colored-section barcode-section">
        <p>ارز خود را به آدرس زیر ارسال کنید</p>

        <img src={images.others.barcode} />

        <ModalTextInput placeholder="آدرس کیف پول سایت" />
      </div>

      <p className="modal-tip">
        پس از واری ارز به کیف پول سایت، شناسه تراکنش را اینجا وارد کنید تا توسط
        کارشناسان بررسی شود.
      </p>

      <ModalTextInput placeholder="شناسه تراکنش" />

      <input type="submit" value="تبدیل" className="modal-submit" />
    </div>
  );
};

export default ConvertTXID;
