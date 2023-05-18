import axios from 'axios'
import { Constants } from '../../Constants'
import * as t from '../types'

export const fetch_fees = ()=>{
    return (dispatch)=>{
        axios.get(Constants.endpoints.FEES)
        .then(({data})=>{
            dispatch({type: t.UPDATE_FEES, payload: data})
        })
        .catch(err=>console.log(err))
    }
}
