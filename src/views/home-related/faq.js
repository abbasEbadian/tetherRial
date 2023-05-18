import React from "react";
import "./css/faq.css";

// Import statements of needed common components
import Navbar from "../../components/common/navbar/Navbar";
import LongFooter from "../../components/common/footer/LongFooter";

import FAQCollapseMenu from "../../components/home-related/FAQCollapseMenu";

import images from "../../utils/images";

const FAQ = () => {
  return (
    <div className="home-view-container">
      <Navbar theme="light" currentPage="faq" />
      <div className="faq-container" data-aos='fade-up'>
        <div className="white-container">
          <p className="home-title">سوالات متداول</p>

          <FAQCollapseMenu />
        </div>

        <img alt="FAQ" src={images.homeRelated.FAQ} />
      </div>
      <LongFooter />
    </div>
  );
};

export default FAQ;
