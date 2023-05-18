import React from "react";
import "./css/markets.css";

import Navbar from "../../components/common/navbar/Navbar";
import ShortFooter from "../../components/common/footer/ShortFooter";

import MarketsTable from "../../components/dashboard-related/MarketsTable";

const Markets = () => {
  return (
    <div className="dashboard-view-container" >
      <Navbar currentPage="markets"/>

      <div className="markets-markets-table-container" data-aos="fade-up">
        <p className="home-title markets-title">بازارها</p>

        <MarketsTable />
      </div>

      <ShortFooter theme="dark" />
    </div>
  );
};

export default Markets;
