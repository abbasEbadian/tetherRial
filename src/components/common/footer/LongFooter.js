import React from "react";
import "./css/LongFooter.css";
import { Link } from "react-router-dom";

import LongFooterVistaSection from "./sub-components/LongFooterVistaSection";
import LongFooterContactUsSection from "./sub-components/LongFooterContactUsSection";

const LongFooter = () => {
  return (
    <div className="long-footer-container mt-auto">
      <div className="d-flex flex-wrap">
        <div className="col-12 col-md-4 col-xl-3 mb-5 mb-xl-0">
          <LongFooterVistaSection />
        </div>
        <div className="col-6 col-md-4 col-xl-2">
          <ul>
            <li>دسترسی سریع</li>
            <Link>معاملات</Link>
            {/* <Link>بازارها</Link> */}
            <Link>تاریخچه</Link>
          </ul>
        </div>
        <div className="col-6 col-md-4 col-xl-2 ">
          <ul>
            <li>راهنما</li>
            <Link>سوالات متداول</Link>
            <Link>قوانین و مقررات</Link>
            <Link>درباره‌ما</Link>
          </ul>
        </div>
        <div className="col-12  col-xl-5 mt-5 mt-xl-0">
         <LongFooterContactUsSection />
        </div>
      </div>

      <p className="bg-dark d-none">کلیه حقوق این سایت متعلق به شرکت تترریال  می‌باشد.</p>
    </div>
  );
};

export default LongFooter;
