import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DashboardContent from "../Components/Dashboard/DashboardContent";
import Products from "../Components/Dashboard/Products";

function Dashboard() {
  const location = useLocation();
  const { handleLogout } = useContext(AuthContext);

  return (
    <div className="flex items-center gap-20">
      {/* sidebar */}
      <div className="min-h-screen w-80 bg-primary hidden md:flex flex-col justify-between">
        <ul className="flex flex-col justify-center pt-28">
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

      <div
        className={`${
          location?.pathname === "/dashboard" ? "block" : "hidden"
        }`}
      >
        <DashboardContent />
      </div>
      <div
        className={`${
          location?.pathname === "/products" ? "block" : "hidden"
        }`}
      >
        <Products />
      </div>
    </div>
  );
}

export default Dashboard;
