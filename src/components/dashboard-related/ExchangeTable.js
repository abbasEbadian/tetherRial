import React, { useState } from "react";
import "./css/ExchangeTable.css";
import {Table} from 'react-bootstrap'
import ExchangeTableRow from "./sub-components/ExchangeTableRow";
import { useSelector }from 'react-redux'


const ExchangeTable = () => {
  const tableData = useSelector(state => state.kucoin.currencies)

  return (
    <Table className="exchange-table" responsive>
      <thead>
        <tr>
          <th>نوع ارز</th>
          <th>تغییرات</th>
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
        {tableData.map((item) => (
          <ExchangeTableRow
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
    </Table>
  );
};

export default ExchangeTable;
