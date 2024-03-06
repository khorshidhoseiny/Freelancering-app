import React, { useState } from "react";
import OTPInput from "react-otp-input";

function CheckOTPForm() {
  const [otp, setOtp] = useState("");

  return (
    <form className="space-y-3">
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        containerStyle="flex flex-row-reverse gap-x-2  justify-center"
        inputStyle={{
          width: "2.5rem",
          padding: "0.5rem 0.2rem",
          border: "1px solid rgb(var(--color-primary-400))",
          borderRadius: "0.5rem",
        }}
      />
      <button className="btn btn--primary w-full">ارسال</button>
    </form>
  );
}

export default CheckOTPForm;
