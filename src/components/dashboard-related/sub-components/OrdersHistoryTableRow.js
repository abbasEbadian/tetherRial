import React from "react";
import "./css/OrdersHistoryTableRow.css";

import icons from "../../../utils/icons";

const OrdersHistoryTableRow = (props) => {
  const number = 345666864;
  return (
    <tr className="orders-table-row">
      <td>تبدیل</td>
      <td>بیت کوین</td>
      <td>{number.toLocaleString("fa")}</td>
      <td>۰.۱۲ BTC</td>
      <td style={{ color: props.status === true ? "#17974E" : "#EB4242" }}>
        {number.toLocaleString("fa")}
      </td>
      <td>شبکه اتریوم</td>
      <td>۰.۰۴ ٪</td>
      <td>۱۵:۱۱ - ۱۳۸۶/۰۷/۲۱</td>
      <td style={{ color: props.tracking != null ? "#193B66" : null }}>
        {props.tracking === null ? "-" : props.tracking}
      </td>
      <td>
        <img
          alt="Status"
          src={props.status === true ? icons.others.tick : icons.others.cross}
        />
      </td>
    </tr>
  );
};

export default OrdersHistoryTableRow;
