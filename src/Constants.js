export const BASE_URL = "https://tetherrial.com"
export const KUCOIN = "https://api.kucoin.com"
export const Constants = {
    BASE_URL,
    REFERRAL_BASE: "http://tetherrial.ir/auth/signup?referral=",

    endpoints:{
        LOGIN: BASE_URL + '/api/login/',
        LOGIN2: BASE_URL + '/api/login2/',
        REGISTER: BASE_URL + '/api/users/',
        PROFILE: BASE_URL + '/api/user/',
        TUSD: BASE_URL + '/api/tusd/',
        FEES: BASE_URL + '/api/fee/',
        EDIT_PROFILE: BASE_URL + '/api/useredit/',
        GET_CURRENCIES: KUCOIN + "/api/v1/currencies",
        GET_TICKERS: KUCOIN + '/api/v1/market/allTickers',
        BULLET: KUCOIN+ '/api/v1/bullet-public'
    },
    get_symbol: function(sym){
        sym =sym? sym.toUpperCase():"BTC"
        if(sym==="USDT") return "POLONIEX:ETHUSDT"
        return `BINANCE:${sym}USDT`
    }
}