import React, { useState } from "react";
import "./css/FAQCollapseItem.css";

import icons from "../../../utils/icons";

const FAQCollapseItem = (props) => {
  const [collapseStatus, setCollapseStatus] = useState(false);

  return (
    <div className="faq-collapse-item-container">
      <div className="collapse-title" onClick={() => setCollapseStatus(!collapseStatus)}>
        <p>{props.title}</p>

        <img
          alt="Collapse status"
          src={
            collapseStatus === false
              ? icons.others.collapsePlus
              : icons.others.collapseMinus
          }
          
        />
      </div>

      <p
        className="collapse-content"
        style={{ display: collapseStatus === false ? "none" : "block" }}
      >
        {props.content}
      </p>
    </div>
  );
};

export default FAQCollapseItem;
