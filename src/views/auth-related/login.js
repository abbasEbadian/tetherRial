import React, { useState } from "react";

// Import statements for needed common components
import HomeAndAuthNavbar from "../../components/common/navbar/HomeAndAuthNavbar";
import ShortFooter from "../../components/common/footer/ShortFooter";
import AskMe from "../../components/common/AskMe";

import LoginMain from "../../components/auth-related/forms/LoginMain";
import LoginAndSignupOTP from "../../components/auth-related/forms/LoginAndSignupOTP";

const Login = () => {
  const [currentForm, setCurrentForm] = useState("login");

  return (
    <div className="auth-view-container" >
      <HomeAndAuthNavbar theme="dark" />
      {currentForm === "login" ? (
        <LoginMain handleFormChange={() => setCurrentForm("signup")} />
      ) : (
        <LoginAndSignupOTP handleFormChange={() => setCurrentForm("login")} />
      )}
      <AskMe />
      <ShortFooter theme="dark" />
    </div>
  );
};

export default Login;
