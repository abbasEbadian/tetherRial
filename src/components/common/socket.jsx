import React from 'react';
import { useDispatch } from 'react-redux';

function Socket({setState}) {
    const dispatch = useDispatch()
    let init = false
    let once = false
    React.useEffect(()=>{
        try{
            let socket = new WebSocket("wss://tetherrial.com/ws");
            console.log("Attempting Connection...");
            socket.onmessage = function (event) {

                const t = JSON.parse(event.data)
                console.log(new Date().getSeconds(),t)
                if(Array.isArray(t)){
                    
                    const data = t.map(i=>{
                        return i.data.data
                    })
                    
                    dispatch({type: "UPDATE_CURRENCIES", payload: data })
                    if(t.filter(i=>i.baseCurrency === "BTC").length)
                        console.log("BTC: ",t.filter(i=>i.baseCurrency === "BTC")[0].lastTradedPrice);
                }else{
                    if(init) return
                    init = true
                    // if(Object.keys(t).includes("BTC"))
                    //     console.log("BTC:", t["BTC"]);
                    dispatch({
                        type: "UPDATE_CURRENCIES", 
                        payload: Object.keys(t).map(i=>{
                            const row =  JSON.parse(t[i])
                            return {baseCurrency: i,
                                lastTradedPrice: row.LastTradedPrice || 0,
                                buy:  row.Buy|| 0,
                                sell: row.Sell|| 0,
                                changeRate: row.ChangeRate|| 0,
                                high: 0,
                                low: 0,
                                vol: 0
                                }
                        }) 
                    })
                    dispatch({
                        type: "UPDATE_STATIC_CURRENCIES", 
                        payload: Object.keys(t)
                    })
                }
            }
            socket.onopen = () => {
                console.log("Successfully Connected");
                socket.send("Hi From the Client!")
            };
        }
        catch(e){
            console.log(e);
        }
    })
  return <div></div>;
}

export default Socket;
