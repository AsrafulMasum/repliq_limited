import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import OTPInput from "otp-input-react";

function Login() {
  const [phone, setPhone] = useState('')
  const [OTP, setOTP] = useState('')
  return (
    <div className='flex items-center gap-32 bg-black'>
      <img className='min-h-screen' src="./login.png" alt="" />
      <form className='w-full pr-80'>
        <label className='text-lg text-white_bg' htmlFor='ph'>
          Phone Number :
        </label>
        <br />
        <br />
        <PhoneInput
          country={'bd'}
          value={phone}
          onChange={setPhone}
        />
        <button className='bg-primary mt-5 w-full py-3 rounded-md font-medium text-white_bg'>Send OTP via SMS</button>
        <br />
        <br />
        <br />
        <br />
        <label className='text-lg text-white_bg' htmlFor='otp'>
          OTP Code :
        </label>
        <br />
        <br />
        <OTPInput className="opt-container" value={OTP} onChange={setOTP} OTPLength={6} otpType="number" disabled={false}></OTPInput>
        <button className='bg-primary mt-5 w-full py-3 rounded-md font-medium text-white_bg'>Verify OTP</button>
      </form>
    </div>
  )
}

export default Login