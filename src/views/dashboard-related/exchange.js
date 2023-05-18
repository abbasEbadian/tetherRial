import React, { useRef, useState, useEffect } from "react";
import "./css/exchange.css";
import Navbar from "../../components/common/navbar/Navbar";
import ShortFooter from "../../components/common/footer/ShortFooter";

import ExchangePanel from "../../components/dashboard-related/ExchangePanel";
import ExchangeTable from "../../components/dashboard-related/ExchangeTable";
import TradingViewWidget from "react-tradingview-widget";

import Buy from "../../components/modals/Buy";

const Exchange = () => {
  let buyRef = useRef();
  const [showBuyModal, setShowBuyModal] = useState(false);

  useEffect(() => {
    // document.addEventListener("mousedown", (event) => {
    //   if (!buyRef.current||!buyRef.current.contains(event.target)) {
    //     setShowBuyModal(false);
    //   }
    // });
  }, []);

  return (
    <div className="dashboard-view-container justify-content-start">
      <Navbar currentPage="exchange" />

      <div className="exchange-container">
        <p className="home-title exchange-title">معامله</p>

        <Buy
          showBuyModal={showBuyModal}
          hanldeClose={() => setShowBuyModal(false)}
          handleOpen={() => setShowBuyModal(true)}
          buyRef={buyRef}
        />

        <div>
          <div data-aos="fade-up">
          <ExchangePanel />
          </div>
          <div   className="widget-container" data-aos="fade-up" data-aos-delay="300">
             <TradingViewWidget symbol={"COINBASE:USDTUSD"} height={480} />
          </div>
        </div>
      </div>

      <ShortFooter theme="dark" />
    </div>
  );
};

export default Exchange;
