import React from "react";

// Import statements for needed common components
import HomeAndAuthNavbar from "../../components/common/navbar/HomeAndAuthNavbar";
import ShortFooter from "../../components/common/footer/ShortFooter";
import AskMe from "../../components/common/AskMe";

import ForgotPasswordMain from "../../components/auth-related/forms/ForgotPasswordMain";
import ForgotPasswordOTP from "../../components/auth-related/forms/ForgotPasswordOTP";
import ForgotPasswordChangePass from "../../components/auth-related/forms/ForgotPasswordChangePass";

const ForgotPassword = () => {
  return (
    <div className="auth-view-container">
      <HomeAndAuthNavbar theme="dark" />
      <ForgotPasswordMain />
      <AskMe />
      <ShortFooter theme="dark" />
    </div>
  );
};

export default ForgotPassword;
