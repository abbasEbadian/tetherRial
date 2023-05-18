import React, { useState } from "react";
import "./css/InputText.css";

import icons from "../../../utils/icons";

const InputText = (props) => {
  const [txtValue, setTxtValue] = useState("");
  const [focused, setFocused] = useState("");
  const [type, setType] = useState(props.visibility?"password":"text")
  const onChangeInpu = (e) => {
    setTxtValue(e.target.value);
    if(props.setvalue) props.setvalue(e.target.value)
  
  };

  return (
    <div className="flex input-text-container" >
      {props.visibility ? (<>
        <img alt="Input visibility" src={icons.others.inputVisibility} onClick={e=>setType(type==="text"?"password":"text")}/>
        <input autoComplete="new-password"  type={type} onChange={onChangeInpu} onFocus={e=>setFocused(true)} onBlur={e=>setFocused(false)}/>
        </>) : <input value={props.value} autoComplete="new-password" type={props.type||"text"} name={props.name?props.name: ""} onChange={onChangeInpu} onFocus={e=>setFocused(true)} onBlur={e=>setFocused(false)}/>}

        
      <label className={focused || txtValue !== ""? "moved": ""} style={{ top: txtValue !== "" ? "-10px" : null }}>
        {props.placeholder}
      </label>
      {props.error? <small className="text-danger">
        {props.error} 
      </small> :null}
    </div>
  );
};

export default InputText;
