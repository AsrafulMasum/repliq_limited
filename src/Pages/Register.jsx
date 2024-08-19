import { useContext, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");

  const { handleRegister, err } = useContext(AuthContext);

  const handleRegisterUser = () => {
    // Calling the handle register function
    const isSuccess = handleRegister(phone, pass);

    // On successful registration navigate to login page
    if (isSuccess?.success) {
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center gap-32 bg-black">
      <img className="min-h-screen" src="./login.png" alt="" />
      <div className="w-full pr-80">
        <h4 className="text-primary text-5xl font-medium tracking-widest text-center mb-16 border-b border-white_bg pb-4 uppercase">
          Register
        </h4>
        <div id="recaptcha-container"></div>
        <label className="text-lg text-white_bg" htmlFor="ph">
          Phone Number :
        </label>
        <div className="mb-8 mt-2">
          <PhoneInput
            inputProps={{
              required: true,
            }}
            country={"bd"}
            value={phone}
            onChange={setPhone}
          />
        </div>
        <label className="text-lg text-white_bg" htmlFor="otp">
          Password :
        </label>
        <input
          onChange={(e) => setPass(e.target.value)}
          className="mt-2 py-[13px] w-full rounded bg-[#FCFCFC] outline-none px-10 text-base"
          type="text"
        />
        <div className="text-gray-400 mt-8 mb-2 flex justify-between items-center">
          {err ? (
            <p className="text-red-600">{err}</p>
          ) : (
            <p>Password must be 6 characters.</p>
          )}
        </div>
        <button
          onClick={handleRegisterUser}
          className="bg-primary w-full py-3 rounded font-medium text-white_bg uppercase flex justify-center items-center gap-5"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
