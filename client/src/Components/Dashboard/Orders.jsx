import { Link } from "react-router-dom";
import useLoadSecureData from "../../Hooks/useLoadSecureData";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useEffect, useState } from "react";

function Orders() {
  const url = "/orders";
  const { data } = useLoadSecureData(url);

  const [orders, setOrders] = useState([]);
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);
  const [page4, setPage4] = useState(false);

  const handlePageNext = () => {
    if (page1) {
      setPage1(false);
      setPage2(true);
      setOrders(data?.slice(5, 10));
    } else if (page2) {
      setPage2(false);
      setPage3(true);
      setOrders(data?.slice(10, 15));
    } else if (page3) {
      setPage3(false);
      setPage4(true);
      setOrders(data?.slice(15, 20));
    }
  };

  const handlePagePrevious = () => {
    if (page2) {
      setPage2(false);
      setPage1(true);
      setOrders(data?.slice(0, 5));
    } else if (page3) {
      setPage3(false);
      setPage2(true);
      setOrders(data?.slice(5, 10));
    } else if (page4) {
      setPage4(false);
      setPage3(true);
      setOrders(data?.slice(10, 15));
    }
  };

  useEffect(() => {
    setOrders(data?.slice(0, 5));
  }, [setOrders, data]);

  return (
    <div>
      <h2 className="text-2xl font-bold leading-10 capitalize text-black mb-10">
        All Products
      </h2>
      <div className="overflow-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Status</th>
              <th>Total</th>
              <th>Phone</th>
              <th>Last Updated</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders?.map((order) => (
              <tr key={order?._id}>
                <th>
                  <p>#{order?._id}</p>
                </th>
                <td>
                  <p className="font-bold">{order?.productName}</p>
                </td>
                <td>
                  <p className="text-sm opacity-50">{order?.status}</p>
                </td>
                <td>$ {order?.totalPrice}</td>
                <td>$ {order?.customer?.phone}</td>
                <td>{order?.latestUpdate}</td>
                <th>
                  <Link
                    to={`/order/${order?._id}`}
                    className="btn btn-ghost btn-xs capitalize"
                  >
                    details
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-10">
        {!page1 && (
          <div className="w-full flex items-center">
            <button
              onClick={handlePagePrevious}
              className="flex justify-center items-center gap-2 bg-gray-300 py-2 px-4 rounded text-xl"
            >
              <MdKeyboardArrowLeft />
              <span>Previous</span>
            </button>
          </div>
        )}
        {!page4 && (
          <div className="w-full flex justify-end items-center">
            <button
              onClick={handlePageNext}
              className="flex justify-center items-center gap-2 bg-gray-300 py-2 px-4 rounded text-xl"
            >
              <span>Next</span>
              <MdKeyboardArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
