
import { FaSearch, FaBell } from 'react-icons/fa';

function Header() {
  return (
    <div className="flex justify-between items-center bg-gray-50 py-4">
      <h2 className="text-3xl font-semibold text-gray-700">Overview</h2>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <FaSearch className="absolute top-2 left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search ..."
            className="pl-10 pr-4 py-2 border rounded-lg text-gray-600 bg-white shadow-sm"
          />
        </div>
        <FaBell className="text-gray-600" />
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="rounded-full w-10 h-10"
          />
          <span className="font-semibold text-gray-700">Alexa Calen</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
