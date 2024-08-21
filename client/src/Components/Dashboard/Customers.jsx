import useLoadSecureData from "../../Hooks/useLoadSecureData";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useEffect, useState } from "react";

function Customers() {
    const url = "/customers";
    const { data } = useLoadSecureData(url);
  
    const [customers, setCustomers] = useState([]);
    const [page1, setPage1] = useState(true);
    const [page2, setPage2] = useState(false);
    const [page3, setPage3] = useState(false);
    const [page4, setPage4] = useState(false);
  
    const handlePageNext = () => {
      if (page1) {
        setPage1(false);
        setPage2(true);
        setCustomers(data?.slice(5, 10));
      } else if (page2) {
        setPage2(false);
        setPage3(true);
        setCustomers(data?.slice(10, 15));
      } else if (page3) {
        setPage3(false);
        setPage4(true);
        setCustomers(data?.slice(15, 20));
      }
    };
  
    const handlePagePrevious = () => {
      if (page2) {
        setPage2(false);
        setPage1(true);
        setCustomers(data?.slice(0, 5));
      } else if (page3) {
        setPage3(false);
        setPage2(true);
        setCustomers(data?.slice(5, 10));
      } else if (page4) {
        setPage4(false);
        setPage3(true);
        setCustomers(data?.slice(10, 15));
      }
    };
  
    useEffect(() => {
        setCustomers(data?.slice(0, 5));
    }, [setCustomers, data]);
  
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
                <th>Phone</th>
                <th>Name</th>
                <th>Email</th>
                <th>Total</th>
                <th>Token</th>
              </tr>
            </thead>
  
            <tbody>
              {customers?.map((customer) => (
                <tr key={customer?._id}>
                  <th>
                    <p>{customer?.phone}</p>
                  </th>
                  <td>
                    <p className="font-bold">{customer?.name}</p>
                  </td>
                  <td>
                    <p className="text-sm opacity-50">{customer?.email}</p>
                  </td>
                  <td>$ {customer?.expenses}</td>
                  <td> {customer?.tokenCount}</td>
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

export default Customers