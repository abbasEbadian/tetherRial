import React from "react";
import "./css/MyOrdersTableRow.css";

const MyOrdersTableRow = (props) => {
  const number = 345666864;

  return (
    <tr className="my-orders-table-row-container">
      <td>تبدیل</td>
      <td>بیت کوین</td>
      <td>{number.toLocaleString("fa")}</td>
      <td>۰.۱۲ BTC</td>
      <td style={{ color: props.status === 'sending' ? "#17974E" : "#EB4242" }}>
        {number.toLocaleString("fa")}
      </td>
      <td>شبکه اتریوم</td>
      <td>۰.۰۴ ٪</td>
      <td>۱۵:۱۱ - ۱۳۸۶/۰۷/۲۱</td>
      <td style={{ color: props.status === "sending" ? "#17974E" : null }}>
        {props.status === "checking" ? "در حال بررسی" : "در حال ارسال"}
      </td>
    </tr>
  );
};

export default MyOrdersTableRow;
