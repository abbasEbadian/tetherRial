import React, { useState } from "react";
import "./css/AuthenticationForm.css";

import AuthenticationInputText from "../dashboard-related/sub-components/AuthenticationInputText";
import {Form} from 'react-bootstrap'
import images from "../../utils/images";
import AdapterJalali from '@date-io/date-fns-jalali';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {useSelector} from 'react-redux'
import {userUpdatePersonal} from '../../redux/actions'
import {useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import AddCard from './sub-components/AddCard'
import { ThreeDots } from "react-loader-spinner";

function getDataUrl(img) {
  // Create canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  // Set width and height
  canvas.width = img.width;
  canvas.height = img.height;
  // Draw the image
  ctx.drawImage(img, 0, 0);
  return canvas.toDataURL('image/jpeg');
}


const AuthenticationForm = ({source}) => {
  const user = useSelector(state=>state.session.user)
  const [name, setName] = React.useState("");
  const [birth, setBirth] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [post, setPost] = React.useState("");
  const [code, setCode] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [city, setCity] = React.useState("");
  const [province, setProvince] = React.useState("");
  const [bank, setBank] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [codeErr, setCodeErr] = React.useState("")
  const [postErr, setPostErr] = React.useState("")
  const cardRef = React.useRef(null)
  const dispatch = useDispatch()

  const submit2 = (e)=>{
    return;
    e.preventDefault()
    e.stopPropagation()
    console.log(cardRef.current);
    const files = cardRef.current.files
    if(!files){
      toast.error("تصویر آپلود نشده است.")
      return 
    }
    
   
    console.log(getDataUrl(cardRef.current.currentTarget));
    let data = {
      user_id_card: getDataUrl(cardRef.current.currentTarget),
      user_gender:gender,
      user_birth: birth,
      user_post_code: post,
      user_addr: address,
      user_city: JSON.stringify({city, province}),
      user_bank_account: JSON.stringify(bank),
      user_active: "",
      user_id_code: code,
    }
    dispatch(userUpdatePersonal(data))
  }
  const submit = (e)=>{
    e.preventDefault()
    e.stopPropagation()
    setIsSubmitting(true)
    let data = {
      user_id_card: "",
      user_id_code: code,
      user_gender:gender,
      user_birth: birth,
      user_post_code: post,
      user_addr: address,
      user_city: JSON.stringify({city, province}),
      user_bank_account: JSON.stringify(bank),
      user_active: "",

    }
    dispatch(userUpdatePersonal(data)).then(message=>{
      if(message === "sent"){
        toast.success("اطلاعات با موفقیت به روز رسانی شد.")
      }else{
        toast.error("خطا در برقراری ارتباط")
      }
    })
    .catch(e=>console.log(e))
    .finally(e=>setIsSubmitting(false))
  }



  React.useEffect(()=>{
    if(user&&Object.keys(user).length&&user.user_name){
      const name2 = user.user_name 
      if(name2){
        setName(name2)
      }
      const code2 = user.user_id_code
      if(code2) setCode(code2)
      const email2 = user.user_email
      if(email2) setEmail(email2)
      const phone2 = user.user_phone_number
      if(phone2) setMobile(phone2)
      const birth2 = user.user_birth
      if(birth2) setBirth(birth2)

      const address2 = user.user_addr
      if(address2) setAddress(address2)

      const gender2 = user.user_gender
      if(gender2) setGender(gender2)

      const bank2 = user.user_bank_account
      // const bank2 = JSON.stringify([{card: "123", shaba: "456"}])
      if(bank2) {
        const banks = JSON.parse(bank2)
        setBank(banks)
      }
      const city2 = user.user_city
      if(city2) {
        const {city, province} = JSON.parse(city2)
        setCity(city)
        setProvince(province)
      }
      
    }

  }, [user])


  const changeCode = (e)=>{
    const v = (e.target.value).replace(/[^0-9]/g, "")
    if(v.length !== 10) setCodeErr("10 رقمی باید باشد")
    else setCodeErr("")
    setCode(v)
  }
  const changePost = (e)=>{
    const v = e.target.value.replace(/[^0-9]/g, "")
    if(v.length !== 10) setPostErr("10 رقمی باید باشد")
    else setPostErr("")
    setPost(v)
  }
  return (
    <form className="authentication-form-container" onSubmit={submit}>

      {!source?<><section data-aos="fade-up">
        <p className="form-title">اطلاعات فردی</p>

        <div>
          <AuthenticationInputText
            // width="360px"
            placeholder="نام و نام خانوادگی"
            className="input-type-1"
            value={name}
            setValue={setName}
            readOnly
          />
          <AuthenticationInputText
            // width="360px"
            placeholder="تلفن همراه"
            className="input-type-1"
            value={mobile}
            setValue={setMobile}
            readOnly
          />
          <AuthenticationInputText
            // width="360px"
            placeholder="آدرس ایمیل"
            className="input-type-1"
            leftAlign
            value={email}
            setValue={setEmail}
            readOnly
          />
          <style JSX>
            {`
            .MuiInputAdornment-root{
              display:flex;
              align-items:center;
              justify-content: flex-end;
              width: 100%;
            }
            .MuiInputAdornment-root button{
              width: 50px !important;
            }
           
            `}
          </style>
          
        </div>
        <div>
        <AuthenticationInputText
            // width="360px"
            placeholder="استان"
            className="input-type-1"
            value={province}
            setValue={setProvince}
            
          />
          <AuthenticationInputText
            // width="360px"
            placeholder="شهر"
            className="input-type-1"
            value={city}
            setValue={setCity}
          />
          <Form.Select bsPrefix="genderSelect form-select" value={gender} onChange={e=>setGender(e.target.value)} aria-label="Default select example">
            <option>جنسیت</option>
            <option value="male">آقا</option>
            <option value="female">خانم</option>
          </Form.Select>

          
          
          <style JSX>
            {`
            .MuiInputAdornment-root{
              display:flex;
              align-items:center;
              justify-content: flex-end;
              width: 100%;
            }
            .MuiInputAdornment-root button{
              width: 50px !important;
            }
            `}
          </style>
          
        </div>

        <div>
          <AuthenticationInputText
            // width="360px"
            placeholder="کد ملی"
            className={"input-type-1"}
            value={code}
            maxlength={10}
            parentclass={(codeErr?" with-error": "")}
            onChange={changeCode}
            type={"tel"}
          >
            <span className="error-text">{codeErr}</span>
          </AuthenticationInputText>
          
          <AuthenticationInputText
            // width="360px"
            placeholder="کد پستی"
            className="input-type-1"
            value={post}
            maxlength={10}
            parentclass={(postErr?" with-error": "")}
            onChange={changePost}
            type={"tel"}
          >
            <span className="error-text">{postErr}</span>
          </AuthenticationInputText>
          <LocalizationProvider dateAdapter={AdapterJalali}>
            <DatePicker
              
              value={birth}
              label=""
              onChange={(newValue) => {setBirth(newValue)}}
              renderInput={({ inputRef, inputProps, InputProps }) => (<AuthenticationInputText
                // width="360px"
                
                datepicker
                ref={inputRef} {...inputProps} 
                placeholder="تاریخ تولد"
              >{InputProps?.endAdornment}</AuthenticationInputText>)}
            />
          </LocalizationProvider>
        </div>

        <div className="address-container">
          <textarea type="text" value={address} onChange={e=>setAddress(e.target.value)} placeholder="آدرس منزل" />
        </div>
      </section>

      <AddCard setBank={setBank} bank={bank}/>
      </>:null}

      
      {source? <><section data-aos="fade-up" className="white-container" >
        <p className="form-title">آپلود مدارک</p>

        <div>
          <b className="pad-it px-2">
            لطفا تصویر کارت ملی را در کنار چهره خودتان همراه با یک دست نوشته به صورت
            کاملا خوانا و واضح، دقیق مانند تصویر نمونه ارسال نمائید.
            <br />
            دقت شود متن دست نوشته نبایستی تایپ شود. هم‌چنین توجه داشته باشید هنگام
            تهیه تصویر، متن دست نوشته و اطلاعات کارت ملی به صورت برعکس و آینه‌ای ثبت
            نشود.
          </b>
        </div>

        <p className="tips pad-it">
          متن دست نوشته:
          <br />
          اینجانب (نام و نام خانوادگی) به کد ملی (کدملی) ضمن مطالعه و تایید قوانین
          استفاده از خدمات کریپتونانس، متعهد می‌گردم که حساب کاربری و مدارک خود را به
          منظور <br /> خرید و فروش ارزهای دیجیتال در اختیار سایر افراد قرار ندهم.
          <br />
          جهت احراز هویت در سایت کریپتونانس
        </p>

        <div className="upload-section">
          <p>نام و نام خانوادگی امضا و تاریخ</p>

          <div className="d-flex justify-content-between pt-4">
            <div className="upload-here-container">
              <div className="text-center">
                <input type="file" ref={cardRef}/>
                <img alt="Upload here" className="my-3" src={images.others.uploadHere} />
                <p>تصویر خود را اینجا آپلود کنید</p>
              </div>
            </div>
            <img alt="Right" src={images.others.authCorrect} />
            <img alt="Wrong" src={images.others.authWrong} />
          </div>
        </div>
        
      </section></>:null}
      {!source? <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-primary-gradient mx-3" type="submit" disabled={isSubmitting}>
            {isSubmitting? <ThreeDots height={15} width={30}/>: "ثبت تغییرات"}
          </button>
          <button className="btn btn-primary-outline">رد کردن</button>
      </div>:<div className="actions">
          <button type="button" onClick={submit2} >احراز هویت</button>          
        </div>}
    </form>
  );
};

export default AuthenticationForm;
