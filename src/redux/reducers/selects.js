const init_state = {
    coinDetailSelect: {},
    exchangeSelect: "",
    convertFromSelect: "",
    convertToSelect: "",

}

export const selectsReducer = (state=init_state, action)=>{
    switch(action.type){
        case "UPDATE_COIN_DETAIL_SELECT":
            return {
                ...state, 
                coinDetailSelect: action.payload
            } 
        case "UPDATE_EXCHANGE_SELECT":
            return {
                ...state, 
                exchangeSelect: action.payload
            } 
        case "UPDATE_CONVERTFROM_SELECT":
            return {
                ...state, 
                convertFromSelect: action.payload
            } 
        case "UPDATE_CONVERTTO_SELECT":
            return {
                ...state, 
                convertToSelect: action.payload
            } 
        default: return state
    }
}