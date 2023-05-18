import React from "react";
import "./css/HomeMarketsTableRow.css";

const HomeMarketsTableRow = (props) => {
  return (
    <tr className="home-markets-table-row-container" key={props.key}>
      <td>
        <div>
          <img className="logo-crypto" src={require("../../../assets/images/logo-crypto/"+ props.acronym +".png").default} />
          <p>{props.currencyType}</p>
          <p>{props.acronym}</p>
        </div>
      </td>
      <td>
        <div>
          <div
            style={{
              background:
                props.changePercentage> 0
                  ? "rgba(23, 151, 78,0.1)"
                  : "rgba(235, 66, 66, 0.1)",
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
      <td>{props.globalPrice}</td>
      <td>{props.purchacePrice}</td>
      <td>{props.sellPrice}</td>
    </tr>
  );
};

export default HomeMarketsTableRow;
