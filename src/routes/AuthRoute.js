import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import { useSelector } from "react-redux" 

const AuthRoute = ({children, ...rest}) =>{
    // const authenticated = useSelector(state=>state.session.authenticated) 
    const authenticated = true
    return (
        <>
        <Route
            {...rest}
            render={
                ({location})=> authenticated ? (children):(
                    <Redirect 
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                        
                    ></Redirect>
                )
            }
            
        ></Route>
       
        </>
    )
}

export default AuthRoute
