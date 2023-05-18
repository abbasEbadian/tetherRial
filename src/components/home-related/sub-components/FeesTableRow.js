import React from "react";
import "./css/FeesTableRow.css";

const FeesTableRow = (props) => {
  return (
    <tr className="fees-table-row-container">
      <td className="currency-info">
        <img alt="Currency icon" src={props.icon} />
        <p className="currency-title">{props.currencyType}</p>
        <p>{props.acronym}</p>
      </td>

      <td className="table-data-center network-tax">{props.networkTax}</td>
      <td className="table-data-center site-tax">{props.siteTax}</td>
    </tr>
  );
};

export default FeesTableRow;
