
import { FaClipboardList } from 'react-icons/fa';

function CoursesInProgressCard() {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <FaClipboardList className="text-blue-600 text-xl" />
        </div>
        <div>
          <h4 className="text-2xl font-semibold text-gray-700">12</h4>
          <span className="text-sm text-gray-500">Courses in Progress</span>
        </div>
      </div>
      <div className="text-red-500 text-sm">
        <span>1% Decrease</span>
      </div>
    </div>
  );
}

export default CoursesInProgressCard;
