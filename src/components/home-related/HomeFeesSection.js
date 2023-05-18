import React, { useState } from "react";
import "./css/HomeFeesSection.css";

import HomeFeeBox from "./sub-components/HomeFeeBox";
import {useDispatch, useSelector} from 'react-redux'

const HomeFeesSection = () => {
  const currencies = useSelector(state=>state.kucoin.currencies)
  const [usdt, setUsdt] = React.useState()
  React.useEffect(()=>{
    const c = currencies.filter(e=>e.baseCurrency === "USDC")
    if(c.length) setUsdt(c[0])
    else setUsdt({buy: 1, sell: 1.11})
  }, [currencies])
  return (
    <div className="home-fees-section-container">
      {usdt?<>
      <HomeFeeBox
        currencyType={"تتر"}
        acronym={"USDC"}
        purchagePrice={usdt.buy}
        sellPrice={usdt.sell}
        delay={0}
      />
      <HomeFeeBox
        currencyType={"تتر"}
        acronym={"USDC"}
        purchagePrice={usdt.buy}
        sellPrice={usdt.sell}
        delay={100}
        IRT
      /></>:null}
      
    </div>
  );
};

export default HomeFeesSection;
