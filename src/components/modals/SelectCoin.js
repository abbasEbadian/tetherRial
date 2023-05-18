import React, { useState } from "react";
import "./css/SelectCoin.css";
import SelectBox from '../common/select'

import icons from "../../utils/icons";
import homeAndMarketsTableData from "../../utils/homeAndMarketsTableData";

const SelectCoin = (props) => {

  return (
    <SelectBox 
      eclass="select-coin-container select-coin-container--icon"
      icons
      {...props}
    >
    </SelectBox >
  
  );
};

export default SelectCoin;
