import { useContext, useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import UserDropdown from "./UserDropdown";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import Sidebar from "./Sidebar";

function Navbar() {
  const { user } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full bg-white_bg z-50 shadow-lg">
      <nav className="max-w-[1320px] mx-4 xl:mx-auto flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-5">
          <img className="w-16" src="./favicon.png" alt="logo" />
          <h2 className="text-xl">Trendify</h2>
        </Link>

        <>
          {user ? (
            <div className="flex items-center gap-12 ">
              <button>
                <IoCartOutline className="text-3xl" />
              </button>

              <UserDropdown />
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                {isOpen ? (
                  <AiOutlineClose className="text-3xl" />
                ) : (
                  <AiOutlineMenuFold className="text-3xl" />
                )}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-5">
              <Link to="login">
                <PrimaryButton
                  text="Login"
                  style="border-2 border-black text-black rounded-[40px] py-4 px-12"
                />
              </Link>
              <Link to="register" className="hidden md:block">
                <PrimaryButton
                  text="Register"
                  style="bg-primary text-white rounded-[40px] py-4 px-12"
                />
              </Link>
            </div>
          )}
        </>
        {user && (
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? (
              <AiOutlineClose className="text-3xl" />
            ) : (
              <AiOutlineMenuFold className="text-3xl" />
            )}
          </button>
        )}
        <Sidebar isOpen={isOpen} />
      </nav>
    </div>
  );
}

export default Navbar;
