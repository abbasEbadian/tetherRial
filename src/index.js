import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import "./master.css";
import {Lines} from 'react-preloaders2'
import App from "./App";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore,  applyMiddleware, compose } from 'redux'
import rootReducer from './redux/reducers'
import {sessionService} from 'redux-react-session'
import 'dotenv/config'
import { Constants } from "./Constants";
import axios from "axios";

const mid = [thunk]
const store = createStore(rootReducer,
    compose(
    applyMiddleware(...mid),
    (window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : a=>a)
    ));
    

const validateSession = (session) => {
    return new Promise((resolve, reject)=>{
        console.log("CHKING AUTH");
        axios.get(Constants.endpoints.PROFILE +session.id, {
            headers: {
                Auththorization: "Bearer " + session.token
            }
        }).then(e=>{
            if(e.status === 401) return reject(false)
            return resolve(true)
        }).catch(e=>{
            return reject(false)
        })
        
    })
}
const options = { refreshOnCheckAuth: false , redirectPath: '/', driver: 'COOKIES' }
sessionService.initSessionService(store, options)
 

ReactDom.render(
    <Provider store={store}>
            <App />
        <Lines/>
    </Provider>
, document.getElementById("root"));
