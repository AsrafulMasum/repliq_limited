import { GiMoneyStack } from "react-icons/gi";
import { IoBagCheck } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import Chart from "./Chart";

function DashboardContent() {
  return (
    <div className="bg-black p-10 w-full">
      <div className="flex items-center justify-center gap-5 w-full mb-20">
        <div className="bg-white_bg rounded p-8 flex-1 text-center">
          <div className="bg-gray-400 inline-block p-2 rounded">
            <GiMoneyStack className="text-5xl" />
          </div>
          <p className="text-gray-600 text-lg">Total Sales</p>
          <h4 className="text-4xl">$ 11,785</h4>
        </div>

        <div className="bg-white_bg rounded p-8 flex-1 text-center">
          <div className="bg-gray-400 inline-block p-2 rounded">
            <IoBagCheck className="text-5xl" />
          </div>
          <p className="text-gray-600 text-lg">Total Order</p>
          <h4 className="text-4xl">11,70</h4>
        </div>

        <div className="bg-white_bg rounded p-8 flex-1 text-center">
          <div className="bg-gray-400 inline-block p-2 rounded">
            <FaUsers className="text-5xl" />
          </div>
          <p className="text-gray-600 text-lg">Total Customer</p>
          <h4 className="text-4xl">778</h4>
        </div>

        <div className="bg-white_bg rounded p-8 flex-1 text-center">
          <div className="bg-gray-400 inline-block p-2 rounded">
            <GiMoneyStack className="text-5xl" />
          </div>
          <p className="text-gray-600 text-lg">Total Expenses</p>
          <h4 className="text-4xl">$ 4,700</h4>
        </div>
      </div>
      <Chart />
    </div>
  );
}

export default DashboardContent;
