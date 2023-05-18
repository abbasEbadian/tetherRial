import React from "react";

import Convert from "../components/modals/Convert";
import ConvertTXID from "../components/modals/ConvertTXID";
import Sell from "../components/modals/Sell";
import Buy from "../components/modals/Buy";
import BuySuccess from "../components/modals/BuySuccess";
import AuthWarning from "../components/modals/AuthWarning";
import Logout from "../components/modals/Logout";
import TwoStepSMS from "../components/modals/TwoStepSMS";
import TwoStepEmail from "../components/modals/TwoStepEmail";
import GoogleAuthenticator from "../components/modals/GoogleAuthenticator";

const ModalTest = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <GoogleAuthenticator />
    </div>
  );
};

export default ModalTest;
