import React, { useState } from "react";
import "./css/MarketsTable.css";
import {Table} from 'react-bootstrap'
import MarketsTableRow from "./sub-components/MarketsTableRow";

import { useSelector }from 'react-redux'
import {TailSpin} from 'react-loader-spinner'

const MarketsTable = () => {
  const tableData = useSelector(state => state.kucoin.currencies)
  // const loading_currencies = useSelector(state => state.kucoin.loading_currencies)

  return (
    <Table className="markets-table" responsive>
      <thead>
        <tr>
          <th>نوع ارز</th>
          <th>تغییرات</th>
          <th>
            <div>
              <p>قیمت جهانی</p>
              <p>تومان</p>
            </div>
          </th>
          <th>
            <div>
              <p>قیمت خرید</p>
              <p>تومان</p>
            </div>
          </th>
          <th>
            <div>
              <p>قیمت فروش</p>
              <p>تومان</p>
            </div>
          </th>
        </tr>
      </thead>

      <tbody>
        {tableData.length?tableData.map((item) => (
          <MarketsTableRow key={item.baseCurrency}
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
        )): <div className="text-center w-100"><TailSpin height={40}/></div>}
      </tbody>
    </Table>
  );
};

export default MarketsTable;
