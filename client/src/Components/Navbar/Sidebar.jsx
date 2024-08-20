import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

function Sidebar({ isOpen }) {
  const location = useLocation();
  const { handleLogout, user } = useContext(AuthContext);

  return (
    <div
      className={`min-h-screen w-80 bg-primary absolute top-0 duration-1000 ease-in-out flex flex-col justify-between ${
        isOpen & user ? "left-0" : "-left-96"
      }`}
    >
      <ul className="flex flex-col justify-center pt-7">
        <li
          className={`text-lg font-medium py-5 pl-10 ${
            location?.pathname === "/dashboard"
              ? "bg-black text-primary"
              : "bg-transparent text-white_bg"
          }`}
        >
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li
          className={`text-lg font-medium py-5 pl-10 ${
            location?.pathname === "/products"
              ? "bg-black text-primary"
              : "bg-transparent text-white_bg"
          }`}
        >
          <Link to="/products">Products</Link>
        </li>
        <li
          className={`text-lg font-medium py-5 pl-10 ${
            location?.pathname === "/orders"
              ? "bg-black text-primary"
              : "bg-transparent text-white_bg"
          }`}
        >
          <Link to="/orders">Orders</Link>
        </li>
        <li
          className={`text-lg font-medium py-5 pl-10 ${
            location?.pathname === "/customers"
              ? "bg-black text-primary"
              : "bg-transparent text-white_bg"
          }`}
        >
          <Link to="/customers">Customers</Link>
        </li>
        <li
          className={`text-lg font-medium py-5 pl-10 ${
            location?.pathname === "/cart"
              ? "bg-black text-primary"
              : "bg-transparent text-white_bg"
          }`}
        >
          <Link to="/cart">Cart</Link>
        </li>
      </ul>

      <ul className="pb-7">
        <li
          className={`text-lg font-medium py-5 pl-10 ${
            location?.pathname === "/"
              ? "bg-black text-primary"
              : "bg-transparent text-white_bg"
          }`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={handleLogout}
          className={`text-lg font-medium py-5 pl-10 ${
            location?.pathname === "/cart"
              ? "bg-black text-primary"
              : "bg-transparent text-white_bg"
          }`}
        >
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
};
