import React from 'react';

function Activity() {
  const data = [
    { month: 'Jan', video: 8, practice: 6 },
    { month: 'Feb', video: 7, practice: 5 },
    { month: 'Mar', video: 6, practice: 8 },
    { month: 'Apr', video: 5, practice: 7 },
    { month: 'May', video: 7, practice: 6 },
    { month: 'Jun', video: 8, practice: 7 },
    { month: 'Jul', video: 5, practice: 6 },
    { month: 'Aug', video: 7, practice: 8 },
    { month: 'Sep', video: 8, practice: 6 },
    { month: 'Oct', video: 6, practice: 5 },
    { month: 'Nov', video: 7, practice: 6 },
    { month: 'Dec', video: 8, practice: 7 },
  ];

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Course Activity</h3>
        <span className="text-sm text-gray-500">Monthly</span>
      </div>
      <div className="mt-6 grid grid-cols-12 gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-4 bg-blue-600 rounded-t-md"
              style={{ height: `${item.video * 10}px` }}
            ></div>
            <div
              className="w-4 bg-blue-300 rounded-t-md mt-1"
              style={{ height: `${item.practice * 10}px` }}
            ></div>
            <span className="text-sm text-gray-500 mt-2">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
