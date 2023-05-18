import React from 'react';
import { useSelector } from "react-redux";

function IRT({amount=undefined, currencyName=undefined, fieldName="lastTradedPrice"}) {
    
  const usd_price = useSelector(state => state.kucoin.usd_price)
  const data = useSelector(state => state.kucoin.currencies)
  const [am, setAm] = React.useState(0)

  
  
  React.useEffect(()=>{
    const comp = (a)=>{
      return Number(Number(+a * +usd_price).toFixed()).toLocaleString()
    }
    if(!amount && !currencyName) setAm(0)
    else if(amount) setAm(comp(amount))
    else if(!amount && currencyName) {
      if(data){
        const t = data.filter(i=>i.baseCurrency===currencyName)
        if(t.length)
          setAm(comp(t[0][fieldName]))
      }else{
        setAm(0)
      }
    }
  }, [amount, currencyName]) 
  return <span>
      {am}
  </span>;
}

export default IRT;
