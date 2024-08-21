import { Link, useLocation, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DashboardContent from "../Components/Dashboard/DashboardContent";
import Products from "../Components/Dashboard/Products";
import ProductDetails from "../Components/Dashboard/ProductDetails";
import useLoadSecureData from "../Hooks/useLoadSecureData";
import AddProduct from "../Components/Dashboard/AddProduct";
import Orders from "../Components/Dashboard/Orders";
import OrderDetails from "../Components/Dashboard/OrderDetails";
import Customers from "../Components/Dashboard/Customers";

function Dashboard() {
  const location = useLocation();
  const { id } = useParams();
  const { handleLogout } = useContext(AuthContext);

  // Getting single product data
  const url = `/product/${id}`;
  const { data: product } = useLoadSecureData(url);

  // Getting single product data
  const orderUrl = `/order/${id}`;
  const { data: order } = useLoadSecureData(orderUrl);

  return (
    <div className="flex items-center overflow-hidden">
      {/* sidebar */}
      <div className="min-h-screen fixed top-0 min-w-48 w-80 bg-primary hidden lg:flex flex-col justify-between z-30">
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
            <Link to="/addProduct">Add Product</Link>
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
        className={`mt-28 w-full lg:pl-80 xl:mx-10 ${
          location?.pathname === "/dashboard" ? "block" : "hidden"
        }`}
      >
        <DashboardContent />
      </div>

      <div
        className={`flex justify-center items-center min-h-screen w-full lg:pl-80 px-4 md:mx-10 xl:mx-20 ${
          location?.pathname === "/products" ? "block" : "hidden"
        }`}
      >
        <Products />
      </div>

      <div
        className={`flex justify-center items-center min-h-screen w-full lg:pl-80 md:mx-10 xl:mx-20 ${
          location?.pathname === `/product/${id}` ? "block" : "hidden"
        }`}
      >
        <ProductDetails product={product} />
      </div>

      <div
        className={`mt-40 w-full lg:pl-80 mx-10 xl:mx-20 pb-10 ${
          location?.pathname === `/addProduct` ? "block" : "hidden"
        }`}
      >
        <AddProduct />
      </div>

      <div
        className={`flex justify-center items-center min-h-screen w-full lg:pl-80 px-4 md:mx-10 xl:mx-20 ${
          location?.pathname === "/orders" ? "block" : "hidden"
        }`}
      >
        <Orders />
      </div>

      <div
        className={`flex justify-center items-center min-h-screen w-full lg:pl-80 md:mx-10 xl:mx-20 ${
          location?.pathname === `/order/${id}` ? "block" : "hidden"
        }`}
      >
        <OrderDetails order={order} />
      </div>

      <div
        className={`flex justify-center items-center min-h-screen w-full lg:pl-80 px-4 md:mx-10 xl:mx-20 ${
          location?.pathname === "/customers" ? "block" : "hidden"
        }`}
      >
        <Customers />
      </div>
    </div>
  );
}

export default Dashboard;
