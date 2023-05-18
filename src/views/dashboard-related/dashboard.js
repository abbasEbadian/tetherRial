import React, { useEffect, useRef, useState } from "react";
import "./css/dashboard.css";
import {Link} from 'react-router-dom'
import Navbar from "../../components/common/navbar/Navbar";
import ShortFooter from "../../components/common/footer/ShortFooter";

import MyOrdersTable from "../../components/dashboard-related/MyOrdersTable";
import OrdersHistoryTable from "../../components/dashboard-related/OrdersHistoryTable";

import icons from "../../utils/icons";
import images from "../../utils/images";

import RankContainer from "../../components/dashboard-related/RankContainer";
import HoverUserLevel from "../../components/modals/HoverUserLevel";
import {Modal, Button} from 'react-bootstrap'
import {useSelector} from 'react-redux'
const Dashboard = () => {
  let withdrawRef = useRef();

  useEffect(() => {
    // document.addEventListener("mousedown", (event) => {
    //   if (
    //     !depositRef.current.contains(event.target) &
    //     !withdrawRef.current.contains(event.target)
    //   ) {
    //     setShowDeposit(false);
    //     setShowWithdraw(false);
    //   }
    // });
  }, []);

  const number = 346797466;
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showHoverLevel, setShowHoverLevel] = useState(false);
  const [userRank, setUserRank] = useState(1);

  const handleDepositClose = () => setShowDeposit(false);
  const handleDepositShow = () => setShowDeposit(true);
  const handleWithdrawClose = () => setShowWithdraw(false);
  const handleWithdrawShow = () => setShowWithdraw(true);


  const user = useSelector(state=>state.session.user)
  return (
    <div className="dashboard-view-container">
      <Navbar currentPage="dashboard" />

      <div className="dashboard-container" >
        <div>
          <p className="home-title dashboard-main-title">داشبورد</p>

          

          

          <div className="dashboard-boxes-container">
            <div data-aos="fade-up">
              <div className="dash-full-width">
                <p>{user&&user.user_name || "نام وارد نشده"}</p>
                <Link to="userAccount">
                  <img alt="Icon" src={icons.others.edit} />
                </Link>
              </div>

              <div className="dash-full-width">
                
                <img alt="Envelope icon" src={icons.others.envelope} />
               
                <p>{user&& user.user_email || "ایمیل وارد نشده"}</p>
              </div>

              <div className="dash-full-width">
                <img alt="Phone icon" src={icons.others.phone} />
                <p>{user && user.user_phone_number || "تلفن همراه وارد نشده"}</p>
              </div>

              <div className="dash-full-width">
                <img alt="ID Card icon" src={icons.others.idCard} />
                <p>{user&&user.user_id_card|| "کدملی وارد نشده"}</p>
              </div>
            </div>

            <div className="flex-center" data-aos="fade-up" data-aos-delay="100">
              <img alt="Wallet" src={images.others.wallet} />

              <div>
                <p>موجودی:</p>
                <p>0</p>
                <p>تومان</p>
              </div>

              <div>
                <button onClick={() => handleDepositShow()}>
                  واریز
                </button>
                <button onClick={() => handleWithdrawShow()}>
                  برداشت
                </button>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <img alt="Medal" src={images.others.medal} />

              <p>تایید شده سطح 1 کاربری</p>

              <RankContainer
                handleRank={setUserRank}
                userRank={userRank}
                setShowHoverLevel={setShowHoverLevel}
                showHoverLevel={showHoverLevel}
              />
              
              <HoverUserLevel
                showHoverLevel={showHoverLevel}
                display={showHoverLevel ? "flex" : "none"}
                rank={userRank}
              />
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <p className="home-title dashboard-secondary-title">سفارشات فعال</p>

          <div className="dash-table-container">
            <MyOrdersTable />
          </div>
        </div>

        <div data-aos="fade-up" >
          <p className="home-title dashboard-secondary-title">
            تاریخچه معاملات
          </p>

          <div className="dash-table-container">
            <OrdersHistoryTable />
          </div>
        </div>
      </div>

      <ShortFooter theme="dark" />
      <Modal show={showDeposit} onHide={handleDepositClose}>
        <Modal.Header closeButton>
          <Modal.Title>واریز ریالی</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <p className="depo-tip">
              جهت افزایش اعتبار کیف پول ریالی خود با استفاده از کارت‌های بانکی
              عضو شبکه شتاب و از طریق درگاه پرداخت، حتما باید از کارت‌های بانکی
              به نام خودتان که در پروفایلتان ثبت و تایید شده است، استفاده
              نمائید.
            </p>

            <div className="input-it my-2 w-100">
              <input type="text" />
              <label>مبلغ</label>
            </div>

            <div className="input-it my-2 w-100">
              <input type="text" />
              <label>شماره کارت</label>
              <img alt="Open" src={icons.others.openDropdownMenuBlack} />
            </div>

            <Link to="userAccount#debit-card"><p className="link-it-left mb-3">افزودن کارت بانکی</p></Link>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="w-25" onClick={handleDepositClose}>
            واریز
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showWithdraw} onHide={handleWithdrawClose}>
        <Modal.Header closeButton>
          <Modal.Title>برداشت ریالی</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <div          >

            <div className="input-it w-100">
              <input type="text" />
              <label>مبلغ</label>
            </div>

            <div className="flex-it-now w-100" >
              <p className="mx-2">موجودی</p>{" "}

              <div>
                <p>{number.toLocaleString("fa") + " تومان"}</p>
                <p></p>
              </div>
            </div>

            <div className="input-it w-100 my-3">
              <input type="text" />
              <label>شماره کارت</label>
              <img alt="Open" src={icons.others.openDropdownMenuBlack} />
            </div>

            <Link to="userAccount#debit-card"><p className="link-it-left mb-3">افزودن کارت بانکی</p></Link>

            <div className="marge-it w-100 d-flex align-items-center">
              <img src={icons.others.warning} alt="warning" className="d-inline-block"/>
              <p className="d-inline-block mx-2">
                درخواست‌های تصفیه ریالی در روزهای تعطیل به دلیل تعطیلی بانک‌ها و
                عدم فعالیت سیستم پایا و ساتنا انجام نمی‌شود.
              </p>
            </div>

            <div className="marge-it w-100 d-flex align-items-center">
              <img src={icons.others.warning} alt="warning" className="d-inline-block"/>
                            <p className="d-inline-block mx-2">

                درخواست‌های تصفیه بالای ۱۰۰ میلیون تومان به دلیل محدودیت‌های
                بانکی حداکثر تا یک روز آینده کاری از زمان ثبت درخواست انجام
                خواهد شد.
              </p>
            </div>

            
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className="w-25" onClick={handleWithdrawClose}>
            واریز
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
