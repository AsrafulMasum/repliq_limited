import { useContext, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");

  const { err, handleLogin } = useContext(AuthContext);

  const handleLoginUser = async () => {
    // Calling the handle login function
    const isSuccess = await handleLogin(phone, pass);

    // On successful login navigate to home page
    if (isSuccess?.success) {
      navigate("/");
    }
  };

  return (
    <div className="flex items-center gap-32 bg-black">
      <div className="flex-1 flex items-center min-h-screen lg:min-h-0">
        <div className="w-full px-4 md:px-16 lg:px-0 lg:pl-20 2xl:pl-40">
          <h4 className="text-primary text-5xl font-medium tracking-widest text-center mb-16 border-b border-white_bg pb-4 uppercase">
            Login
          </h4>

          <div id="recaptcha-container"></div>

          <label className="text-lg text-white_bg" htmlFor="ph">
            Phone Number :
          </label>

          <div className="mb-8 mt-2">
            <PhoneInput country={"bd"} value={phone} onChange={setPhone} />
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
              <p className="text-gray-400">Password must be 6 characters.</p>
            )}
          </div>

          <button
            onClick={handleLoginUser}
            className="bg-primary w-full py-3 rounded font-medium text-white_bg uppercase flex justify-center items-center gap-5"
          >
            Login
          </button>

          <p className="text-white_bg mt-4 text-center">
            Didn&#39;t have an account?{" "}
            <Link to="/register" className="text-primary underline ml-1">
              Register Now
            </Link>
          </p>
        </div>
      </div>

      <img className="min-h-screen lg:w-1/2 hidden lg:block object-cover" src="./login.png" alt="" />
    </div>
  );
}

export default Login;
