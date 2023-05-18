import React from "react";
import "./css/InputSubmit.css";

const InputSubmit = (props) => {
  return <input type="submit" value={props.title} className="input-submit"/>;
};

export default InputSubmit;
