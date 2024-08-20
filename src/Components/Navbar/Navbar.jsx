import { useContext } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import UserDropdown from "./UserDropdown";

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="fixed w-full  bg-white_bg">
      <nav className="max-w-[1320px] mx-auto flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-5">
          <img className="w-16" src="./favicon.png" alt="logo" />
          <h2 className="text-xl">Trendify</h2>
        </Link>

        <>
          {user ? (
            <div className="flex items-center gap-12">
              <button>
                <IoCartOutline className="text-3xl" />
              </button>

              <UserDropdown />
            </div>
          ) : (
            <div className="flex items-center gap-5">
              <Link to="login">
                <PrimaryButton
                  text="Login"
                  style="border-2 border-black text-black rounded-[40px] py-4 px-12"
                />
              </Link>
              <Link to="register">
                <PrimaryButton
                  text="Register"
                  style="bg-primary text-white rounded-[40px] py-4 px-12"
                />
              </Link>
            </div>
          )}
        </>
      </nav>
    </div>
  );
}

export default Navbar;
