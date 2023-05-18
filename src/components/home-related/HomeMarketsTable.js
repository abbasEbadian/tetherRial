import React, { useState } from "react";
import "./css/HomeMarketsTable.css";

import HomeMarketsTableRow from "./sub-components/HomeMarketsTableRow";

import homeAndMarketsTableData from "../../utils/homeAndMarketsTableData";
import { useSelector }from 'react-redux'

const HomeMarketsTable = () => {
  const tableData = useSelector(state => state.kucoin.currencies)

  return (
    <table className="home-markets-table">
      <thead>
        <tr>
          <th>نوع ارز</th>
          <th>تغییرات</th>
          <th>
            <p>قیمت جهانی</p>
            <p>تومان</p>
          </th>
          <th>
            <p>قیمت خرید</p>
            <p>تومان</p>
          </th>
          <th>
            <p>قیمت فروش</p>
            <p>تومان</p>
          </th>
        </tr>
      </thead>

      <tbody>
        {tableData.map((item, idx) => (
          <HomeMarketsTableRow
          key={item.baseCurrency}
          item={item}
          icon={""}
          currencyType={""}
          // currencyType={item.localization.ar}
          acronym={item.baseCurrency}
          // symbol={item.baseCurrency}
          changePercentage={item.changeRate}
          globalPrice={item.lastTradedPrice}
          purchacePrice={item.buy}
          sellPrice={item.sell}
          />
        ))}
      </tbody>
     
    </table>

  );
};

export default HomeMarketsTable;
