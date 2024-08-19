import { useContext, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import OTPInput from "otp-input-react";
import { CgSpinner } from "react-icons/cg";
import { AuthContext } from '../Provider/AuthProvider';

function Register() {
  const [phone, setPhone] = useState('')
  const [OTP, setOTP] = useState('')
  const {loading, onSignUp} = useContext(AuthContext)

  return (
    <div className='flex items-center gap-32 bg-black'>
      <img className='min-h-screen' src="./login.png" alt="" />
      <div className='w-full pr-80'>
      <div id="recaptcha-container"></div>
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
        <button onClick={() => onSignUp(phone)} className='bg-primary mt-5 w-full py-3 rounded font-medium text-white_bg flex justify-center items-center gap-5'>
          {loading && <CgSpinner className='animate-spin' size={25} />}
          Send OTP via SMS
        </button>
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
        <button className='bg-primary mt-5 w-full py-3 rounded font-medium text-white_bg flex justify-center items-center gap-5'>
        {loading && <CgSpinner className='animate-spin' size={25} />}
          Verify OTP
        </button>
      </div>
    </div>
  )
}

export default Register