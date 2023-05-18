import React from "react";
import "./css/LongFooterContactUsSection.css";

import icons from "../../../../utils/icons";

const LongFooterContactUsSection = () => {
  return (
    <ul className="long-footer-contact-us-section-container">
      <li>تماس با ما</li>
      <li>
        <img
          alt="Envelope icon"
          src="Envelope icon"
          src={icons.others.envelope}
        />
        <p>@azhanghnaghshejahan</p>
      </li>
      <li>
        <img alt="Phone icon" src="Phone icon" src={icons.others.phone} />
        <p>۰۲۱۴۴۹۷۷۶۳۸۲</p>
      </li>
      <li>
        <img
          alt="Location pin icon"
          src="Location pin icon"
          src={icons.others.locationPin}
        />
        <p>
          خیابان ولیعصر - پایین‌تر از سینما آفریقا - کوچه عتیقی نژاد - پلاک ۵
        </p>
      </li>
    </ul>
  );
};

export default LongFooterContactUsSection;
