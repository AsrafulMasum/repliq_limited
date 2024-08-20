import { useContext } from "react";
import { FiUser } from "react-icons/fi";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

function UserDropdown() {
  const { handleLogout } = useContext(AuthContext);
  
  return (
    <div>
      <div className="dropdown dropdown-end">
        <button className="bg-primary p-3 rounded-full">
          <FiUser className="text-2xl text-white_bg" />
        </button>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-56 p-4 shadow"
        >
          <li>
            <Link to="/dashboard" className="justify-between text-white_bg">
              Dashboard
              <span className="badge">Admin</span>
            </Link>
          </li>
          <li onClick={handleLogout}>
            <a className="text-white_bg">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDropdown;
