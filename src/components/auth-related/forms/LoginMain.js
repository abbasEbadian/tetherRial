import React from "react";
import "./css/LoginMain.css";
import { Link, useHistory } from "react-router-dom";

import InputText from "../inputs/InputText";
import InputSubmit from "../inputs/InputSubmit";

import icons from "../../../utils/icons";
import images from "../../../utils/images";
import {userLogin} from '../../../redux/actions'
import {toast} from 'react-toastify'
import axios from "axios"
import {Constants} from '../../../Constants' 
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ThreeDots } from "react-loader-spinner";
const LoginMain = () => {
  const _history = useHistory()
  const dispatch = useDispatch()


  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [key, setKey] = React.useState('mobile');
  const [email, setemail] = React.useState();
  const [mobile, setmobile] = React.useState();
  const [password, setpassword] = React.useState();

  const submitHandler = (e)=>{
        e.preventDefault()
        e.stopPropagation()
        setIsSubmitting(true)
        let data = {
          user_password: password
        }
        if(key=== "mobile") data["user_phone_number"] = mobile
        else data['user_email'] = email
        dispatch(userLogin(data, key === "email"?"2":"",setIsSubmitting ))
    }
    
  return (
    <div className="form login-main-container" data-aos="fade-up">
       <form className="flex" onSubmit={ submitHandler }>
        <Tabs activeKey={key}
          onSelect={(k) => setKey(k)} id="uncontrolled-tab-example" className="mb-3 w-100">

          <Tab tabClassName={"w-100"} eventKey="mobile" title="ورود با موبایل"></Tab>
          <Tab  tabClassName={"w-100"} eventKey="email" title="ورود با ایمیل"></Tab>

       </Tabs>

        <section>
          {key==="email"?
            <InputText  name="email" type="email" value={email} setvalue={setemail} placeholder="آدرس ایمیل" />
            :
            <InputText name="mobile" type="tel" value={mobile} setvalue={setmobile} placeholder="موبایل" />
          }

          <InputText setvalue={setpassword}  placeholder="رمز عبور" visibility />
          <Link to="/forgotPassword" className="forgot-password">
            فراموشی رمز عبور
          </Link>

          <button type="submit" className="btn btn-primary-gradient login-main-login-button d-flex align-items-center justify-content-center" disabled={isSubmitting}>
            {isSubmitting ? <ThreeDots color="white" width={30} height={10}/>:  "ورود"}  
          </button>

          {/* <p className="form-or">یا</p>

          <div className="form-google-login-container">
            <img alt="google" src={icons.others.google} />
            <p>ادامه با گوگل</p>
          </div> */}

          <div className="form-link">
            <p>حساب کاربری ندارید؟</p>
            &nbsp;
            <Link to="/signup">ایجاد حساب کاربری</Link>
          </div>
        </section>
      </form>

      <div className="form-left-section">
        <img alt="Bog Coinance" src={images.others.bigCoinance} />
      </div>
    </div>
  );
};

export default LoginMain;
