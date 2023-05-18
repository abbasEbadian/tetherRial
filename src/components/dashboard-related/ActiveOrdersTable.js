import React from "react";
import "./css/ActiveOrdersTable.css";

const ActiveOrdersTable = () => {
  return (
    <table className="active-orders-table">
      <thead>
        <tr>
          <th className="f14">نوع</th>
          <th className="f14">رمز ارز</th>
          <th className="f14">
            <div>
              <p>قیمت واحد</p>
              <p className="f12">تومان</p>
            </div>
          </th>
          <th className="f14">مقدار</th>
          <th className="f14">
            <div>
              <p>قیمت کل</p>
              <p className="f12">تومان</p>
            </div>
          </th>
          <th className="f14">نوع شبکه</th>
          <th className="f14">کارمزد</th>
          <th className="f14">زمان</th>
          <th className="f14">وضعیت</th>
        </tr>
      </thead>

      <tbody></tbody>
    </table>
  );
};

export default ActiveOrdersTable;
