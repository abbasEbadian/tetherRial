import React, { useState } from "react";
import "./css/History.css";

import Navbar from "../../components/common/navbar/Navbar";
import ShortFooter from "../../components/common/footer/ShortFooter";

import MyOrdersTable from "../../components/dashboard-related/MyOrdersTable";
import OrdersHistoryTable from "../../components/dashboard-related/OrdersHistoryTable";
import homeAndMarketsTableData from "../../utils/homeAndMarketsTableData";
import SelectCoin from "../../components/modals/SelectCoin";
import SelectBox2 from '../../components/common/select2'
const History = () => {
  const [curencies, setCurrencies] = useState(homeAndMarketsTableData);
  
  const [historyActive,setHistoryActive]= useState(0)
  const [historyType,setHistoryType]= useState(0)

  const [currentActive,setCurrentActive]= useState(0)
  const [currentType,setCurrentType]= useState(0)


  return (
    <div className="dashboard-view-container">
      <Navbar currentPage="history" />

      <div className="history-container">
        <p className="home-title" data-aos="fade-up">تاریخچه</p>

        <div className="active-orders-container" data-aos="fade-up" data-aos-delay="100">
          <div>
            <p className="home-title">سفارشات فعال</p>

            <div className="options">
              
              <SelectBox2 options={[[0, "نوع"], [1, "معامله (ارز - تومان)"]]} setActive={setCurrentActive} eclass="select-coin-container" selected={currentActive}/>
              <SelectBox2 options={[[0, "نوع سفارش"], [1, "همه"], [2, "خرید"], [3, "فروش"]]} setActive={setCurrentType} eclass="select-coin-container" selected={currentType}/>
              <SelectCoin asLink={false} />
            </div>
          </div>

          <div className="active-orders-table-container table-container" data-aos="fade-up">
            <MyOrdersTable />
          </div>
        </div>

        <div className="transactions-history-container" data-aos="fade-up" data-aos-delay="200">
          <div>
            <p className="home-title">تاریخچه معاملات</p>

            <div className="options">
                <SelectBox2 options={[[0, "نوع"], [1, "معامله (ارز - تومان)"]]} setActive={setHistoryActive} eclass="select-coin-container" selected={historyActive}/>
                  <SelectBox2 options={[[0, "نوع سفارش"], [1, "همه"], [2, "خرید"], [3, "فروش"]]} setActive={setHistoryType} eclass="select-coin-container"  selected={historyType}/>
              <SelectCoin />
            </div>
          </div>

          <div className="transactions-history-table-container table-container">
            <OrdersHistoryTable />
          </div>
        </div>
      </div>

      <ShortFooter theme="dark" />
    </div>
  );
};

export default History;
