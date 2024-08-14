
import { FaGraduationCap } from 'react-icons/fa';

function CompletedCoursesCard() {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <FaGraduationCap className="text-blue-600 text-xl" />
        </div>
        <div>
          <h4 className="text-2xl font-semibold text-gray-700">04</h4>
          <span className="text-sm text-gray-500">Completed Courses</span>
        </div>
      </div>
      <div className="text-green-500 text-sm">
        <span>20% Increase</span>
      </div>
    </div>
  );
}

export default CompletedCoursesCard;
