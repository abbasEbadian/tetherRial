import React, { useState } from "react";
import "./css/MyOrdersTable.css";

import MyOrdersTableRow from "./sub-components/MyOrdersTableRow";

import myOrdersTableData from "../../utils/myOrdersTableData";

const MyOrdersTable = () => {
  const [tableData, setTableData] = useState(myOrdersTableData);

  return (
    <table className="my-orders-table">
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
          <th>وضعیت</th>
        </tr>
      </thead>

      <tbody>
        {tableData.map((item) => (
          <MyOrdersTableRow status={item.status} />
        ))}
      </tbody>
    </table>
  );
};

export default MyOrdersTable;
