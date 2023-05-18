import React, { useState } from "react";
import "./css/FeesTable.css";

import FeesTableRow from "./sub-components/FeesTableRow";

import feesTableData from "../../utils/feesTableData";

const FeesTable = () => {
  const [tableData, setTableData] = useState(feesTableData);

  return (
    <table className="fees-table-container">
      <thead>
        <tr>
          <th>رمز ارز</th>
          <th>کارمزد شبکه</th>
          <th>کارمزد سایت در سطح یک</th>
        </tr>
      </thead>

      <tbody>
        <FeesTableRow
          icon={tableData[0].icon}
          currencyType={tableData[0].currencyType}
          acronym={tableData[0].acronym}
          networkTax={tableData[0].networkTax}
          siteTax={tableData[0].siteTax}
        />
        <FeesTableRow
          icon={tableData[1].icon}
          currencyType={tableData[1].currencyType}
          acronym={tableData[1].acronym}
          networkTax={tableData[1].networkTax}
          siteTax={tableData[1].siteTax}
        />
        <FeesTableRow
          icon={tableData[2].icon}
          currencyType={tableData[2].currencyType}
          acronym={tableData[2].acronym}
          networkTax={tableData[2].networkTax}
          siteTax={tableData[2].siteTax}
        />
        <FeesTableRow
          icon={tableData[3].icon}
          currencyType={tableData[3].currencyType}
          acronym={tableData[3].acronym}
          networkTax={tableData[3].networkTax}
          siteTax={tableData[3].siteTax}
        />
        <FeesTableRow
          icon={tableData[4].icon}
          currencyType={tableData[4].currencyType}
          acronym={tableData[4].acronym}
          networkTax={tableData[4].networkTax}
          siteTax={tableData[4].siteTax}
        />
        <FeesTableRow
          icon={tableData[5].icon}
          currencyType={tableData[5].currencyType}
          acronym={tableData[5].acronym}
          networkTax={tableData[5].networkTax}
          siteTax={tableData[5].siteTax}
        />
        <FeesTableRow
          icon={tableData[6].icon}
          currencyType={tableData[6].currencyType}
          acronym={tableData[6].acronym}
          networkTax={tableData[6].networkTax}
          siteTax={tableData[6].siteTax}
        />
        <FeesTableRow
          icon={tableData[7].icon}
          currencyType={tableData[7].currencyType}
          acronym={tableData[7].acronym}
          networkTax={tableData[7].networkTax}
          siteTax={tableData[7].siteTax}
        />
      </tbody>
    </table>
  );
};

export default FeesTable;
