import { combineReducers } from 'redux'
import { sessionReducer } from 'redux-react-session'
import {kucoinReducer} from './kucoin'
import {selectsReducer} from './selects'

const rootReducer = combineReducers({
    session: sessionReducer,
    kucoin: kucoinReducer,
    selects: selectsReducer,
});


export default rootReducer;