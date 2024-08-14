
import {
  FaHome,
  FaBook,
  FaCheckCircle,
  FaMoneyBill,
  FaFileInvoice,
  FaChartBar,
  FaCogs,
  FaQuestionCircle,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">ONCourse</h1>
      </div>
      <nav className="mt-10">
        <ul>
          <li className="p-4 flex items-center text-blue-600">
            <FaHome className="mr-3" /> Overview
          </li>
          <li className="p-4 flex items-center text-gray-600 hover:text-blue-600">
            <FaBook className="mr-3" /> My Course
          </li>
          <li className="p-4 flex items-center text-gray-600 hover:text-blue-600">
            <FaCheckCircle className="mr-3" /> Completed
          </li>
          <li className="p-4 flex items-center text-gray-600 hover:text-blue-600">
            <FaMoneyBill className="mr-3" /> Financial Aid
          </li>
          <li className="p-4 flex items-center text-gray-600 hover:text-blue-600">
            <FaFileInvoice className="mr-3" /> Transactions
          </li>
          <li className="p-4 flex items-center text-gray-600 hover:text-blue-600">
            <FaChartBar className="mr-3" /> Reports
          </li>
          <li className="p-4 flex items-center text-gray-600 hover:text-blue-600">
            <FaCogs className="mr-3" /> Settings
          </li>
          <li className="p-4 flex items-center text-gray-600 hover:text-blue-600">
            <FaQuestionCircle className="mr-3" /> Support
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
