import React from "react";
import "./css/coinExplain.css";
import TradingViewWidget from "react-tradingview-widget";

import Navbar from "../../components/common/navbar/Navbar";
import ShortFooter from "../../components/common/footer/ShortFooter";
import CoinDetail from "../../components/dashboard-related/CoinDetail";
import {useSelector} from 'react-redux'
const CoinExplain = () => {
  const select = useSelector(state=>state.selects.coinDetailSelect)

  return (
    <div className="dashboard-view-container">
      <Navbar currentPage="markets"/>

      <div className="coin-explain-container">
        <div className="coin-explain-top-section">
          <section data-aos="fade-left">
          <CoinDetail />
          </section>
          <section className="widget-section" data-aos="fade-right">
         <TradingViewWidget symbol={"BINANCE:"+select+"USDT"}/>
          </section>  
        </div>

        <div className="coin-explain-bottom-section" data-aos="fade-left">
          <p className="home-title">بیت کوین چیست؟</p>
          <p className="coin-explain-14">
            بیت کوین یک رمزارز یا همان ارز دیجیتال است که قابلیت پرداخت‌های بین
            المللی را به ما می‌دهد و همانند پول‌های رایج عمل می‌کند. به عبارتی
            دیگر بیت‌کوین نوعی دارایی دیجیتال است که به صورت دیجیتال نگهداری و
            انتقال داده می‌شود.
          </p>
          <p className="coin-explain-14">
            نقل و انتقالات و تراکنش‌های بیت کوین در سلسله‌ای به هم تنیده شده از
            اطلاعات به صورت رمزنگاری شده نگهداری می‌شود که به آن بلاک‌چین و در
            زبان فارسی زنجیره بلوک گفته می‌شود. تراکنش‌های بیت‌کوینی به صورت
            طبقه‌بندی شده در بلاک‌ها نگهداری می‌شوند. آنچه که این دارایی دیجیتال
            را جذاب‌تر می‌کند، محدودیت ۱۲ میلیون واحدی آن است. پس از استخراج ۱۲
            میلیون بیت کوین پروسه استخراج به اتمام می‌رسد و ماینرها تنها به
            پردازش تراکنش‌ها و تایید آن‌ها خواهند پرداخت.
          </p>
          <p className="coin-explain-14">
            تمامی ویژگی‌های لازم برای نگهداری ارزش تحت عنوان دارایی در بیت کوین
            قابل مشاهده است و بیت کوین این مزیت را نسبت به بقیه ارزها دارد که در
            هر جایی و هر زمانی قابلیت انتقال دارد و محدودیت‌های قانونی و بانکی
            ندارد. در هر لحظه که اراده کنید می‌توانید بیت کوین خود را به هر جایی
            از این کره خاکی ارسال کنید و معاملات خود را انجام دهید.
          </p>
          <p className="home-title">چگونه بیت کوین خود را نگهداری کنیم؟</p>
          <p className="coin-explain-14">
            یکی از دغدغه‌های اصلی دارندگان بیت کوین نحوه نگهداری Bitcoin است.
            جهت نگهداری بیت کوین از نرم‌افزارهای آفلاین که اصطلاحا کیف پول سرد
            نامیده می‌شوند و نرم‌افزارهای آنلاین که کیف پول گرم نامیده می‌شوند
            می‌توانید استفاده کنید.
          </p>
          <p className="coin-explain-14">
          تترریال سرویس کیف پول ارائه نمی‌دهد اما اگر شما به دنبال یک کیف پول
            امن، سریع و آسان هستید که تنوع گسترده‌ای از آلت کوین‌ها را پشتیبانی
            کند.
          </p>
          <p className="home-title">
            قیمت بیت کوین در تترریال چگونه تغییر می‌کند؟
          </p>
          <p className="coin-explain-14">
            قیمت بیت‌کوین همانند سایر ارزهای رایج دنیا نوسان دارد با این تفاوت
            که قیمت آن را نهاد، سازمان و یا دولتی تعیین نمی‌کند بلکه میزان عرضه
            و تقاضای کاربران تنها معیار تعیین کننده قیمت بیت کوین است. در تترریال معیار قیمت‌گذاری، قیمت لحظه‌ای معاملات در صرافی بین‌المللی
            بایننس است.
          </p>
          <p className="home-title">از کجا بیت کوین بخرم؟</p>
          <p className="coin-explain-14">
          تترریال اولین صرافی آنلاین خرید و فروش ارزهای دیجیتال بدون واسطه در
            ایران است. شما می‌توانید به راحتی با طی فرایند خرید در تترریال، بیت
            کوین بخرید.
          </p>
          <p className="home-title">
            کارمزد خرید بیت کوین در تترریال چقدر است؟
          </p>
          <p className="coin-explain-14">
            فروش بیت کوین در تترریال کارمزدی ندارد، اما کارمزد خرید بیت کوین در
            تترریال به شرح زیر است:
            <br />
            ۱- کارمزد تبدیل ۰.۱ درصد
            <br />
            ۲- کارمزد انتقال بیت کوین BTC ۰.۰۰۰۵
          </p>
        </div>
      </div>

      <ShortFooter theme="dark" />
    </div>
  );
};

export default CoinExplain;
