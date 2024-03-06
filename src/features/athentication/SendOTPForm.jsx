import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      console.log(data);
      //   toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error.response);
    }
  };
  return (
    <div>
      <form onSubmit={sendOtpHandler} className="space-y-10">
        <TextField
          name="phonenumber"
          label="شماره موبایل را وارد کنید"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          autoComplete="off"
        />
        <button type="submit" className="btn btn--primary w-full ">
          ارسال کد تایید{" "}
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
