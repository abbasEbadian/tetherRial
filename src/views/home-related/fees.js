import React from "react";
import "./css/fees.css";

// Import statements of needed common components
import Navbar from "../../components/common/navbar/Navbar";
import LongFooter from "../../components/common/footer/LongFooter";

import FeesTable from "../../components/home-related/FeesTable";

import images from "../../utils/images";

const Fees = () => {
  return (
    <div className="home-view-container">
      <Navbar theme="light" currentPage="fees" />

      <div className="fees-container">
        <div >
          <div data-aos='fade-up' className="white-container">
            <p className="home-title">کارمزدها</p>
            <p className="home-content">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>

            <ul>
              <li>
                کارمزد خریدار ارز دیجیتال به صورت ارز دیجیتال کسر کارمزد از
                فروشنده ارز دیجیتال از مبلغ دریافتی به تومان کسر می‌شود.
              </li>
              <li>کارمزد از هر دو سمت معامله کسر می‌شود.</li>
              <li>در هنگام ثبت معاملات، کارمزد به شما نمایش داده می‌شود.</li>
            </ul>
          </div>

          <img data-aos='fade-up' data-aos-delay='100' alt="Fees" src={images.homeRelated.fees} />
        </div>

          <p className="home-title text-white" data-aos='fade-up' data-aos-delay='200'>کارمزدها</p>
          <div className="table-container white-container" data-aos='fade-up' data-aos-delay='200'>
            <FeesTable />
          </div>
      </div>

      <LongFooter />
    </div>
  );
};

export default Fees;
