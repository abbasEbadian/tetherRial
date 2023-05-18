import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {userLogout} from '../../redux/actions'
function Signout() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userLogout())
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Signout
