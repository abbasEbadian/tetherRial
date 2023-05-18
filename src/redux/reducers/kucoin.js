
import * as t from '../types'

const init_state = {
    currencies:  [],
    staticCurrencies: [],
    fees: [],
    loading_currencies: false,
    usd_price: 27000
}
export const kucoinReducer = (state=init_state, action)=>{
    switch(action.type){
        case "UPDATE_CURRENCIES":
            let d = [...state.currencies]
            action.payload.forEach((element, idx) => {
                let  xx = d.map(i=>{return i.baseCurrency}).indexOf(element.baseCurrency)
                if (xx>-1) {
                    d[xx]['lastTradedPriceUP'] = d[xx]['lastTradedPrice'] <= element.lastTradedPrice
                    d[xx]['lastTradedPrice']= element.lastTradedPrice
                    d[xx]['buy']= element.buy
                    d[xx]['buyUp']= d[xx]['buy'] < element.buy
                    d[xx]['sell']= element.sell
                    d[xx]['sellUP']= d[xx]['sell'] < element.sell
                    d[xx]['changeRate']= element.changeRate
                    d[xx]['low']= element.low
                    d[xx]['high']= element.high
                    d[xx]['vol']= element.vol
                }else{
                    d.push(element)
                }
            });
            return {
                ...state, 
                currencies: d
            }
            
        case "UPDATE_STATIC_CURRENCIES":
            return {
                ...state, 
                staticCurrencies: action.payload
            }
        case "UPDATE_LOADING_CURRENCIES":
            return {
                ...state, 
                loading_currencies: action.payload
            }
        case "UPDATE_USD_PRICE":
            return {
                ...state, 
                usd_price: action.payload
            }
        case t.UPDATE_FEES:
            return {
                ...state, 
                fees: action.payload
            }
        default:
        return state 
    } 
}