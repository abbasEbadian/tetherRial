import React from "react";
import "./css/SignupMain.css";
import { Link } from "react-router-dom";

import InputText from "../../../components/auth-related/inputs/InputText";

import icons from "../../../utils/icons";
import images from "../../../utils/images";
import {useHistory} from 'react-router-dom'
import { userSignup } from "../../../redux/actions/user";
import {toast} from 'react-toastify'
import {ThreeDots} from 'react-loader-spinner'
import { useDispatch } from "react-redux";
import md5 from 'md5'
const SignupMain = () => {
  const [name, setname] = React.useState("")
  const [nameerr, setnameerr] = React.useState("")
  const [email, setemail] = React.useState("")
  const [emailerr, setemailerr] = React.useState("")
  const [mobile, setmobile] = React.useState("")
  const [mobileerr, setmobileerr] = React.useState("")
  const [pass, setpass] = React.useState("")
  const [passerr, setpasserr] = React.useState("")
  const [pass2, setpass2] = React.useState("")
  const [pass2err, setpass2err] = React.useState("")
  const [ref, setref] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const history = useHistory()
  const dispatch = useDispatch()

  const onSubmit = (e)=>{
    e.preventDefault()
    e.stopPropagation()
    if(!name) setnameerr("نمیتواند خالی باشد.")
    else setnameerr('')
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
      setemailerr(false)
    }else{
      setemailerr("ایمیل نامعتبر است.")
    }

    re = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
    if(re.test(pass)){
      setpasserr(false)
    }else{
      setpasserr("حداقل 8 کاراکتر و  شامل حرف بزرگ ، حرف کوچک ، یک کاراکتر خاص (@, #, ...) باشد.")
    }
    if(pass !== pass2){
      setpass2err("رمز عبور یکسان نیست")
    }else{
      setpass2err(false)
    }
    if(mobile.length !== 11 || mobile.replace(/[0-9]/g, '').length !== 0 ){
      setmobileerr("شماره تلفن وارد شده صحیح نمی باشد")
    }else{
      setmobileerr(false)
    }

    if(nameerr || emailerr || passerr || pass2err || mobileerr ||
      !email || !pass || !pass2 || !mobile ) return false
    else{
      const data = {
          user_name: name,
          user_password: md5(pass),
          user_email: email,
          user_phone_number: mobile,
          user_image: "",
          user_id_card: "",
          user_gender: "",
          user_birth: "",
          user_post_code: "",
          user_addr: "",
          user_city: "",
          user_bank_account: "",
          user_id_code: ""
        }
        setIsSubmitting(true)
        dispatch(userSignup(data)).then(({status, message, data=undefined})=>{
          if(status === 200){
            toast.success(message, {
              onClose:()=> {
                history.push("login")
              }
            })
          }else{
            toast.error(message, data)
          }
        })
        .catch(er=>{console.log(er)})
        .finally(e=>setIsSubmitting(false))
    
    
  }}
  return (
    <div className="flex form signup-main-container" data-aos="fade-up">
      <form className="flex" onSubmit={onSubmit} >
        <p className="form-title">ثبت نام</p>

        <section>
        <InputText name='name' type="text" error={nameerr} setvalue={setname} placeholder="نام و نام خانوادگی" />
          <InputText name='email' type="email" error={emailerr} setvalue={setemail} placeholder="آدرس ایمیل" />
          <InputText name='phone' type="tel"  error={mobileerr} setvalue={setmobile} placeholder="شماره همراه" helptext="توجه:نام وارد شده باید با  نام مالک شماره همراه وارد شده یکسان باشد." />
          <InputText error={passerr} setvalue={setpass } placeholder="رمز عبور" visibility />
           <InputText error={pass2err} setvalue={setpass2} placeholder="تکرار رمز عبور" visibility />
          <InputText setvalue={setref} placeholder="کد دعوت (اختیاری)" />

          <button title="" type="submit" className="btn btn-primary-gradient d-flex align-items-center justify-content-center" disabled={isSubmitting}>
           {isSubmitting? <ThreeDots color="white" width={30} height={10}/>:  "ثبت نام"}
            
          </button>
          <div className="flex form-link ">
            <p>حساب کاربری دارید؟</p>
            &nbsp;
            <Link to="/login" className="text-primary" >وارد شوید</Link>
          </div>
        </section>
          {/* <p className="form-or">یا</p>

          <div className="flex form-google-login-container">
            <img alt="google" src={icons.others.google} />
            <p>ادامه با گوگل</p>
          </div> */}

          
      </form>

      <div className="flex form-left-section">
        <img alt="Bog Coinance" src={images.others.bigCoinance} />
      </div>
    </div>
  );
};

export default SignupMain;
