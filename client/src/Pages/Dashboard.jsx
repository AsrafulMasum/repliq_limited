import { Link, useLocation, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DashboardContent from "../Components/Dashboard/DashboardContent";
import Products from "../Components/Dashboard/Products";
import ProductDetails from "../Components/Dashboard/ProductDetails";
import useLoadSecureData from "../Hooks/useLoadSecureData";

function Dashboard() {
  const location = useLocation();
  const { id } = useParams();
  const { handleLogout } = useContext(AuthContext);

  // Getting single product data
  const url = `/product/${id}`;
  const { data: product } = useLoadSecureData(url);

  return (
    <div className="flex items-center gap-10 xl:gap-20 overflow-hidden">
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
        className={`mt-28 w-full mr-10 xl:mr-20 ${
          location?.pathname === "/dashboard" ? "block" : "hidden"
        }`}
      >
        <DashboardContent />
      </div>

      <div
        className={`mt-28 w-full ${
          location?.pathname === "/products" ? "block" : "hidden"
        }`}
      >
        <Products />
      </div>

      <div
        className={`mt-28 ${
          location?.pathname === `/product/${id}` ? "block" : "hidden"
        }`}
      >
        <ProductDetails product={product} />
      </div>
    </div>
  );
}

export default Dashboard;
