import React from "react";
import "./css/MarketsTableRow.css";
import {Link} from 'react-router-dom'
import { useSelector }from 'react-redux'
import IRT from '../../common/IRT'
const MarketsTableRow = (props) => {

  return (
    <tr className="markets-table-row-container" key={props.key}> 
      <style JSX>{`
        td{
          vertical-align: middle;
        }
      `}</style>
      <td className="coin">
        <Link to={"coinExplain?name=" + props.acronym} className="align-items-center">
            {/* <img alt="Currency icon" src={props.icon} /> */}
              <p>{props.currencyType}</p>
              <p>{props.acronym}</p>
        </Link>
      </td>
      <td>
      <p dir="ltr" className="text-center">{props.changePercentage}</p>
      </td>
      {/* <td className={props.item.lastTradedPriceUP? " text-success": "text-danger"}>{Number((Number(props.globalPrice)*usd_price).toFixed()).toLocaleString()}</td> */}
      <td ><IRT amount={props.globalPrice}></IRT></td>
      <td><IRT amount={props.purchacePrice}/></td>
      <td><IRT amount={props.sellPrice}/></td>
    </tr>
  );
};

export default MarketsTableRow;
