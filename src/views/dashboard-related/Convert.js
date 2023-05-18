import React from "react";
import "./css/Convert.css";

import Navbar from "../../components/common/navbar/Navbar";
import ShortFooter from "../../components/common/footer/ShortFooter";

import icons from "../../utils/icons";
import LoadingBar from 'react-top-loading-bar'
import SelectCoin from '../../components/modals/SelectCoin'
import { useSelector } from "react-redux";
import IRT from '../../components/common/IRT'
const Convert = () => {
  const selectFrom = useSelector(state=>state.selects.convertFromSelect)
  const selectTo = useSelector(state=>state.selects.convertToSelect)
  const [selectFromAmount, setSelectFromAmount] = React.useState(0)
  const [selectToAmount, setSelectToAmount] = React.useState(0)

  
  return (
    <div className="dashboard-view-container">

      <Navbar  currentPage="convert"/>

      <div className="convert-container" data-aos="fade-up">
        <form > 
          <div >
            <p>تبدیل</p>

            <div>
              <SelectCoin asLink={false} selected={selectFrom} actionType={"UPDATE_CONVERTFROM_SELECT"}/>

              <input type="text" onFocus={e=>e.target.select()}   value={ selectFromAmount } onChange={e=>setSelectFromAmount(e.target.value)}placeholder="۰.۰۲ - ۰.۰۰۶ " />
            </div>

            <div>
              <p>قیمت فروش</p>

              <div>
                <p><IRT currencyName={selectFrom} filed={"buy"}></IRT></p>
                <p>تومان</p>
              </div>
            </div>
          </div>

          <img alt="Convert icon" src={icons.others.convertVertical} />

          <div>
            <p>به</p>

            <div>
              <SelectCoin  asLink={false} selected={selectTo} actionType={"UPDATE_CONVERTTO_SELECT"}/>

              <input value={ selectToAmount } onFocus={e=>e.target.select()}  onChange={e=>setSelectToAmount(e.target.value)} type="text" placeholder="-" />
            </div>

            <div>
              <p>قیمت خرید</p>

              <div>
                <p><IRT currencyName={selectTo} filed={"sell"}></IRT></p>
                <p>تومان</p>
              </div>
            </div>
          </div>

          <div className="conversion-section">
            <div>
              <p>{selectFrom}</p>
              <p>{selectFromAmount}</p>
              <img alt="Currency icon" src={icons.currencies.ethereum} />
            </div>

            <img alt="Convert icon" src={icons.others.convertHorizontal} />

            <div>
              <p>{selectTo}</p>
              <p>{selectToAmount}</p>
              <img alt="Currency icon" src={icons.currencies.bitcoin} />
            </div>
          </div>

          <button className="btn btn-primary-gradient">تبدیل</button>
        </form>
      </div>

      <ShortFooter theme="dark" />
    </div>
  );
};

export default Convert;
