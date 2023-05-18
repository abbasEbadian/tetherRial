import React, { useState } from "react";
import "./css/AuthenticationInputText.css";

import icons from "../../../utils/icons";
import images from "../../../utils/images";
import { DatePicker } from "jalali-react-datepicker";

const AuthenticationInputText = ( {readOnly=false, datepicker=false,children, width, notebook, saman,value, leftAlign, placeholder,setValue, ...rest}) => {
  const [txtValue, setTxtValue] = useState("");
  const [focus, setFocus] = useState("");
  const onChangeInpu = (e) => {
    if(setValue)setValue(e.target.value);
  };

  return (
    <div
      className={"authentication-input-text-container " + (rest.parentclass)}
      style={{ width: width }}
    >
      {notebook ? (
        <img
          alt="Notebook"
          src={icons.others.notebook}
          style={{ opacity: "0.7" }}
        />
      ) : null}

      {saman ? <img alt="Bank" src={images.others.samanBank} /> : null}
      
      
      
      <input
        onChange={(e) => onChangeInpu(e)}
        {...rest}
        type="text"
        value={value}
        style={{ textAlign: leftAlign ? "left" : null }}
        readOnly={readOnly}
        onFocus={e=>setFocus(true)}
        onBlur={e=>setFocus(false)}
      />
      {children}
      {!datepicker || true? <label className={(txtValue || value || focus) ? "moved": ""}>
        {placeholder}
      </label>:undefined}
    </div>
  );
};

export default AuthenticationInputText;
