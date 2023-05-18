import React from "react";
import "./css/AboutUsContactUs.css";

import icons from "../../utils/icons";

const AboutUsContactUs = () => {
  return (
    <ul className="about-us-contact-us-container">
      <li>
        <img alt="Envelope icon" src={icons.others.envelope} />
        <p>@azhangnaghshejahan</p>
      </li>
      <li>
        <img alt="Phone icon" src={icons.others.phone} />
        <p>۰۲۱۴۴۹۷۷۶۳۸۲</p>
      </li>
      <li>
        <img alt="Instagram icon" src={icons.socialMedia.instagramBlack} />
        <p>@bigcoinance</p>
      </li>
      <li>
        <img alt="Twitter icon" src={icons.socialMedia.twitterBlack} />
        <p>@bigcoinance</p>
      </li>
      <li>
        <img alt="Envelope icon" src={icons.socialMedia.telegramBlack} />
        <p>@bigcoinance</p>
      </li>
      <li>
        <img alt="Location pin icon" src={icons.others.locationPin} />
        <p>
          خیابان ولیعصر - پایین‌تر از سینما آفریقا - کوچه عتیقی نژاد - پلاک ۵
        </p>
      </li>
    </ul>
  );
};

export default AboutUsContactUs;
