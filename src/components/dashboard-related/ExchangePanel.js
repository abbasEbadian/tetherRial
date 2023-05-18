import React, { useEffect, useRef, useState } from "react";
import "./css/ExchangePanel.css";
import TradingViewWidget from "react-tradingview-widget";

import InputText from "../../components/auth-related/inputs/InputText";
import IRT from '../common/IRT'
import {useSelector} from 'react-redux'
import SelectCoin from '../../components/modals/SelectCoin'
const ExchangePanel = () => {
  let buyRef = useRef();
  const selected = useSelector(state=>state.selects.exchangeSelect)
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!buyRef.current || !buyRef.current.contains(event.target)) {
        setShowBuyModal(false);
      }
    });

  }, []);

  const [currentForm, setCurrentForm] = useState("buy");

  const [showBuyModal, setShowBuyModal] = useState(false);

  return (
    <div className="exchange-panel">
      {/* <Buy showBuyModal={showBuyModal} buyRef={buyRef} /> */}
     
      <div>
        <p
          onClick={() => setCurrentForm("buy")}
          style={{
            borderBottom:
              currentForm === "buy"
                ? "4px solid rgb(248, 193, 37)"
                : "4px solid rgba(29, 29, 29, 0.1)",
          }}
        >
          خرید
        </p>
        <p
          onClick={() => setCurrentForm("sell")}
          style={{
            borderBottom:
              currentForm === "sell"
                ? "4px solid rgb(248, 193, 37)"
                : "4px solid rgba(29, 29, 29, 0.1)",
          }}
        >
          فروش
        </p>
      </div>

      <div className="my-3">
        <div> 
          <SelectCoin asLink={false} actionType={"UPDATE_EXCHANGE_SELECT"} selected={selected}/>
        </div>

        <div className="f16 ">
          <p>
            <b>{selected?<IRT currencyName={selected}/>: undefined}</b>
          </p>
          <p>تومان</p>
        </div>
      </div>

      <div className="mb-4 ">
        <p className="f12">
          <b>موجودی</b>
        </p>

        <div className="d-flex flex-row-reverse">
          <p className="f12 underline mx-2">0</p>
          <p>{selected}</p>
        </div>
      </div>

      <div className="mb-3"><InputText placeholder="مقدار تتر" /></div>

      <div className="mb-3"><InputText placeholder="مبلغ به تومان" /></div>

      <div className="mb-2">
        <p className="f12 ">سقف قابل معامله</p>

        <div>
          <p className="f12">۳۴۶.۷۹۷۶.۴۶۶ - ۳۴۶.۷۹۷۶.۴۶۶</p>
          <p>تومان</p>
        </div>
      </div>

      <p className="f12">کارمزد شبکه تتر ۷۶.۴۶۶ تومان است</p>

      {/* <div className="my-2"><InputText placeholder="آدرس کیف پول مقصد" /></div> */}

      <div className="my-2">
        <p className="f16">
          <b>مبلغ کل</b>
        </p>

        <div>
          <p className="f16">
            <b>0</b>
          </p>
          <p>تومان</p>
        </div>
      </div>

      <button
        className={"btn " +( currentForm === "buy" ? "btn-secondary" : "btn-danger" )}
        onClick={() => setShowBuyModal(true)}
      >
        {currentForm === "buy" ? "خرید" : "فروش"}
      </button>
    </div>
  );
};

export default ExchangePanel;
