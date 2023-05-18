import React from "react";
import "./css/userAccount.css";

import Navbar from "../../components/common/navbar/Navbar";
import ShortFooter from "../../components/common/footer/ShortFooter";

import AuthenticationForm from "../../components/dashboard-related/AuthenticationForm";
import {useDispatch} from 'react-redux'
import {userUpdatePersonal} from '../../redux/actions'
const UserAccount = () => {
  const dispatch = useDispatch()
  const submit = (e, data)=>{
    e.preventDefault()
    e.stopPropagation()
    
    dispatch(userUpdatePersonal(data))
  }
  return (
    <div className="dashboard-view-container">
      <Navbar />

      <div className="user-account-container">
        <p className="home-title">احراز هویت</p>

        <AuthenticationForm submit={submit} />

        
      </div>

      <ShortFooter theme="dark" />
    </div>
  );
};

export default UserAccount;
