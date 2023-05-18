import React from "react";
import "./css/ExchangeTableRow.css";
import IRT from '../../common/IRT'
import {Link} from 'react-router-dom'
const ExchangeTableRow = (props) => {
  return (
    <tr className="exchange-table-row">
      <td>
        <div>
          {/* <img alt="Currency icon" src={props.icon} /> */}
          <p>{props.currencyType}</p>
          <Link to={"coinExplain?name=" + props.acronym} className="align-items-center">
            {/* <img alt="Currency icon" src={props.icon} /> */}
              <p>{props.acronym}</p>
          </Link>
        </div>
      </td>
      <td>
        <div>
          <div
            className="color-it"
            style={{
              background:
                props.changePercentage>0
                  ? "rgba(23, 151, 78,0.1)"
                  : "rgba(235, 66, 66,0.1)",

              color:
                props.changePercentage>0 
                  ? "#17974E"
                  : "#EB4242",
            }}
          >
            <p dir="ltr">{props.changePercentage}</p>
          </div>
        </div>
      </td>
      <td><IRT amount={props.purchacePrice}/></td>
      <td><IRT amount={props.sellPrice}/></td>
    </tr>
  );
};

export default ExchangeTableRow;
