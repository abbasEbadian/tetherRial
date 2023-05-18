import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, HashRouter } from "react-router-dom";

// Import statements of home-related views
import Home from "./views/home-related/home";
import TermsAndServices from "./views/home-related/termsAndServices";
import AboutUs from "./views/home-related/aboutUs";
import FAQ from "./views/home-related/faq";
import Fees from "./views/home-related/fees";

// Import statements of auth-related views
import Login from "./views/auth-related/login";
import Signup from "./views/auth-related/signup";
import ForgotPassword from "./views/auth-related/forgotPassword";

// Import statements of dashboard-related views
import Markets from "./views/dashboard-related/markets";
import CoinExplain from "./views/dashboard-related/coinExplain";
import Authentication from "./views/dashboard-related/authentication";
import Dashboard from "./views/dashboard-related/dashboard";
import Exchange from "./views/dashboard-related/exchange";
import Convert from "./views/dashboard-related/Convert";
import History from "./views/dashboard-related/History";
import UserAccount from "./views/dashboard-related/userAccount";
import Setting from "./views/dashboard-related/setting";
import InviteFriends from "./views/dashboard-related/InviteFriends";
import Notifications from "./views/dashboard-related/Notifications";
import AOS from 'aos';
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { useDispatch } from "react-redux";
import { fetch_fees,userUpdateDetail } from "./redux/actions";
import Socket from './components/common/socket'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import AuthRoute from './routes/AuthRoute'
import BasicRoute from './routes/BasicRoute'
import Signout from "./views/auth-related/signout";
import {configure} from './utils/axiosConfig'

const App = () => {
  configure()
  const dispatch = useDispatch()
  const [state, setState] = React.useState([])
  React.useEffect(() => {
    AOS.init({
      duration : 500
    })
    AOS.refresh()
  }, [])
  React.useEffect(()=>{
    dispatch(fetch_fees())
    dispatch(userUpdateDetail())
  }, [])
 
  return (
    <>
    <HashRouter basename="">
      <Socket setState={setState} key={Math.random()}/>
      <Switch>
        {/* Routes for home-related views */}
        
        <Route path={["/fees", "/#/fees" ]} component={Fees} />
        <Route path={["/home", "/#/home"]} component={Home}/>
        <Route path={["/termsAndServices", "/#/termsAndServices"]} component={TermsAndServices} />
        <Route path={["/aboutUs", "/#/aboutUs"]} component={AboutUs} />
        <Route path={["/faq", "/#/faq"]} component={FAQ} />

        {/* Routes for auth-related views */}
        <BasicRoute path={["/login", "/#/login"]}><Login/></BasicRoute>
        <BasicRoute path={["/signup", "/#/signup"]}><Signup/></BasicRoute>
        <BasicRoute path={["/forgotPassword", "/#/forgotPassword"]}><ForgotPassword/></BasicRoute>

        {/* Routes for dashboard-related views */}
        <AuthRoute path={["/signout", "/#/signout"]}><Signout/></AuthRoute>

        <Route path={["/markets", "/#/markets"]} ><Markets/></Route>
        <AuthRoute path={["/coinExplain", "/#/coinExplain"]} ><CoinExplain/></AuthRoute>
        <AuthRoute path={["/dashboard", "/#/dashboard"]} ><Dashboard/></AuthRoute>
        <AuthRoute path={["/exchange", "/#/exchange"]} ><Exchange/></AuthRoute>
        <AuthRoute path={["/convert", "/#/convert"]} ><Convert/></AuthRoute>
        <AuthRoute path={["/history", "/#/history"]} ><History/></AuthRoute>
        <AuthRoute path={["/authentication", "/#/authentication"]} ><Authentication/></AuthRoute>
        <AuthRoute path={["/userAccount", "/#/userAccount"]} ><UserAccount/></AuthRoute>
        <AuthRoute path={["/setting", "/#/setting"]} ><Setting/></AuthRoute>
        <AuthRoute path={["/inviteFriends", "/#/inviteFriends"]} ><InviteFriends/></AuthRoute>
        <AuthRoute path={["/notifications", "/#/notifications"]} ><Notifications/></AuthRoute>
        <Route path="/" exact children={<Redirect to="/home" />} />
      </Switch>
    </HashRouter>
      <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </>
  );
};

export default App;
