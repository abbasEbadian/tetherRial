import React from "react";
import "./css/ModalTextInput.css";

const ModalTextInput = (props) => {
  return (
    <div className="modal-text-input-container">
      <input type="text" />
      <label>{props.placeholder}</label>
    </div>
  );
};

export default ModalTextInput;
