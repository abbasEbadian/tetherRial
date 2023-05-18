import React from "react";
import "./css/HomeFAQ.css";

import FAQCollapseMenu from "../home-related/FAQCollapseMenu";

import images from "../../utils/images";

const HomeFAQ = () => {
  return (
   <div className="bg-white">
      <div className="home-faq-container" data-aos="fade-up">
      

      <div className="home-faq-section" >
        <p className="home-title">سوالات متداول کاربران</p>

        <FAQCollapseMenu />
      </div>

      <img alt="FAQ" src={images.homeRelated.FAQ} />
    </div>
   </div>
  );
};

export default HomeFAQ;
