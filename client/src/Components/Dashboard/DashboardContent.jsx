import { GiMoneyStack } from "react-icons/gi";
import { IoBagCheck } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import Chart from "./Chart";

function DashboardContent() {
  return (
    <div className="bg-black py-10 px-10 xl:px-20 w-full rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-5 w-full mb-20">
        <div className="bg-white_bg rounded p-8 text-center">
          <div className="bg-primary inline-block p-2 rounded">
            <GiMoneyStack className="text-5xl" />
          </div>
          <p className="text-gray-600 my-2">Total Sales</p>
          <h4 className="text-4xl text-primary">$ 11,785</h4>
        </div>

        <div className="bg-white_bg rounded p-8 text-center">
          <div className="bg-primary inline-block p-2 rounded">
            <IoBagCheck className="text-5xl" />
          </div>
          <p className="text-gray-600 my-2">Total Order</p>
          <h4 className="text-4xl text-primary">11,70</h4>
        </div>

        <div className="bg-white_bg rounded p-8 text-center">
          <div className="bg-primary inline-block p-2 rounded">
            <FaUsers className="text-5xl" />
          </div>
          <p className="text-gray-600 my-2">Total Customer</p>
          <h4 className="text-4xl text-primary">778</h4>
        </div>

        <div className="bg-white_bg rounded p-8 text-center lg:hidden xl:block">
          <div className="bg-primary inline-block p-2 rounded">
            <GiMoneyStack className="text-5xl" />
          </div>
          <p className="text-gray-600 my-2">Total Expenses</p>
          <h4 className="text-4xl text-primary">$ 4,700</h4>
        </div>
      </div>
      <Chart />
    </div>
  );
}

export default DashboardContent;
