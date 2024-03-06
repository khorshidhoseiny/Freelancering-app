import React from "react";
import SendOTPForm from "../features/athentication/SendOTPForm";
import CheckOTPForm from "../features/athentication/CheckOTPForm";

function Auth() {
  return (
    <div className="w-full space-y-5 sm:max-w-sm">
      <SendOTPForm />
      {/* <CheckOTPForm /> */}
    </div>
  );
}

export default Auth;
