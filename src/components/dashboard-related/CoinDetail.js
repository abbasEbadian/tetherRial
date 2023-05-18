import React from "react";
import "./css/CoinDetail.css";
import SelectCoin from '../../components/modals/SelectCoin'
import IRT from '../common/IRT'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const CoinDetail = () => {
  const [currency, setCurrency] = React.useState(undefined)
  const currencies = useSelector(state=>state.kucoin.currencies)
  const select = useSelector(state=>state.selects.coinDetailSelect)
  let query = useQuery();
  const dispatch = useDispatch()
  React.useEffect(()=>{
    const name= query.get("name")
    if(name) dispatch({type: "UPDATE_COIN_DETAIL_SELECT", payload: name})
  },[])
  React.useEffect(()=>{
    if(select){
      const f = currencies.filter(i=>i.baseCurrency === select)
      if(f) setCurrency(f[0])
    }
  },[select, currencies])

  return (
    <div className="coin-detail">
      
      <div>
        <SelectCoin asLink actionType={"UPDATE_COIN_DETAIL_SELECT"} selected={select} />
        <div>
          <p><IRT currencyName={select} /></p>
          <p>تومان</p>
        </div>
      </div>
      <div>
        <p>درصد تغییرات:</p>
        <p dir="ltr">{currency?currency.changeRate:0}</p>
      </div>
      <div>
        <p>پایین‌ترین:</p>

        <div>
          <p><IRT currencyName={select} fieldName={"low"} /></p>
          <p>تومان</p>
        </div>
      </div>
      <div>
        <p>بالاترین:</p>

        <div>
          <p><IRT currencyName={select} fieldName={"high"} /></p>
          <p>تومان</p>
        </div>
      </div>
      <div>
        <p>حجم:</p>

        <div>
          <p>{currency?currency.vol:0}</p>
        </div>
      </div>
      <div>
        <p>قیمت خرید:</p>

        <div>
          <p><IRT currencyName={select} fieldName={"buy"} /></p>
          <p>تومان</p>
        </div>
      </div>
      <div>
        <p>قیمت فروش:</p>

        <div>
          <p><IRT currencyName={select} fieldName={"sell"} /></p>
          <p>تومان</p>
        </div>
      </div>
      <div>
        <button className="buy-button">خرید</button>
        <button className="sell-button">فروش</button>
      </div>
      <div>
        <button className="exchange-button">تبدیل</button>
      </div>
    </div>
  );
};

export default CoinDetail;
