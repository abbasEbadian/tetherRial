import React from "react";

// Import statements for needed common components
import HomeAndAuthNavbar from "../../components/common/navbar/HomeAndAuthNavbar";
import ShortFooter from "../../components/common/footer/ShortFooter";
import SignupMain from "../../components/auth-related/forms/SignupMain";

const Signup = () => {
  return (
    <div className="auth-view-container">
      <HomeAndAuthNavbar theme="dark" />
      <SignupMain />
      <ShortFooter theme="dark" />
    </div>
  );
};

export default Signup;
