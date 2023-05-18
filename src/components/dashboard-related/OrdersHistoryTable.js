import React, { useState } from "react";
import "./css/OrdersHistoryTable.css";

import OrdersHistoryTableRow from "./sub-components/OrdersHistoryTableRow";

import ordersHistoryTableData from "../../utils/ordersHistoryTableData";

const OrdersHistoryTable = () => {
  const [tableData, setTableData] = useState(ordersHistoryTableData);
  return (
    <table className="orders-history-table">
      <thead>
        <tr>
          <th>نوع</th>
          <th>رمزارز</th>
          <th>
            <div>
              <p>قیمت واحد</p>
              <p>تومان</p>
            </div>
          </th>
          <th>مقدار</th>
          <th>
            <div>
              <p>قیمت کل</p>
              <p>تومان</p>
            </div>
          </th>
          <th>نوع شبکه</th>
          <th>کارمزد</th>
          <th>زمان</th>
          <th>پیگیری</th>
          <th>وضعیت</th>
        </tr>
      </thead>

      <tbody>
        {ordersHistoryTableData.map((item) => (
          <OrdersHistoryTableRow
            tracking={item.tracking}
            status={item.status}
          />
        ))}
      </tbody>
    </table>
  );
};

export default OrdersHistoryTable;
